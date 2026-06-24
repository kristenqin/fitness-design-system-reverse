# WorkoutItem Runtime Review

## Runtime Scope

This pass validates the smallest component-level runtime surface for the captured `WorkoutItem` contract.

In scope:

- `WorkoutItem` local reverse component
- Synthetic runtime validation data
- Component-level Storybook stories
- Completed-record semantics
- Basic accessibility draft behavior

Out of scope:

- SummaryDashboard integration
- Full Workouts section
- Workout history page
- Route, map, heart rate, energy, or chart behavior
- MetricCard reuse inside WorkoutItem
- Token extraction
- Promotion

## Stories Created

- `Components/WorkoutItem/Default`
- `Components/WorkoutItem/LongTitle`
- `Components/WorkoutItem/MissingDuration`
- `Components/WorkoutItem/MissingDate`
- `Components/WorkoutItem/InteractiveTarget`
- `Components/WorkoutItem/Unavailable`

## What Worked

- The component can preserve completed-record semantics with only title, duration, and date.
- Missing duration and missing date can render as `Unavailable` instead of `0` or blank text.
- Non-interactive records can render as `article` surfaces.
- Interactive records can render as native `button` surfaces without changing the public component boundary.
- Long titles create useful layout pressure without adding extra source assumptions.

## What Broke

- The source evidence does not confirm whether every workout row is interactive.
- The runtime surface cannot validate source layout parity because no token values or full section anatomy were extracted.
- The unavailable state is synthetic and not source-confirmed.
- The component still lacks route, map, energy, heart rate, and chart behavior by design.

## Boundary Validation

The runtime surface keeps `WorkoutItem` as a completed behavior record.

It does not use `MetricCard` as an implementation substitute. Duration and date are rendered as record metadata, not standalone metric cards. This preserves the sixth-cycle boundary:

- `MetricCard` = compact metric display
- `WorkoutItem` = completed behavior record

## Accessibility Draft

- Non-interactive records use `article`.
- Interactive records use native `button`.
- Accessible names include title, duration, and date availability.
- Missing metadata is announced as unavailable.
- Focus behavior is available through native button semantics for `InteractiveTarget`.

This is still a draft. No automated accessibility test suite or assistive technology review has been completed.

## Still Open

- Whether workout rows are always interactive.
- Whether missing metadata should use different copy by product context.
- Whether future metric values should be plain text, a lightweight subpart, or an internal metric structure.
- Whether WorkoutItem must be integrated before SummaryDashboard pattern review can continue.
- Whether additional source states exist for syncing, route, error, or deleted records.

## Promotion Decision

Do not promote.

`WorkoutItem` now has minimum component runtime validation, but it is still a reverse-surface candidate. It is not reviewed, not tokenized, not integrated into SummaryDashboard, and not ready for stable design-system promotion.
