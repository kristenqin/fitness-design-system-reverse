# MetricCard / WorkoutItem Boundary Review

## Review Scope

This sixth-cycle review resolves the candidate boundary between `MetricCard` and `WorkoutItem` using existing SummaryDashboard evidence only.

In scope:

- Captured SummaryDashboard source evidence
- `figma/component-map.json`
- `SummaryDashboard.contract.md`
- Existing component anatomy and promotion blockers
- Boundary decisions for `MetricCard` and `WorkoutItem`

Out of scope:

- Implementing `WorkoutItem`
- Adding WorkoutItem stories
- Refactoring `MetricCard`
- Implementing the full Workouts section
- Reading more Figma nodes
- Extracting tokens
- Promoting any candidate

## Problem

Previous rounds treated `MetricCard` as a broad compact data display candidate and noted that it appears in both Activity stats and workout row content. That made the boundary unclear:

- Activity `Stats` are compact metric displays.
- Workout rows contain metric values such as duration and date, but the row itself represents a completed behavior record.

If `MetricCard` absorbs workout rows, it becomes too broad and loses its semantic clarity. If `WorkoutItem` owns every metric value inside a row, it risks hiding reusable metric substructure. The boundary needs to preserve both meanings.

## Source Evidence

Observed evidence from the captured SummaryDashboard source:

- `143:25113` named `Stats` appears in the Activity section and is mapped to `metric-card`.
- `143:25136` named `Card` appears in the Workouts section and is mapped to `workout-item`.
- `143:25151` is also described in the contract as a repeated workout row inside the Workouts section.
- The contract records that each visible workout card contains `Traditional Strength Training`, duration `0:02`, and date `8/9/22`.
- The contract explicitly leaves open whether repeated workout rows are evidence for `WorkoutItem`, `MetricCard`, or both.

No additional Figma nodes were read for this review.

## Boundary Principle

- `MetricCard` is responsible for compact metric display.
- `WorkoutItem` is responsible for completed behavior records.
- A workout row can contain metric values, but the row itself should not be swallowed by `MetricCard`.
- `MetricCard` can appear as an internal substructure inside `WorkoutItem`, but it cannot replace `WorkoutItem`.
- Ownership should follow primary meaning, not the presence of numeric text alone.

## Candidate Comparison

`MetricCard`:

- Primary meaning: current or contextual metric display.
- Core object: `metric`.
- Expected slots: title, value, unit, caption, status, optional action.
- Good fit: Activity `Stats`, compact dashboard metrics, goal-adjacent numeric summaries.
- Poor fit: a completed workout row whose main meaning is a record.

`WorkoutItem`:

- Primary meaning: completed behavior record.
- Core object: `record` or `workout`.
- Expected slots: workout title, modality/type, duration, date, route or context, optional detail target.
- Good fit: Workouts section repeated rows.
- Poor fit: standalone metric tiles that do not represent a completed behavior event.

## Source Node Decisions

- `143:25113` / `Stats`: owned by `MetricCard`.
- `143:25136` / `Card`: owned by `WorkoutItem`.
- `143:25151` / repeated workout `Card`: owned by `WorkoutItem`.
- `143:25168` / `Trends Box`: remains `TrendCard`; not part of this boundary.
- `143:25193` / award item frame: remains `AwardBadge`; not part of this boundary.

## Final Boundary Decision

`MetricCard` should represent compact metric display only. It can show values such as steps, distance, goal progress, or other metric facts when the metric itself is the component's main object.

`WorkoutItem` should represent a completed behavior record. The row may include metric values such as duration, distance, date, or energy, but those values are attributes of the record. They do not make the whole row a `MetricCard`.

Therefore:

- Activity `Stats` stay under `MetricCard`.
- Workouts section rows move conceptually under `WorkoutItem`.
- `MetricCard` may later become an internal substructure of `WorkoutItem`, but only after `WorkoutItem` is separately specified and runtime-tested.

## Remaining Open Questions

- What exact slots does `WorkoutItem` need beyond title, duration, and date?
- Is `WorkoutItem` always navigational, or can it be static in some contexts?
- Should `WorkoutItem` expose metric subslots as plain text, `MetricCard` subparts, or a lighter metric-row primitive?
- Are there additional workout row states such as missing route, incomplete data, syncing, or deleted record?
- Does the SummaryDashboard pattern require WorkoutItem runtime coverage before any pattern promotion review?

## Promotion Impact

- `MetricCard` remains `not-promoted`.
- `WorkoutItem` should be added as a candidate with `runtimeStatus: not-tested` and `promotionStatus: not-promoted`.
- The `MetricCard` blocker about unclear boundary is reduced but not fully closed, because `WorkoutItem` still lacks its own contract and runtime states.
- No candidate should move to stable `src/components`.
- No `sourceStatus` should change from `captured` to `reviewed`.
