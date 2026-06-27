# ADR-007: Concept Loop Before Promotion

## Status

Accepted

## Context

The reverse workflow now has component-level runtime validation for the first semantic loop:

```text
Goal -> Behavior -> Record -> Trend -> Reward
```

The mapped candidates are `ProgressRing`, `MetricCard`, `WorkoutItem`, `TrendCard`, and `AwardBadge`.

Component-level coverage is useful, but it does not prove that the system is ready for promotion. TrendCard and AwardBadge are not composed into SummaryDashboard, source evidence is not reviewed, and token values remain pending.

## Decision

Do not promote.

Review the concept loop before any promotion decision. Treat the loop as component-level semantic coverage only.

After this review, decide between:

- SummaryDashboard semantic composition, or
- Style System / Token evidence cycle.

The preferred next step is SummaryDashboard semantic composition because semantic module boundaries should stabilize before source-backed token extraction.

## Consequences

- No component moves to `src/components`.
- No pattern moves to stable `src/patterns`.
- `sourceStatus: captured` remains separate from source review.
- Storybook runtime coverage supports review but does not equal promotion.
- Token extraction remains blocked until semantic composition boundaries are clearer.
