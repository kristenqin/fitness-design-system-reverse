# ADR-008: SummaryDashboard Semantic Composition

## Status

Accepted

## Context

The concept loop now has component-level runtime coverage:

```text
Goal -> Behavior -> Record -> Trend -> Reward
```

`ProgressRing`, `MetricCard`, `WorkoutItem`, `TrendCard`, and `AwardBadge` each have reverse-surface validation, but SummaryDashboard has not yet composed TrendCard or AwardBadge.

BottomNav remains visible source evidence, but its role is source application shell rather than transferable SummaryDashboard content semantics.

## Decision

Keep the SummaryDashboard composition model conservative:

- Required core = `ProgressRing` + `MetricCard`
- Optional semantic modules = `WorkoutItem` + `TrendCard` + `AwardBadge`
- Deferred shell = `BottomNav`
- Promotion status = `not-promoted`

TrendCard and AwardBadge are ready for the next optional runtime composition cycle, but they are not composed, reviewed, or promoted by this decision.

## Consequences

- The next cycle should test SummaryDashboard optional semantic runtime composition.
- TrendCard and AwardBadge should enter SummaryDashboard only as optional modules.
- BottomNav should remain out of scope until app-shell or navigation pattern scope opens.
- Style System / Token evidence should wait until semantic composition boundaries are more stable.
- `captured` evidence remains `captured`; this ADR does not mark source evidence as reviewed.
