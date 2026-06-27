# Concept Loop Composition Review

## Review Scope

This fifteenth-cycle review checks whether the current reverse-surface component candidates form the semantic loop:

```text
Goal -> Behavior -> Record -> Trend -> Reward
```

Reviewed candidates:

- `ProgressRing`
- `MetricCard`
- `WorkoutItem`
- `TrendCard`
- `AwardBadge`

Out of scope:

- Implementing new components
- Adding Storybook stories
- Composing TrendCard or AwardBadge into SummaryDashboard
- Implementing FullDashboard, Awards section, Trends section, or BottomNav
- Token extraction
- Migration experiments
- Promotion

## Current Runtime Coverage

- `ProgressRing`: runtime-tested states for goal-relative progress.
- `MetricCard`: runtime-tested states for current metric context and data pressure.
- `WorkoutItem`: minimum runtime validation for completed behavior records.
- `TrendCard`: minimum runtime validation for direction and interpretation over time.
- `AwardBadge`: minimum runtime validation for reward evidence and achievement markers.

Coverage is component-level only. It is not SummaryDashboard semantic composition and not a reviewed visual system.

## Concept Loop Mapping

| Concept | Component owner | Supporting components | Status |
| --- | --- | --- | --- |
| Goal / Progress | `ProgressRing` | `MetricCard` | Component-level covered |
| Behavior | `WorkoutItem` | `MetricCard` | Component-level covered |
| Record | `WorkoutItem` | `MetricCard` | Component-level covered |
| Trend / Insight | `TrendCard` | `WorkoutItem`, `MetricCard` | Component-level covered |
| Reward / Achievement | `AwardBadge` | `WorkoutItem`, `TrendCard` | Component-level covered |

`MetricCard` is not a primary loop stop. It provides metric context that supports Goal, Behavior, Record, and Trend without swallowing their ownership.

## Component Responsibility Check

`ProgressRing` owns goal-relative progress. It should not become a generic chart.

`MetricCard` owns current metric display. It should not represent completed records, trend interpretation, or reward evidence.

`WorkoutItem` owns completed behavior records. It may contain metric values, but the row remains a record.

`TrendCard` owns direction and interpretation over time. It may include supporting values, but those values are subordinate to interpretation.

`AwardBadge` owns reward evidence and achievement markers. It should not become decoration-only visual chrome.

## Boundary Stability Check

The current boundaries are stable enough for the next review layer:

- `MetricCard` vs `WorkoutItem`: stable after completed-record runtime validation.
- `MetricCard` vs `TrendCard`: stable after TrendCard runtime validation.
- `AwardBadge` vs `TrendCard`: stable at component level; reward evidence is separate from trend interpretation.
- `AwardBadge` vs `MetricCard`: stable at component level; reward status is separate from current value display.
- `AwardBadge` vs `WorkoutItem`: stable at component level; achievement evidence is separate from one completed behavior record.

The remaining instability is not component ownership. It is SummaryDashboard composition: TrendCard and AwardBadge are not yet composed into the pattern, and required-versus-optional module rules remain unresolved.

## Transferability Check

The loop appears transferable beyond the captured Fitness-style source:

- Habit product: habit goal, completion record, consistency trend, milestone badge.
- Focus product: focus target, focus session, attention trend, streak or milestone reward.
- Learning product: study goal, study session record, ability trend, achievement badge.
- Training product: training goal, workout record, performance trend, award or milestone.
- Personal analytics product: target, logged behavior, historical interpretation, recognition marker.

Transferability remains semantic only. Visual transfer, token rules, density rules, and accessibility behavior still require review.

## What Worked

- The five core concepts now each have a component owner with minimum runtime validation.
- MetricCard remains supporting context instead of swallowing records, trends, or rewards.
- TrendCard and AwardBadge clarify the end of the loop without needing SummaryDashboard composition yet.
- The loop can be described without Apple-specific brand assets.

## What Broke

- Runtime validation is still synthetic and component-local.
- SummaryDashboard does not yet compose TrendCard or AwardBadge.
- Source evidence is captured, but not reviewed.
- Tokens remain semantic placeholders.
- Accessibility is drafted, not verified with automated checks or assistive technology.

## Remaining System Blockers

- No source-reviewed visual token values.
- No stable spacing, typography, color, radius, or density decisions.
- TrendCard and AwardBadge are not composed into SummaryDashboard.
- Required versus optional module rules are unresolved for Trend, Reward, and app shell.
- Full Workouts section and source-reviewed record behavior are not validated.
- Page-level accessibility and keyboard navigation behavior are incomplete.
- BottomNav remains deferred as source app shell.
- No migration or transfer scenario has validated the whole loop outside the source domain.

## Promotion Impact

Do not promote.

The concept loop has component-level semantic coverage, but no component, pattern, token, or system model should move to stable design-system status. `captured` evidence remains `captured`; this review does not make source evidence `reviewed`.

## Next Cycle Decision

Recommended next stage: SummaryDashboard semantic composition review before Style System / Token evidence cycle.

Reason:

- The loop now has component-level coverage.
- The biggest unresolved system question is whether TrendCard and AwardBadge can compose into SummaryDashboard without turning it into a full source clone.
- Token extraction should wait until the semantic composition boundary is clearer, so token names attach to stable roles rather than temporary component styling.

Keep Style System / Token evidence cycle next in the queue after SummaryDashboard semantic composition boundaries are reviewed.
