import { existsSync } from "node:fs";

const requiredPaths = [
  "docs/reverse-workflow.md"
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
