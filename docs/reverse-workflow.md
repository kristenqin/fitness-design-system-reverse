# Reverse Workflow

Use this workflow to turn fitness-product UI evidence into design-system candidates without losing the boundary between observation and inference.

The workflow is intentionally evidence-first and Storybook-validated:

```text
Figma evidence
→ registry structure
→ product semantics
→ component and pattern specs
→ tokens and implementation
→ Storybook runtime validation
→ decision records
```

## Stage 1: Evidence

Collect raw screenshots, Figma node references, DOM snapshots, interaction notes, and viewport metadata under:

```text
ui-reverse-experiments/<case-study>/
```

Keep raw evidence private by default. Promote only curated artifacts after review.

Durable evidence references should be normalized into:

```text
assets/
figma/node-map.json
figma/component-map.json
registry/source-map.json
```

The goal of this stage is not abstraction. The goal is traceability.

## Stage 2: Registry Normalization

Normalize evidence into machine-readable inventories:

```text
registry/pages.json
registry/flows.json
registry/components.json
registry/patterns.json
registry/source-map.json
```

The registry should capture:

- Page identity and page type
- Flow identity and flow steps
- Component candidates
- Pattern candidates
- Source evidence links
- Reuse priority
- Transferability status
- Open questions

Separate observed facts from inferred design-system rules.

## Stage 3: Product Semantics

Extract the product objects behind the interface before extracting components.

Initial reusable loop:

```text
Goal → Behavior → Record → Trend → Reward
```

Initial semantic objects:

- Activity
- Goal
- Progress
- Workout
- Trend
- Award
- Insight

Record the human-readable model in:

```text
specs/concept-model.md
```

## Stage 4: Pattern Extraction

Extract page-level and section-level patterns from the registry.

Initial patterns:

- SummaryDashboard
- ActivityDetail
- WorkoutHistory
- TrendOverview
- AchievementCollection

Each pattern should define:

- Problem solved
- Data objects used
- Information hierarchy
- Component composition
- Supported states
- Transferability limits
- Evidence references

Record durable explanations in:

```text
specs/page-patterns.md
```

Runtime validation belongs in:

```text
stories/patterns/
```

## Stage 5: Component Anatomy

Extract semantic components only after product semantics and pattern structure are clear.

Initial components:

- ProgressRing
- MetricCard
- TrendCard
- AwardBadge
- WorkoutItem
- InsightCard

Each component should define:

- Purpose
- Anatomy
- Props / input contract
- States
- Data edge cases
- Accessibility considerations
- Source evidence
- Promotion criteria

Record durable explanations in:

```text
specs/component-anatomy.md
```

Runtime validation belongs in:

```text
stories/components/
```

## Stage 6: Style System and Tokens

Do not tokenize everything immediately. Tokenize only stable visual decisions.

Initial style-system categories:

- Theme Palette
- Typography
- Spacing
- Density
- Radius Policy
- Data Colors
- Chart Rules

Token source files belong in:

```text
tokens/
```

Runtime validation belongs in:

```text
stories/style-system/
```

## Stage 7: Scenario Validation

Use scenarios to test whether the system survives real product pressure.

Initial scenarios:

- NoData
- LowProgress
- GoalCompleted
- Overachieved
- DecliningTrend
- FirstUse
- PermissionDenied
- LongHistory

Scenario stories belong in:

```text
stories/scenarios/
```

## Stage 8: Experiments

Use experiments to test migration and de-branding without polluting stable components.

Initial experiments:

- ReducedAppleStyle
- WebAdaptation
- ChineseTypography
- NoRadiusPolicy
- FocusAppMigration
- LearningTrackerMigration

Experiment stories belong in:

```text
stories/experiments/
```

## Stage 9: Promotion Review

Before promoting a reverse surface into a durable design-system candidate, write a review that answers:

- Which evidence supports this candidate?
- Which product semantic object does it serve?
- Which page pattern or component anatomy does it belong to?
- Which tokens are stable enough to name?
- Which states are missing?
- Which accessibility constraints are unresolved?
- What should stay app-specific rather than becoming a system rule?

## Stage 10: Decision Record

Durable choices belong in `decisions/` as ADRs.

Use an ADR when the project changes one of these things:

- Scope
- Information carrier
- Storybook classification
- Token strategy
- Component promotion rules
- Figma evidence policy
- Migration policy

Current core decisions:

```text
ADR-001 Project Scope
ADR-002 Not Apple Clone
ADR-003 Semantic Token First
ADR-004 Storybook as Runtime
ADR-005 Style System over Static Preview
```
