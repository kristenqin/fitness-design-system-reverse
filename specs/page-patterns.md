# Page Patterns

This document defines reusable page and section patterns extracted from Fitness-style product evidence.

A page pattern is not a screen copy. It is a reusable arrangement of product objects, information hierarchy, interaction entry points, and state handling.

## Initial Patterns

```text
SummaryDashboard
ActivityDetail
WorkoutHistory
TrendOverview
AchievementCollection
```

## Pattern Template

Each pattern should include:

```text
Name
Problem solved
Core product objects
Information hierarchy
Component composition
Primary states
Transferability notes
Evidence references
Promotion criteria
```

## SummaryDashboard

Problem solved:

Compress multiple behavior indicators into a daily state overview so the user can quickly understand what is happening now.

Core objects:

- Goal
- Progress
- Activity
- Trend
- Award

Information hierarchy:

1. Current goal-relative progress
2. Supporting metrics
3. Trend or insight entry
4. Reward or achievement entry
5. Historical detail entry

Initial components:

- ProgressRing
- MetricCard
- TrendCard
- AwardBadge

Primary states:

- default
- no data
- low progress
- goal completed
- overachieved
- permission denied

## ActivityDetail

Problem solved:

Expand one progress object into values, explanations, and supporting metrics.

Core objects:

- Activity
- Progress
- Metric
- Goal

## TrendOverview

Problem solved:

Turn repeated records into direction and interpretation.

Core objects:

- Trend
- Metric
- Insight

## AchievementCollection

Problem solved:

Organize reward evidence into a browsable collection that makes sustained behavior visible.

Core objects:

- Award
- Milestone
- Reward

## Promotion Criteria

A pattern can be promoted only when:

- it has source evidence
- it is represented in `registry/patterns.json`
- its component composition is documented
- it has Storybook stories for at least one default and one edge scenario
- it can be explained without Apple-specific brand assumptions

## Runtime Notes

### SummaryDashboard

Fourth-cycle promotion review keeps `SummaryDashboard` as a reverse-surface pattern candidate. Runtime stories cover a minimum default shell, low-progress shell, low-progress scenario, and WebAdaptation experiment. The observed Workouts, Trends, Awards, and Bottom Nav sections are not yet implemented in the runtime surface, and required versus optional module rules remain unresolved.

Ninth-cycle runtime validation adds optional Workouts module coverage. Workouts are currently optional but supported: SummaryDashboard can omit the module, show missing workout data, or render `WorkoutItem` records. Trends, Awards, and Bottom Nav remain unresolved and are not promoted into the pattern.

Tenth-cycle composition boundary review defines the current SummaryDashboard module path. Activity progress / `ProgressRing` and activity metrics / `MetricCard` are the required core for the current reverse surface. Workouts / `WorkoutItem` are optional-supported. Trends / `TrendCard` should receive the next contract. Awards / `AwardBadge` are deferred until after TrendCard. Bottom Nav is treated as deferred source app shell, not current transferable SummaryDashboard core. No module is promoted by this boundary decision.
