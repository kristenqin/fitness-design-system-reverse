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

Eleventh-cycle TrendCard contract planning treats `TrendCard` as the next SummaryDashboard semantic module because it maps to Trend in `Goal -> Behavior -> Record -> Trend -> Reward`. TrendCard must complete component-level runtime validation before it can be considered for SummaryDashboard composition. AwardBadge remains later, Bottom Nav remains deferred app shell, and SummaryDashboard remains `not-promoted`.

Thirteenth-cycle AwardBadge contract planning treats `AwardBadge` as the SummaryDashboard Reward semantic module because it maps to Reward in `Goal -> Behavior -> Record -> Trend -> Reward`. AwardBadge must complete component-level runtime validation before it can be considered for SummaryDashboard composition. TrendCard has component-level runtime validation but is not composed here, Bottom Nav remains deferred app shell, and SummaryDashboard remains `not-promoted`.

Fifteenth-cycle concept-loop review confirms that the main semantic loop now has component-level runtime coverage: Goal / Progress, Metric context, Behavior / Record, Trend / Insight, and Reward / Achievement. SummaryDashboard is still incomplete because `TrendCard` and `AwardBadge` have not been composed into the pattern. Tokens, layout, accessibility, and transferability remain blockers, and the pattern remains `not-promoted`.

Sixteenth-cycle semantic composition review keeps `ProgressRing` and `MetricCard` as the required SummaryDashboard core. `WorkoutItem`, `TrendCard`, and `AwardBadge` are optional semantic modules. TrendCard and AwardBadge are ready for the next optional runtime composition cycle, but they are not yet composed into SummaryDashboard. Bottom Nav remains deferred source app shell. This is a planning decision only and does not promote the pattern.

Seventeenth-cycle semantic runtime composition validates `TrendCard` and `AwardBadge` inside SummaryDashboard as optional semantic modules. `ProgressRing` and `MetricCard` remain the required core, `WorkoutItem` remains optional-supported, and Bottom Nav remains deferred source app shell. The `FullSemanticLoop` story validates Goal -> Behavior -> Record -> Trend -> Reward as a summary pattern only; it is not a FullDashboard, not a source clone, and not promotion.

Forty-fifth-cycle source visual alignment planning moves SummaryDashboard from metric-only visual QA into page-level alignment planning. The next step should capture runtime visual baselines for existing SummaryDashboard and MetricCard surfaces before any further CSS execution. Bottom Nav remains deferred source app shell. This plan does not read new Figma nodes, does not change runtime files, and does not promote the pattern.
