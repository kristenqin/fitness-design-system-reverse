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
figma/       Figma source notes and node-to-system mapping.
registry/    Machine-readable inventory for pages, flows, components, patterns, and sources.
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
docs/
  reverse-workflow.md
  storybook-classification.md
```
