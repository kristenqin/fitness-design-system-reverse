# SummaryDashboard Semantic Composition Runtime Review

## Runtime Scope

This seventeenth-cycle review validates optional semantic runtime composition for `SummaryDashboard`.

In scope:

- Required core: `ProgressRing` and `MetricCard`
- Optional semantic modules: `WorkoutItem`, `TrendCard`, and `AwardBadge`
- Synthetic runtime validation data
- Storybook pattern stories for optional semantic composition
- Missing trend and missing award module states

Out of scope:

- BottomNav
- FullDashboard
- Full Trends section
- Full Awards section
- TrendOverview
- AchievementCollection
- Real routes
- Real award or medal assets
- Token extraction
- Promotion

## Stories Created

- `Patterns/SummaryDashboard/SemanticComposition/CoreOnly`
- `Patterns/SummaryDashboard/SemanticComposition/WithTrendCard`
- `Patterns/SummaryDashboard/SemanticComposition/WithAwardBadge`
- `Patterns/SummaryDashboard/SemanticComposition/WithTrendAndAward`
- `Patterns/SummaryDashboard/SemanticComposition/FullSemanticLoop`
- `Patterns/SummaryDashboard/SemanticComposition/MissingTrendData`
- `Patterns/SummaryDashboard/SemanticComposition/MissingAwardData`

## Composition Tested

The runtime surface now tests SummaryDashboard with:

- no optional semantic modules,
- optional TrendCard only,
- optional AwardBadge only,
- optional TrendCard and AwardBadge together,
- optional WorkoutItem, TrendCard, and AwardBadge together,
- present but missing trend data,
- present but empty award data.

## Required Core Validation

`ProgressRing` and `MetricCard` remain the required core.

They still represent the current daily state: goal-relative progress and compact metric context. This cycle does not change their component boundaries and does not make them stable design-system assets.

## Optional Module Validation

### Workouts / WorkoutItem

Workouts remain optional-supported.

`WorkoutItem` continues to represent completed behavior records. It is present in `FullSemanticLoop`, but it is not required for `CoreOnly`, `WithTrendCard`, `WithAwardBadge`, or `WithTrendAndAward`.

### Trends / TrendCard

TrendCard is now composed into SummaryDashboard as an optional semantic module.

It remains the owner of direction and interpretation over time. Missing trend data renders an explicit unavailable state instead of pretending a trend exists.

### Awards / AwardBadge

AwardBadge is now composed into SummaryDashboard as an optional semantic module.

It remains the owner of reward evidence and achievement markers. Empty award data renders an explicit unavailable state instead of decoration-only placeholder badges.

## Full Semantic Loop Check

`FullSemanticLoop` validates the semantic chain:

```text
Goal -> Behavior -> Record -> Trend -> Reward
```

Mapping:

- Goal / Progress: `ProgressRing`
- Metric context: `MetricCard`
- Behavior / Record: `WorkoutItem`
- Trend / Insight: `TrendCard`
- Reward / Achievement: `AwardBadge`

This is still a summary pattern. It does not add BottomNav, source navigation, full Trends page behavior, full Awards collection behavior, or source-specific visual assets.

## What Worked

- SummaryDashboard can run with TrendCard omitted.
- SummaryDashboard can run with AwardBadge omitted.
- TrendCard and AwardBadge can be composed together without replacing MetricCard or WorkoutItem semantics.
- Missing trend and missing award data can be represented explicitly.
- The full semantic loop can be represented without building a source clone.

## What Broke

- Combined module density is only minimally tested.
- The runtime data is synthetic and not source-reviewed.
- Exact source layout, copy, token values, spacing, and module ordering remain unconfirmed.
- Page-level accessibility behavior is still drafted, not reviewed with assistive technology or automated checks.

## Accessibility Draft

- Optional module sections expose explicit labels.
- Missing trend and award states use `role="status"`.
- Trend direction and reward status remain visible as text inside the child components.
- BottomNav and route behavior remain absent, so page-level navigation accessibility is not validated.

This is not a completed accessibility review.

## Composition Risks

- `FullSemanticLoop` could be mistaken for FullDashboard if future work adds BottomNav or full source sections too early.
- Optional semantic modules could be promoted by inertia even though source evidence remains captured, not reviewed.
- AwardBadge could regress into decoration if visible status and explanation are removed.
- TrendCard could regress into MetricCard if interpretation copy becomes subordinate to a current value.

## Still Open

- Source-reviewed module ordering and density.
- Source-backed token values and style rules.
- Page-level accessibility and keyboard navigation behavior.
- Whether TrendCard and AwardBadge should remain optional in all product states.
- Full Workouts, Trends, and Awards surfaces outside SummaryDashboard.
- Transferability validation outside the source domain.

## Promotion Decision

Do not promote.

SummaryDashboard now has optional semantic runtime composition for TrendCard and AwardBadge, but it remains a reverse-surface pattern. No component, pattern, token, or system model is promoted by this cycle.
