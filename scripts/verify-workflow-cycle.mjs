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
    "notes"
  ].some((policyPath) => joined.includes(policyPath));
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
  const allowedChanges = nextAction.allowedChanges ?? [];
  const blockedChanges = nextAction.blockedChanges ?? [];
  const forbiddenStatusValues = unique([
    ...(invariants.forbiddenStatusValues ?? []),
    ...(nextAction.forbiddenStatusValues ?? [])
  ]);
  const forbiddenTextPatterns = (invariants.forbiddenTextPatterns ?? []).map((pattern) => ({
    pattern,
    regex: new RegExp(pattern, "i")
  }));
  const cycleMode = nextAction.mode;

  for (const filePath of changedFiles) {
    if (!matchesAny(filePath, allowedChanges)) {
      failures.push(`Changed file is not allowed by next-action.allowedChanges: ${filePath}`);
    }
    if (matchesAny(filePath, blockedChanges)) {
      failures.push(`Changed file matches next-action.blockedChanges: ${filePath}`);
    }
  }

  const cssChanged = changedFiles.some((filePath) => filePath.endsWith(".css"));
  const tsxChanged = changedFiles.some((filePath) => filePath.endsWith(".tsx"));
  const storybookChanged = changedFiles.some((filePath) => filePath.includes(".stories.") || filePath.startsWith("stories/"));
  const tokenFileChanged = changedFiles.includes("tokens/semantic.tokens.json");

  if (cssChanged && !(invariants.cssChangeRequiresExplicitCycleType ?? []).includes(cycleMode)) {
    failures.push(`CSS changed but cycle mode "${cycleMode}" is not an explicit CSS change cycle.`);
  }
  if (tsxChanged && !(invariants.tsxChangeRequiresExplicitCycleType ?? []).includes(cycleMode)) {
    failures.push(`TSX changed but cycle mode "${cycleMode}" is not an explicit TSX change cycle.`);
  }
  if (storybookChanged && !(invariants.storybookChangeRequiresExplicitCycleType ?? []).includes(cycleMode)) {
    failures.push(`Storybook changed but cycle mode "${cycleMode}" is not an explicit Storybook change cycle.`);
  }
  if (tokenFileChanged && !(invariants.tokenValueChangeRequiresExplicitCycleType ?? []).includes(cycleMode)) {
    failures.push(`tokens/semantic.tokens.json changed but cycle mode "${cycleMode}" is not an explicit token value change cycle.`);
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
        failures.push(`${filePath}:${pathParts.join(".")} must remain not-promoted.`);
      }
      if (forbiddenStatusValues.includes(value) && !isPolicyPath(pathParts)) {
        failures.push(`${filePath}:${pathParts.join(".")} uses forbidden status value "${value}".`);
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
        failures.push(`${filePath} matches forbidden text pattern: ${pattern}`);
      }
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
if (changedFiles.length) {
  console.log(`Checked ${changedFiles.length} changed file(s).`);
} else {
  console.log("No changed files detected.");
}
