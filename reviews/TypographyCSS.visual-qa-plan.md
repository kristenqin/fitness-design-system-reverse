# Typography CSS Visual QA Plan

## Review Scope

This thirty-fifth cycle prepares a visual QA plan for constrained typography CSS integration.

It does not execute visual QA, change CSS, change TSX, change Storybook stories, change semantic token values, accept tokens, or promote any asset.

## Current Runtime State

The previous runtime validation reviewed four connected typography tokens:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.title`

Selector-blocked tokens remain:

- `typography.record.duration`
- `typography.record.date`

## Visual QA Focus

Visual QA focuses on whether connected typography tokens still preserve runtime hierarchy, layout stability, and candidate-token boundaries.

Metric typography has the highest QA risk because metric unit and label now use absolute source values.

## Surfaces to Review

Planned visual QA surfaces:

- `MetricCard`
- `WorkoutItem`
- `SummaryDashboard`
- `Style System/Typography/MetricRoles`

## MetricCard QA Plan

Risk level: high.

Focus tokens:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`

Stories to review:

- `Components/MetricCard/Default`
- `Components/MetricCard/LongChineseText`
- `Components/MetricCard/ExtremeValue`
- `Components/MetricCard/Loading`
- `Components/MetricCard/Empty`
- `Components/MetricCard/Error`
- `Components/MetricCard/GoalCompleted`
- `Components/MetricCard/Overachieved`
- `Components/MetricCard/InteractiveTarget`

Acceptance criteria:

- metric value remains dominant,
- metric unit remains readable and subordinate,
- metric label remains legible under long localized text,
- card layout survives extreme values and state variants.

## WorkoutItem QA Plan

Risk level: medium.

Focus token:

- `typography.record.title`

Selector-blocked tokens:

- `typography.record.duration`
- `typography.record.date`

Stories to review:

- `Components/WorkoutItem/Default`
- `Components/WorkoutItem/LongTitle`
- `Components/WorkoutItem/MissingDuration`
- `Components/WorkoutItem/MissingDate`
- `Components/WorkoutItem/InteractiveTarget`
- `Components/WorkoutItem/Unavailable`

Acceptance criteria:

- record title remains role-aligned,
- long titles remain readable,
- duration and date remain selector-blocked,
- missing metadata remains understandable.

## SummaryDashboard QA Plan

Risk level: medium-high.

Focus tokens:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.title`

Stories to review:

- `Patterns/SummaryDashboard/Default`
- `Patterns/SummaryDashboard/LowProgress`
- `Patterns/SummaryDashboard/SemanticComposition/CoreOnly`
- `Patterns/SummaryDashboard/SemanticComposition/FullSemanticLoop`

Acceptance criteria:

- required core remains scannable,
- metric cards do not crowd progress or optional modules,
- full semantic loop remains a summary pattern,
- selector-blocked duration/date remain unconnected.

## Style System/Typography QA Plan

Risk level: medium.

Focus tokens:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`

Story to review:

- `Style System/Typography/MetricRoles`

Acceptance criteria:

- value, unit, and label roles remain visibly distinct,
- the story does not imply token acceptance or promotion,
- no color, spacing, density, state, or radius token claims are introduced.

## Selector-blocked Token Handling

`typography.record.duration` and `typography.record.date` remain selector-blocked until semantic selectors exist.

Visual QA may confirm the blocker, but it must not connect those tokens or introduce TSX selectors in this cycle.

## Allowed QA Outcomes

Allowed outcomes for a future execution cycle:

- pass with follow-up notes,
- fail with rollback recommendation,
- request selector strategy for duration/date,
- request metric normalization before promotion.

No outcome in this planning cycle accepts or promotes tokens.

## Files Not Changed

No CSS, TSX, Storybook, or semantic token value file is changed by this plan.

## Promotion Impact

No token, component, pattern, SummaryDashboard surface, or style-system asset is promoted.

## Next Cycle Recommendation

Execute visual QA against the planned surfaces before any promotion, broader CSS integration, selector expansion, or duration/date connection.
