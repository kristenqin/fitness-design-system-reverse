# Fitness Design System Reverse

A reproducible lab for reversing fitness-product UI evidence into reusable design-system candidates.

The repository starts with a contract-first Storybook surface for a fitness dashboard. Future case studies can add captured screenshots, DOM snapshots, normalized token models, and promotion reviews under the same workflow.

## Workflow

1. Capture product evidence into `ui-reverse-experiments/<case-study>/`.
2. Normalize screenshots, DOM structure, and interaction states into design-system-oriented contracts.
3. Build a Storybook review surface under `src/reverse-components/<pattern>/`.
4. Review the surface against the contract before promoting anything into a durable design-system candidate.

## Run

```bash
npm install
npm run build
npm run storybook
```

## Project Structure

```text
docs/
  git-workflow.md
  reverse-workflow.md
scripts/
  validate-project.ts
src/reverse-components/
  fitness-dashboard/
    FitnessDashboard.contract.md
    FitnessDashboard.tsx
    FitnessDashboard.css
    FitnessDashboard.stories.tsx
```

## Git Constraints

This project follows the repository workflow in `docs/git-workflow.md` and the agent-facing rules in `AGENTS.md`.
