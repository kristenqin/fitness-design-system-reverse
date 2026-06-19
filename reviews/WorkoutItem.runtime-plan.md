# WorkoutItem Runtime Plan

## Purpose

Define the next runtime validation step for `WorkoutItem` without implementing it in this cycle.

The goal is to validate `WorkoutItem` as a completed behavior record, not as a compact metric display and not as a full Workouts section.

## Runtime Scope

Next cycle should cover only:

- `WorkoutItem` as a local reverse component candidate
- Synthetic runtime data
- Component-level Storybook stories
- Accessibility and data-pressure checks

Out of scope for the next cycle:

- Full SummaryDashboard integration
- Full Workouts section
- TrendCard
- AwardBadge
- Token extraction
- Promotion

## Stories to Create Next Cycle

Recommended Storybook stories:

- `Components/WorkoutItem/Default`
- `Components/WorkoutItem/LongTitle`
- `Components/WorkoutItem/MissingDuration`
- `Components/WorkoutItem/MissingDate`
- `Components/WorkoutItem/InteractiveTarget`

Optional later stories after the first runtime pass:

- `Components/WorkoutItem/WithMetrics`
- `Components/WorkoutItem/Syncing`
- `Components/WorkoutItem/Error`
- `Components/WorkoutItem/WithRoute`

## Synthetic Data Required

Synthetic data must be clearly labeled as runtime validation data and must not be presented as Apple Fitness or Figma source data.

Minimum data fixtures:

- `defaultWorkoutItemData`: title, duration, date
- `longTitleWorkoutItemData`: long localized or descriptive title
- `missingDurationWorkoutItemData`: title and date, no duration
- `missingDateWorkoutItemData`: title and duration, no date
- `interactiveWorkoutItemData`: title, duration, date, action label or detail target

Observed values may be referenced as evidence examples, but runtime data should remain synthetic.

## Accessibility Checks

Validate:

- Non-interactive record renders as a semantic record surface.
- Interactive target uses native button or link behavior.
- Keyboard focus is visible for interactive state.
- Accessible name includes title plus distinguishing metadata.
- Missing duration or missing date is announced as unavailable.
- Metric values inside the row do not replace the completed-record accessible name.

Do not claim accessibility review is complete until automated checks or assistive technology review exist.

## Relationship with SummaryDashboard

`WorkoutItem` is observed inside SummaryDashboard, but the next cycle should validate it independently first.

Do not connect `WorkoutItem` into `SummaryDashboard` until:

- the component contract is stable enough for a local runtime pass,
- default and edge states are visible in Storybook,
- accessibility behavior is drafted from runtime evidence,
- and the SummaryDashboard optional-module rules are ready to be tested.

## Do Not Do

- Do not implement `WorkoutItem` in this cycle.
- Do not create `WorkoutItem.stories.tsx` in this cycle.
- Do not refactor `MetricCard`.
- Do not use `MetricCard` as a replacement for `WorkoutItem`.
- Do not build the full Workouts section.
- Do not extract tokens.
- Do not read additional Figma nodes.
- Do not promote `WorkoutItem`.

## Success Criteria

The next runtime cycle succeeds when:

- `WorkoutItem` has a local runtime surface under `src/reverse-components/summary-dashboard/`.
- The five recommended component stories build successfully.
- Synthetic fixtures are clearly marked as synthetic.
- The component preserves completed-record semantics even when metric values are present.
- Accessibility gaps are documented without claiming promotion.
- `promotionStatus` remains `not-promoted`.

## Next Cycle Recommendation

Run an eighth cycle focused only on `WorkoutItem` component runtime validation.

Do not connect it into `SummaryDashboard` yet. Keep the work at the component level until the record anatomy, missing-metadata states, and interactive target semantics are validated.
