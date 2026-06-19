import { existsSync } from "node:fs";

const requiredPaths = [
  "AGENTS.md",
  "docs/git-workflow.md",
  "docs/reverse-workflow.md",
  "src/reverse-components/fitness-dashboard/FitnessDashboard.contract.md",
  "src/reverse-components/fitness-dashboard/FitnessDashboard.tsx",
  "src/reverse-components/fitness-dashboard/FitnessDashboard.stories.tsx"
];

const missing = requiredPaths.filter((path) => !existsSync(path));

if (missing.length > 0) {
  console.error("Missing required project files:");
  for (const path of missing) {
    console.error(`- ${path}`);
  }
  process.exit(1);
}

console.log("Project structure validated.");
