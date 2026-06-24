# Component Anatomy

This document defines how component candidates should be extracted from source evidence.

A component is not accepted because it appears in Figma. It is accepted when it has a stable semantic role, repeated usage, clear anatomy, and runtime validation.

## Initial Component Candidates

```text
ProgressRing
MetricCard
TrendCard
AwardBadge
WorkoutItem
InsightCard
```

## Anatomy Template

Each component spec should include:

```text
Name
Purpose
Source evidence
Information slots
Input contract
States
Data edge cases
Accessibility constraints
Transferability notes
Promotion criteria
```

## ProgressRing

Purpose:

Visualize the relation between current behavior and a goal.

Information slots:

- value
- goal
- completion ratio
- status
- semantic activity type
- optional caption

States:

- default
- empty
- low-progress
- completed
- overachieved

Transfer notes:

Can migrate to focus, study, habit, budget, and training products when the domain has goal-relative progress.

## MetricCard

Purpose:

Display one trackable metric with enough context for the user to understand its current meaning.

Information slots:

- title
- value
- unit
- goal relation
- trend
- caption
- visual encoding
- action target

States:

- default
- loading
- empty
- error
- long-text
- extreme-value
- goal-completed
- overachieved

## WorkoutItem

Purpose:

Represent one completed behavior record in a list, dashboard preview, or history surface.

Primary object:

- Record
- Completed workout record in the captured SummaryDashboard evidence

Observed information slots:

- title
- duration
- date

Inferred information slots:

- activity type
- record identity
- detail target
- metadata group

Future candidate slots:

- thumbnail
- route
- distance
- energy
- pace
- sync state

States to validate:

- default
- long-title
- missing-duration
- missing-date
- interactive-target

Transfer notes:

Can migrate to focus sessions, study sessions, habit completions, and training records when the object is a completed behavior record rather than a standalone metric.

## TrendCard

Purpose:

Explain long-term direction without reducing the interface to raw chart display.

Primary object:

- Trend
- Insight

Observed information slots:

- section identity
- Trends Box container
- explanatory text block
- action text

Inferred information slots:

- metric identity
- direction
- time range
- interpretation
- data sufficiency
- optional action target

Future candidate slots:

- supporting value
- delta value
- percentage change
- direction icon
- chart or sparkline
- confidence label

States to validate:

- default
- improving
- declining
- neutral
- insufficient-data
- long-explanation

Boundary with MetricCard:

`MetricCard` owns current metric display. `TrendCard` owns direction and interpretation over time. A TrendCard may contain metric values, but those values are supporting evidence for the trend and do not make the card a generic metric tile.

Runtime status:

Eleventh-cycle contract planning defines `TrendCard` as the next semantic module for SummaryDashboard, but runtime validation has not started. It should not be composed into SummaryDashboard until component-level runtime stories validate direction, insufficient-data, long-explanation, and accessibility behavior.

## AwardBadge

Purpose:

Turn repeated behavior into visible reward evidence.

Information slots:

- award identity
- visual symbol
- status
- unlock condition
- date or progress

States:

- locked
- unlocked
- new
- in-progress

## Promotion Criteria

A component can be promoted only when:

- it has at least one evidence reference
- it has a clear semantic purpose
- it has a documented anatomy
- it has Storybook runtime stories for default and edge states
- it does not rely on Apple-specific branding to remain meaningful

## Runtime Notes

### ProgressRing

Fourth-cycle promotion review keeps `ProgressRing` as a reverse-surface candidate. Runtime stories cover default, low-progress, and completed states, but empty and overachieved states remain missing. Source-backed geometry, token mapping, and accessibility requirements are not yet reviewed enough for promotion.

Fifth-cycle runtime validation adds empty, overachieved, and unavailable states with synthetic data. The accessibility draft clarifies that the visual ring is decorative, while the `figure` needs a meaningful label for value, goal, and unavailable semantics. This improves runtime coverage but does not promote the candidate.

### MetricCard

Fourth-cycle promotion review keeps `MetricCard` as a reverse-surface candidate. Runtime stories cover default, long Chinese text, and extreme values, but loading, empty, error, goal-completed, and overachieved states remain missing. The boundary between `MetricCard` and `WorkoutItem` is still unresolved.

Fifth-cycle runtime validation adds loading, empty, error, goal-completed, overachieved, and interactive-target states with synthetic data. The accessibility draft keeps non-interactive cards as `article` surfaces and uses a native `button` only for the interactive target state. This improves state coverage but leaves error announcement behavior, interaction rules, and the `WorkoutItem` boundary unresolved.

## Boundary Notes

### MetricCard and WorkoutItem

Sixth-cycle boundary review separates compact metric display from completed behavior records. `MetricCard` owns Activity-style metric groups such as `143:25113` named `Stats`. `WorkoutItem` owns Workouts-section rows such as `143:25136` and `143:25151` named `Card`.

A workout row can contain metric values, but the row's primary object is a completed behavior record. `MetricCard` may become an internal substructure of `WorkoutItem` later, but it cannot replace `WorkoutItem`.

### WorkoutItem Contract

Seventh-cycle contract planning defines `WorkoutItem` as a completed behavior record candidate. Observed slots are limited to title, duration, and date from the captured SummaryDashboard workout rows. Additional slots such as activity type, detail target, route, distance, energy, and sync state remain inferred or future candidates until runtime validation or additional evidence supports them.

### WorkoutItem Runtime

Eighth-cycle runtime validation adds a local reverse component for default, long-title, missing-duration, missing-date, interactive-target, and unavailable states. Missing metadata renders as unavailable instead of `0` or blank text. The component keeps completed-record semantics by rendering duration and date as record metadata rather than standalone `MetricCard` instances. This is minimum runtime validation only and does not promote `WorkoutItem`.

### TrendCard Contract

Eleventh-cycle contract planning defines `TrendCard` as the owner of direction and interpretation over time. Existing evidence confirms a Trends section, Trends Box, explanatory text, and `Get Started` action, but does not confirm exact trend copy, arrows, percentages, delta values, charts, or sparklines. Runtime validation has not started, and the candidate remains `not-promoted`.
