# Concept Model

This document defines the product semantics behind the Fitness design-system reverse project.

The goal is to extract transferable concepts before extracting visual components.

## Core Loop

```text
Goal → Behavior → Record → Trend → Reward
```

This loop is the first reusable system boundary.

## Core Objects

### Goal

A desired target state that gives behavior direction.

Examples:

- daily movement goal
- exercise goal
- stand goal
- weekly training target

Transfer examples:

- focus duration target
- study session target
- budget target
- habit completion target

### Behavior

A user action that can be measured or remembered.

Examples:

- walking
- exercising
- standing
- completing a workout

Transfer examples:

- focusing
- studying
- writing
- saving money

### Record

Evidence that a behavior happened.

Examples:

- workout entry
- activity history item
- daily completion record

A record should preserve enough context for future trend interpretation.

### Progress

The current relation between behavior and goal.

Progress should answer:

- how far the user has gone
- how close the user is to the goal
- whether the goal is complete
- whether the user is far behind or overachieving

### Trend

A direction inferred from repeated records.

Trend should answer:

- is the user improving?
- declining?
- stable?
- lacking enough data?

### Reward

A symbolic recognition of repeated behavior, milestone completion, or meaningful progress.

Reward should not be treated as decoration. It is a product mechanism for making sustained behavior visible.

### Insight

A short interpretation that helps the user understand what the system sees.

Insight bridges raw data and action.

## Transfer Principle

Do not copy the Fitness domain literally. Extract the object relation.

```text
Fitness:
Move Ring → Workout Record → Activity Trend → Award

Focus:
Focus Ring → Focus Session → Attention Trend → Milestone

Learning:
Study Progress → Study Record → Ability Trend → Badge
```

## First Cycle Boundary

The first cycle should only validate:

- Summary Dashboard
- ProgressRing
- MetricCard
- basic semantic colors
- basic typography roles
- LowProgress scenario
- WebAdaptation experiment

Do not expand into the full design system until this loop works in Storybook.

## Runtime Coverage Notes

Fifteenth-cycle concept-loop review maps current component-level runtime coverage to the core loop:

- Goal / Progress -> `ProgressRing`
- Metric context -> `MetricCard`
- Behavior / Record -> `WorkoutItem`
- Trend / Insight -> `TrendCard`
- Reward / Achievement -> `AwardBadge`

This is semantic coverage only. It is not promotion, not a source-reviewed visual system, and not a stable token system. SummaryDashboard still needs semantic composition review before the loop can be considered pattern-level coverage.
