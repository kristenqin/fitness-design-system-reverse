# SummaryDashboard Semantic Composition Review

## Review Scope

This sixteenth-cycle review decides whether `TrendCard` and `AwardBadge` should move from component-level runtime candidates into the next SummaryDashboard optional runtime composition cycle.

Reviewed inputs:

- Fifteenth-cycle Concept Loop Composition Review
- SummaryDashboard contract and runtime review
- SummaryDashboard composition boundary and optional modules reviews
- WorkoutItem, TrendCard, and AwardBadge contracts and runtime reviews
- Component state, boundary, pattern composition, module priority, and promotion registries
- Concept model, component anatomy, page pattern, visual language, token, and decision documents

Out of scope:

- Implementing UI
- Adding Storybook stories
- Editing `SummaryDashboard.tsx`
- Connecting TrendCard or AwardBadge to SummaryDashboard in this cycle
- Implementing Trends section, Awards section, FullDashboard, or BottomNav
- Token extraction
- Figma reads
- Promotion

## Current State

The concept loop is component-level covered but not promoted:

```text
Goal -> Behavior -> Record -> Trend -> Reward
```

Current SummaryDashboard composition state:

- `ProgressRing` / activity progress is required core.
- `MetricCard` / activity metrics is required core.
- `WorkoutItem` / Workouts is optional-supported and runtime-tested in SummaryDashboard.
- `TrendCard` has minimum component-level runtime validation but is not composed into SummaryDashboard.
- `AwardBadge` has minimum component-level runtime validation but is not composed into SummaryDashboard.
- `BottomNav` is deferred source app shell.

## Problem

TrendCard and AwardBadge are no longer just unresolved contracts. Both have component-level runtime validation and stable enough boundaries for a composition decision.

The remaining question is whether they should become required SummaryDashboard anatomy or optional semantic modules for the next runtime composition cycle.

If they are treated as required too early, SummaryDashboard risks becoming a source-app clone. If they remain deferred too long, the pattern cannot validate the full transferable concept loop.

## Semantic Composition Principle

SummaryDashboard should compose product meaning, not every visible source section.

Composition rules:

- Required core should express the smallest current-state summary.
- Optional semantic modules may extend the concept loop when their component contracts and minimum runtime surfaces exist.
- Deferred modules stay out of the transferable pattern when their primary role is app shell or source navigation.
- Runtime composition readiness does not imply promotion.

## Required Core Decision

Required core:

- `activity-progress` / `ProgressRing`
- `activity-metrics` / `MetricCard`

Reason:

These two modules express the current daily state: goal-relative progress plus compact metric context. They are the smallest SummaryDashboard surface that can still answer what is happening now.

Decision:

Keep `ProgressRing` and `MetricCard` as required core for the current reverse-surface SummaryDashboard.

## Optional Module Decisions

### Workouts / WorkoutItem

Decision:

Keep Workouts as an optional semantic module.

Reason:

WorkoutItem is already runtime-tested as an optional SummaryDashboard module. It preserves completed-record semantics and can be omitted, empty, or populated without breaking the pattern.

Current status:

- `compositionStatus`: `runtime-tested-optional-module`
- `requirementStatus`: `optional-supported`
- `promotionStatus`: `not-promoted`

### Trends / TrendCard

Decision:

Move Trends / TrendCard to ready for optional runtime composition.

Reason:

TrendCard now has component-level runtime validation for direction, interpretation, insufficient data, and long explanation states. It owns Trend / Insight semantics and no longer depends on MetricCard to carry its meaning.

Runtime composition should test TrendCard as an optional semantic module, not as required core.

Current planning status:

- `compositionStatus`: `ready-for-runtime-composition`
- `requirementStatus`: `optional-semantic-module`
- `promotionStatus`: `not-promoted`

### Awards / AwardBadge

Decision:

Move Awards / AwardBadge to ready for optional runtime composition.

Reason:

AwardBadge now has component-level runtime validation for reward status states and decoration-risk control. It owns Reward / Achievement semantics and should not be represented by MetricCard, TrendCard, or WorkoutItem.

Runtime composition should test AwardBadge as an optional semantic module, not as required core.

Current planning status:

- `compositionStatus`: `ready-for-runtime-composition`
- `requirementStatus`: `optional-semantic-module`
- `promotionStatus`: `not-promoted`

## Deferred Module Decisions

### BottomNav

Decision:

Keep BottomNav deferred as source app shell.

Reason:

BottomNav primarily represents source application navigation, not SummaryDashboard content semantics. Including it would expand scope into app-shell architecture before the transferable page pattern is stable.

Current status:

- `compositionStatus`: `deferred-shell-module`
- `requirementStatus`: `deferred`
- `promotionStatus`: `not-promoted`

## Composition Risks

- Optional modules could be mistaken for required pattern anatomy if the next runtime story looks like a full source page.
- TrendCard and AwardBadge runtime data remains synthetic, not source-reviewed.
- Module ordering and density are not yet validated with all optional modules present.
- Page-level accessibility is not reviewed for combined module navigation.
- Tokens, spacing, typography, color, radius, and visual density remain pending.
- BottomNav may re-enter by accident if SummaryDashboard is treated as a full app screen rather than a transferable content pattern.

## Runtime Composition Plan

Next cycle should add optional runtime composition only.

Recommended stories:

- `Patterns/SummaryDashboard/SemanticComposition/WithTrendCard`
- `Patterns/SummaryDashboard/SemanticComposition/WithAwardBadge`
- `Patterns/SummaryDashboard/SemanticComposition/WithTrendAndAward`
- `Patterns/SummaryDashboard/SemanticComposition/CoreOnly`

Recommended data fixtures:

- SummaryDashboard core only
- SummaryDashboard with optional TrendCard
- SummaryDashboard with optional AwardBadge
- SummaryDashboard with optional Workouts, TrendCard, and AwardBadge

Rules for the next runtime cycle:

- Use synthetic runtime validation data only.
- Do not implement BottomNav.
- Do not implement full Trends or Awards pages.
- Do not promote SummaryDashboard.
- Keep TrendCard and AwardBadge optional.
- Preserve component semantics: MetricCard is current metric context, WorkoutItem is completed record, TrendCard is interpretation over time, AwardBadge is reward evidence.

## Promotion Impact

Do not promote.

This review only moves TrendCard and AwardBadge from component-level covered to ready for optional SummaryDashboard runtime composition. It does not make source evidence reviewed and does not promote SummaryDashboard, any component, any token, or the concept loop.

## Next Cycle Recommendation

Proceed to SummaryDashboard optional semantic runtime composition.

The next cycle should test TrendCard and AwardBadge inside SummaryDashboard as optional semantic modules while keeping `ProgressRing` and `MetricCard` as required core and keeping BottomNav deferred.

Style System / Token evidence should remain after semantic composition because token extraction should attach to stable module roles rather than a still-moving pattern shape.
