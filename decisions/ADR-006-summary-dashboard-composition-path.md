# ADR-006: SummaryDashboard Composition Path

## Status

Accepted

## Context

The captured SummaryDashboard source includes Activity, Workouts, Trends, Awards, and Bottom Nav. Runtime validation now covers the required Activity core and optional WorkoutItem composition, but TrendCard, AwardBadge, and BottomNav are still unresolved.

The project needs a conservative sequencing decision before adding more modules.

## Decision

Use this composition path:

- Keep `ProgressRing` / activity progress as current required core.
- Keep `MetricCard` / activity metrics as current required core.
- Keep `WorkoutItem` / workouts as optional-supported.
- Define `TrendCard` next through a contract-only cycle.
- Defer `AwardBadge` until after TrendCard boundaries are clearer.
- Defer `BottomNav` as source app shell, outside the current SummaryDashboard transferable core.
- Keep `SummaryDashboard` not promoted.

## Consequences

- The next cycle should not implement TrendCard yet; it should define the contract first.
- AwardBadge remains a captured candidate but waits behind TrendCard.
- BottomNav does not enter the current component or pattern promotion path.
- SummaryDashboard remains a reverse-surface pattern until unresolved module boundaries, accessibility behavior, and source review are complete.
