# SummaryDashboard Optional Modules Review

## Review Scope

This ninth-cycle review validates whether `WorkoutItem` can be safely composed into the reverse-surface `SummaryDashboard` pattern as an optional Workouts module.

In scope:

- SummaryDashboard optional Workouts module rendering
- `WorkoutItem` composition as completed behavior records
- Synthetic runtime validation data
- Optional module states for present, omitted, and missing workout data

Out of scope:

- TrendCard
- AwardBadge
- Bottom Nav
- Full Workouts section
- Workout history page
- Token extraction
- Pixel-perfect source matching
- Promotion

## Problem

The captured SummaryDashboard evidence includes Workouts, Trends, Awards, and Bottom Nav, but previous runtime surfaces intentionally implemented only the smallest shell. After `WorkoutItem` received component-level runtime validation, the next question is whether SummaryDashboard can support Workouts as an optional module without turning into a full Fitness page or weakening the MetricCard / WorkoutItem boundary.

## Runtime Stories Reviewed

- `Patterns/SummaryDashboard/OptionalModules/WithWorkoutItems`
- `Patterns/SummaryDashboard/OptionalModules/WithoutWorkoutItems`
- `Patterns/SummaryDashboard/OptionalModules/MissingWorkoutData`

## Composition Tested

- Activity progress remains `ProgressRing`.
- Activity metrics remain `MetricCard`.
- Workouts module uses `WorkoutItem`.
- SummaryDashboard runs when `workouts` is omitted.
- SummaryDashboard renders an unavailable state when `workouts.items` is empty.
- TrendCard, AwardBadge, and Bottom Nav remain unresolved and unimplemented.

## Required vs Optional Module Decision

Workouts module is optional but supported.

Current decision:

- Activity progress is required for the current reverse surface.
- Activity metrics are required for the current reverse surface.
- Workouts are optional and can be absent without breaking SummaryDashboard.
- Empty Workouts data should render a missing / unavailable state instead of blank space.
- Trends, Awards, and Bottom Nav remain unresolved and should not be inferred as required from this cycle.

## WorkoutItem Integration Result

`WorkoutItem` composes safely as an optional module.

The integration keeps `WorkoutItem` as a completed behavior record. It does not use `MetricCard` to represent workout rows. Duration and date remain record metadata inside WorkoutItem.

## What Worked

- Optional Workouts data can be omitted without breaking the dashboard.
- Missing workout data can be shown explicitly as unavailable.
- Populated Workouts data can render multiple `WorkoutItem` records.
- The component boundary remains intact: MetricCard is still compact metric display, WorkoutItem is still completed behavior record.
- The pattern can validate optional-module behavior without implementing TrendCard, AwardBadge, or Bottom Nav.

## What Broke

- The optional module still uses synthetic data only.
- The full source Workouts section is not implemented.
- The source does not confirm all optional / required module rules.
- SummaryDashboard still lacks runtime coverage for TrendCard, AwardBadge, Bottom Nav, and page-level navigation.

## Still Open

- Are Workouts required in any canonical SummaryDashboard state, or always optional?
- Should the empty Workouts state expose an action, explanation, or recovery path?
- Should SummaryDashboard eventually validate Trends and Awards as optional modules too?
- Does SummaryDashboard need a module ordering policy before promotion?
- Which module rules are source-specific versus transferable?

## Promotion Impact

- SummaryDashboard remains `not-promoted`.
- WorkoutItem remains `not-promoted`.
- The SummaryDashboard runtime status can advance to `runtime-tested-optional-module`.
- `sourceStatus` remains `captured`; this review does not make evidence `reviewed`.

## Next Cycle Recommendation

Next cycle should review SummaryDashboard pattern composition boundaries before adding more modules.

Recommended next step:

- Decide whether Trends and Awards should each receive their own contract / runtime plan before being tested as optional modules.

Do not promote SummaryDashboard until required versus optional module rules, accessibility behavior, and unresolved source states are reviewed.
