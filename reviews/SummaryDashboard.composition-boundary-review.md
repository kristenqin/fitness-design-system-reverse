# SummaryDashboard Composition Boundary Review

## Review Scope

This tenth-cycle review defines the current module boundary for the reverse-surface `SummaryDashboard` pattern before adding any `TrendCard`, `AwardBadge`, or `BottomNav` runtime work.

Reviewed inputs:

- Captured SummaryDashboard source evidence and registry mappings
- SummaryDashboard contract and runtime review
- SummaryDashboard optional modules review
- MetricCard / WorkoutItem boundary review
- WorkoutItem runtime plan and runtime review
- Component, pattern, composition, boundary, and promotion registries
- Concept model, component anatomy, page pattern, visual language, token, and decision documents

Out of scope:

- Implementing `TrendCard`, `AwardBadge`, or `BottomNav`
- Adding Storybook stories
- Changing `SummaryDashboard.tsx`
- Reading more Figma nodes
- Extracting token values
- Promoting any candidate
- Expanding into app shell scope

## Current Composition State

Current reverse-surface composition:

- `activity-progress` uses `ProgressRing` and is runtime-tested as required core.
- `activity-metrics` uses `MetricCard` and is runtime-tested as required core.
- `workouts` uses `WorkoutItem` and is runtime-tested as an optional supported module.
- `trends` is captured as source evidence but has no independent contract or runtime validation.
- `awards` is captured as source evidence but has no independent contract or runtime validation.
- `bottom-nav` is visible in the source pattern evidence but is not currently a SummaryDashboard transferable core module.

## Problem

The captured source includes multiple visible sections, but visible presence alone should not make every section required SummaryDashboard anatomy.

If every observed section is treated as core, the reverse surface turns into a source-app reconstruction. If too many sections are ignored, the pattern loses the Goal -> Behavior -> Record -> Trend -> Reward loop that makes the project transferable. The boundary needs to preserve the product model while keeping source app shell concerns out of the current pattern core.

## Concept Model Alignment

The current concept model is:

```text
Goal -> Behavior -> Record -> Trend -> Reward
```

Composition alignment:

- `ProgressRing` supports Goal and Progress.
- `MetricCard` supports Progress context and compact metric understanding.
- `WorkoutItem` supports Behavior and Record.
- `TrendCard` should support Trend, but its contract is not defined yet.
- `AwardBadge` should support Reward, but it should follow after TrendCard because its source role is less structurally urgent for the next SummaryDashboard composition step.
- `BottomNav` supports source app navigation shell, not the current transferable SummaryDashboard core.

## Module Boundary Decisions

### Required Core Modules

- `activity-progress` / `ProgressRing`
- `activity-metrics` / `MetricCard`

These two modules form the current minimum SummaryDashboard runtime core because they express the immediate daily state: goal-relative progress plus compact supporting metrics.

### Optional Supported Modules

- `workouts` / `WorkoutItem`

Workouts are optional but supported. Ninth-cycle validation showed that SummaryDashboard can omit the Workouts module, show missing workout data, or render `WorkoutItem` records while preserving completed-record semantics.

### Unresolved Candidate Modules

- `trends` / `TrendCard`
- `awards` / `AwardBadge`

Both are captured in source evidence and remain valid candidates, but neither should be rendered or promoted without its own contract boundary and runtime validation.

### Deferred Shell Modules

- `bottom-nav` / source app shell

Bottom navigation is treated as source app shell for now. It is not part of the current SummaryDashboard transferable core and should not be added until the project explicitly opens app-shell or navigation pattern scope.

## TrendCard Decision

`TrendCard` is the next semantic module to define.

Reason:

- It maps directly to the Trend object in the project concept model.
- The captured source has a Trends section and Trends Box.
- SummaryDashboard cannot fully exercise Goal -> Behavior -> Record -> Trend -> Reward composition without eventually defining Trend semantics.
- It should receive a contract before runtime implementation or Storybook stories.

Decision: next cycle should create a `TrendCard` contract using existing evidence only.

## AwardBadge Decision

`AwardBadge` remains a captured but later candidate.

Reason:

- It maps to Reward in the concept model.
- The source evidence includes Awards and repeated award items.
- Reward semantics are important, but they can wait until TrendCard clarifies how SummaryDashboard handles interpretive modules after records.

Decision: defer `AwardBadge` until after the TrendCard contract path is defined.

## BottomNav Decision

`BottomNav` is deferred as source app shell.

Reason:

- Its primary role is navigation and app frame behavior, not SummaryDashboard content semantics.
- Including it now would expand scope into shell architecture.
- It is not required for validating the transferable SummaryDashboard core.

Decision: do not add BottomNav to the current SummaryDashboard runtime surface or promotion path.

## Promotion Impact

- `SummaryDashboard` remains `not-promoted`.
- `ProgressRing`, `MetricCard`, and `WorkoutItem` remain `not-promoted`.
- `TrendCard` and `AwardBadge` remain captured candidates without runtime validation.
- `BottomNav` is not promoted and is not added as a component candidate in this cycle.
- `sourceStatus` remains `captured`; this review does not change any source evidence to `reviewed`.

## Next Cycle Recommendation

The eleventh cycle should create a `TrendCard` contract only.

Recommended scope:

- Use existing SummaryDashboard evidence.
- Define TrendCard source evidence, purpose, anatomy, state plan, accessibility draft, and open questions.
- Do not implement `TrendCard`.
- Do not create TrendCard stories yet.
- Keep `AwardBadge` later.
- Keep `BottomNav` deferred as source app shell.
- Keep SummaryDashboard not promoted.
