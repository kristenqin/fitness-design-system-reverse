#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

function readJson(filePath) {
  return JSON.parse(readFileSync(path.join(repoRoot, filePath), "utf8"));
}

function gitLines(args) {
  try {
    return execFileSync("git", args, { cwd: repoRoot, encoding: "utf8" })
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

function unique(values) {
  return [...new Set(values)];
}

function globToRegExp(pattern) {
  const escaped = pattern
    .replace(/[.+^${}()|[\]\\]/g, "\\$&")
    .replace(/\*\*/g, "__DOUBLE_STAR__")
    .replace(/\*/g, "[^/]*")
    .replace(/__DOUBLE_STAR__/g, ".*");
  return new RegExp(`^${escaped}$`);
}

function matchesAny(filePath, patterns = []) {
  return patterns.some((pattern) => globToRegExp(pattern).test(filePath));
}

function isMarkdownLike(filePath) {
  return [".md", ".mdx", ".txt"].includes(path.extname(filePath));
}

function getChangedFiles() {
  return unique([
    ...gitLines(["diff", "--name-only"]),
    ...gitLines(["diff", "--name-only", "--cached"]),
    ...gitLines(["ls-files", "--others", "--exclude-standard"])
  ]).sort();
}

function walkJson(value, visitor, pathParts = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walkJson(item, visitor, [...pathParts, String(index)]));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      walkJson(child, visitor, [...pathParts, key]);
    }
    return;
  }
  visitor(value, pathParts);
}

function isPolicyPath(pathParts) {
  const joined = pathParts.join(".");
  return [
    "forbiddenStatusValues",
    "blockedTokenGroups",
    "blockedChanges",
    "defaultAcceptancePolicy",
    "defaultPromotionPolicy",
    "promotionPolicy",
    "acceptancePolicy",
    "notes"
  ].some((policyPath) => joined.includes(policyPath));
}

function getActionCandidates(nextAction) {
  if (nextAction.activeAction) {
    return [
      {
        label: "activeAction",
        action: nextAction.activeAction
      },
      ...(nextAction.transitionVerificationAction
        ? [
            {
              label: "transitionVerificationAction",
              action: nextAction.transitionVerificationAction
            }
          ]
        : [])
    ];
  }

  return [
    {
      label: "legacy next-action",
      action: nextAction
    }
  ];
}

function validateActionShape(nextAction, actionCandidates) {
  const shapeFailures = [];

  if (nextAction.activeAction && !nextAction.nextRecommendedAction) {
    shapeFailures.push("next-action schema v2 requires nextRecommendedAction.");
  }

  for (const { label, action } of actionCandidates) {
    for (const field of ["name", "mode", "allowedChanges", "blockedChanges", "requiredDeliverables"]) {
      if (!(field in action)) {
        shapeFailures.push(`${label} is missing required field: ${field}`);
      }
    }
  }

  return shapeFailures;
}

