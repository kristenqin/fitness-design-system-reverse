# Fitness Design System Reverse

A reproducible workspace for reversing mature fitness-product UI evidence into reusable design-system candidates.

The goal is not to clone Apple Fitness or reproduce Apple brand assets. The goal is to extract transferable product semantics, page patterns, component anatomy, semantic tokens, runtime stories, and implementation mappings for progress, habit, training, learning, focus, and personal analytics products.

## Core Workflow

```text
Figma evidence
→ registry structure
→ product semantics
→ component and pattern specs
→ tokens and implementation
→ Storybook runtime validation
→ decision records
```

The first reusable loop is:

```text
Goal → Behavior → Record → Trend → Reward
```

Initial modules:

- Summary Dashboard
- Activity / Progress Ring
- Workout Detail
- Trends
- Awards

## Repository Layers

```text
assets/      Original screenshots, exports, and visual references.
extraction/  Candidate system-asset extraction notes after runtime review.
figma/       Figma source notes and node-to-system mapping.
registry/    Machine-readable inventory for pages, flows, components, patterns, and sources.
reviews/     Promotion reviews and blocker analysis before system promotion.
tokens/      Design token source files and semantic token drafts.
specs/       Human-readable design system explanations and usage rules.
src/         Executable design assets: tokens, components, and patterns.
stories/     Storybook stories for style system, components, patterns, scenarios, and experiments.
decisions/   Architecture and design decision records.
scripts/     Automation for token generation, registry validation, and story indexing.
```

Existing reverse implementation work can continue under `src/reverse-components/` while durable concepts, schemas, and promotion rules are recorded in the layers above.

## Storybook Classification

Storybook is the design system runtime, not just a component gallery.

```text
Style System  Non-componentized visual rules: color, typography, spacing, density, radius, chart rules.
Components    Reusable semantic UI components.
Patterns      Page-level and section-level composition patterns.
Scenarios     Real product states and data pressure tests.
Experiments   Migration, de-Appleization, Chinese typography, Web adaptation, and no-radius experiments.
```

See `docs/storybook-classification.md` for the detailed classification protocol.

## Information Carrier Rules

```text
Markdown  = explanation, usage rules, decisions, and human reasoning.
JSON      = structured facts, inventories, mapping, and validation input.
Tokens    = system variables and semantic style contracts.
Storybook = runtime validation for states, data, composition, and migration.
Figma     = editable visual source and source-node evidence.
Assets    = screenshots, exports, and reference evidence.
ADR       = durable design and architecture decisions.
```

## Run

```bash
npm install
npm run build
npm run storybook
```

## Existing Project Structure

```text
.storybook/
  main.ts
  preview.ts
README.md
assets/
  source-evidence/
    summary-dashboard-143-23952.png
decisions/
  ADR-001-project-scope.md
  ADR-002-not-apple-clone.md
  ADR-003-semantic-token-first.md
  ADR-004-storybook-as-runtime.md
  ADR-005-style-system-over-static-preview.md
docs/
  reverse-workflow.md
  storybook-classification.md
extraction/
  SummaryDashboard.system-extraction.md
figma/
  component-map.json
  node-map.json
package-lock.json
package.json
registry/
  component-boundary-matrix.json
  component-state-matrix.json
  components.json
  flows.json
  pages.json
  pages.schema.json
  patterns.json
  promotion-candidates.json
  source-map.json
reviews/
  ComponentState.accessibility-review.md
  MetricCard_WorkoutItem.boundary-review.md
  SummaryDashboard.promotion-review.md
scripts/
  validate-project.ts
specs/
  component-anatomy.md
  concept-model.md
  page-patterns.md
  visual-language.md
src/
  reverse-components/
    summary-dashboard/
      SummaryDashboard.contract.md
      SummaryDashboard.css
      SummaryDashboard.data.ts
      SummaryDashboard.experiments.stories.tsx
      SummaryDashboard.runtime-review.md
      SummaryDashboard.scenarios.stories.tsx
      SummaryDashboard.stories.tsx
      SummaryDashboard.tsx
      MetricCard.stories.tsx
      ProgressRing.stories.tsx
      TypographyMetricRoles.stories.tsx
  vite-env.d.ts
stories/
  components/
    README.md
  experiments/
    README.md
  patterns/
    README.md
  scenarios/
    README.md
  style-system/
    README.md
tokens/
  semantic.tokens.json
tsconfig.json
```
