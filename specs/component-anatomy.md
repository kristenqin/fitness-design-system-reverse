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

## TrendCard

Purpose:

Explain long-term direction without reducing the interface to raw chart display.

Information slots:

- metric identity
- direction
- time range
- explanation
- supporting value
- optional chart

States:

- improving
- declining
- neutral
- insufficient-data

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