function evaluateActionBoundary({ action, label, invariants, changedFiles }) {
  const actionFailures = [];
  const allowedChanges = action.allowedChanges ?? [];
  const blockedChanges = action.blockedChanges ?? [];
  const requiredDeliverables = action.requiredDeliverables ?? [];
  const forbiddenStatusValues = unique([
    ...(invariants.forbiddenStatusValues ?? []),
    ...(action.forbiddenStatusValues ?? [])
  ]);
  const forbiddenTextPatterns = (invariants.forbiddenTextPatterns ?? []).map((pattern) => ({
    pattern,
    regex: new RegExp(pattern, "i")
  }));
  const cycleMode = action.mode;

  for (const filePath of changedFiles) {
    if (!matchesAny(filePath, allowedChanges)) {
      actionFailures.push(`Changed file is not allowed by ${label}.allowedChanges: ${filePath}`);
    }
    if (matchesAny(filePath, blockedChanges)) {
      actionFailures.push(`Changed file matches ${label}.blockedChanges: ${filePath}`);
    }
  }

  for (const filePath of requiredDeliverables) {
    if (!existsSync(path.join(repoRoot, filePath))) {
      actionFailures.push(`Required deliverable is missing for ${label}: ${filePath}`);
    }
  }

  const cssChanged = changedFiles.some((filePath) => filePath.endsWith(".css"));
  const tsxChanged = changedFiles.some((filePath) => filePath.endsWith(".tsx"));
  const storybookChanged = changedFiles.some((filePath) => filePath.includes(".stories.") || filePath.startsWith("stories/"));
  const tokenFileChanged = changedFiles.includes("tokens/semantic.tokens.json");

  if (cssChanged && !(invariants.cssChangeRequiresExplicitCycleType ?? []).includes(cycleMode)) {
    actionFailures.push(`CSS changed but ${label}.mode "${cycleMode}" is not an explicit CSS change cycle.`);
  }
  if (tsxChanged && !(invariants.tsxChangeRequiresExplicitCycleType ?? []).includes(cycleMode)) {
    actionFailures.push(`TSX changed but ${label}.mode "${cycleMode}" is not an explicit TSX change cycle.`);
  }
  if (storybookChanged && !(invariants.storybookChangeRequiresExplicitCycleType ?? []).includes(cycleMode)) {
    actionFailures.push(`Storybook changed but ${label}.mode "${cycleMode}" is not an explicit Storybook change cycle.`);
  }
  if (tokenFileChanged && !(invariants.tokenValueChangeRequiresExplicitCycleType ?? []).includes(cycleMode)) {
    actionFailures.push(`tokens/semantic.tokens.json changed but ${label}.mode "${cycleMode}" is not an explicit token value change cycle.`);
  }

  for (const filePath of changedFiles.filter((filePath) => filePath.endsWith(".json"))) {
    if (!existsSync(path.join(repoRoot, filePath))) {
      continue;
    }
    const json = readJson(filePath);
    walkJson(json, (value, pathParts) => {
      if (typeof value !== "string") {
        return;
      }
      if (pathParts.at(-1) === "promotionStatus" && value !== "not-promoted") {
        actionFailures.push(`${filePath}:${pathParts.join(".")} must remain not-promoted.`);
      }
      if (forbiddenStatusValues.includes(value) && !isPolicyPath(pathParts)) {
        actionFailures.push(`${filePath}:${pathParts.join(".")} uses forbidden status value "${value}".`);
      }
    });
  }

  for (const filePath of changedFiles.filter(isMarkdownLike)) {
    const absolutePath = path.join(repoRoot, filePath);
    if (!existsSync(absolutePath)) {
      continue;
    }
    const text = readFileSync(absolutePath, "utf8");
    for (const { pattern, regex } of forbiddenTextPatterns) {
      if (regex.test(text)) {
        actionFailures.push(`${filePath} matches forbidden text pattern: ${pattern}`);
      }
    }
  }

  return actionFailures;
}

const nextActionPath = "registry/next-action.json";
const invariantsPath = "registry/workflow-invariants.json";

const failures = [];

if (!existsSync(path.join(repoRoot, nextActionPath))) {
  failures.push(`Missing ${nextActionPath}`);
}

if (!existsSync(path.join(repoRoot, invariantsPath))) {
  failures.push(`Missing ${invariantsPath}`);
}

const nextAction = failures.length ? null : readJson(nextActionPath);
const invariants = failures.length ? null : readJson(invariantsPath);
const changedFiles = getChangedFiles();

if (nextAction && invariants) {
  const actionCandidates = getActionCandidates(nextAction);
  failures.push(...validateActionShape(nextAction, actionCandidates));

  if (!failures.length) {
    const evaluated = actionCandidates.map((candidate) => ({
      ...candidate,
      failures: evaluateActionBoundary({
        ...candidate,
        invariants,
        changedFiles
      })
    }));
    const passingAction = evaluated.find((candidate) => candidate.failures.length === 0);

    if (!passingAction) {
      failures.push(...evaluated[0].failures);
      for (const candidate of evaluated.slice(1)) {
        failures.push(`Alternative ${candidate.label} also failed verification.`);
        failures.push(...candidate.failures);
      }
    } else {
      process.env.WORKFLOW_VERIFIED_ACTION = passingAction.label;
    }
  }
}

if (failures.length) {
  console.error("FAIL workflow cycle verification");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("PASS workflow cycle verification");
if (process.env.WORKFLOW_VERIFIED_ACTION) {
  console.log(`Verified action boundary: ${process.env.WORKFLOW_VERIFIED_ACTION}.`);
}
if (changedFiles.length) {
  console.log(`Checked ${changedFiles.length} changed file(s).`);
} else {
  console.log("No changed files detected.");
}
