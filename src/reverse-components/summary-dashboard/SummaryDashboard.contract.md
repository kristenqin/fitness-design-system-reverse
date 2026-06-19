# SummaryDashboard Contract

This contract records the second Evidence Mapping Cycle for the provided Summary Dashboard Figma node. It documents source evidence and registry-level observations only. It does not promote a finished design-system component or implement UI.

## Source Evidence

- Figma file key: `8vMf36ZtDA5gimN3xt468r`
- Provided node id: `143:23952`
- Provided node name: `Summary Tab Screens`
- Provided node dimensions: `1880 x 1600`
- Figma URL: `https://www.figma.com/design/8vMf36ZtDA5gimN3xt468r/AppleFitness?node-id=143-23952&m=dev`
- Source map id: `figma-node-143-23952`
- Screenshot evidence id: `screenshot-summary-dashboard-143-23952`
- Screenshot path: `assets/source-evidence/summary-dashboard-143-23952.png`
- Screenshot dimensions: `1960 x 1680`
- Figma reads used: `get_design_context`, `get_metadata`, `get_screenshot`

## Observed Facts

- `143:23952` is a frame named `Summary Tab Screens`.
- The frame has direct children `143:23953` named `Header` and `143:25100` named `Summary Tab Screens`.
- The captured screenshot shows four mobile screens inside the provided node.
- `143:25101` named `Screen 5` is the Summary Dashboard surface used for this contract.
- `Screen 5` dimensions are `390 x 1296`.
- `Screen 5` contains a date label `SUNDAY, APR 9` and a page title `Summary`.
- `Screen 5` contains visible sections named `Activity`, `Workout`, `Trends`, `Awards`, and `Bottom Nav`.
- The `Activity` section contains labels and values for `Move`, `24/300 CAL`, `Steps`, `991`, `Distance`, and `0.69 KM`.
- The `Activity` section contains a circular progress visual named `Circle`.
- The `Workout` section contains a heading `Workouts`, a `Show More` text action, and two repeated `Card` frames.
- Each visible workout card contains the text `Traditional Strength Training`, a duration value `0:02`, and date text `8/9/22`.
- The `Trends` section contains a `Trends Box`, explanatory text, and a `Get Started` text action.
- The `Awards` section contains a heading `Awards`, a `Show More` text action, and three award item frames.
- The bottom navigation contains labels `Summary`, `Fitness+`, and `Sharing`.

## Layout Anatomy

1. Top header area: date, page title, and avatar/control area.
2. Activity summary card: section heading, compact metric stack, and circular progress visual.
3. Workout records section: heading, secondary action, and repeated workout rows.
4. Trends explanation section: heading, illustration area, explanatory text, and action text.
5. Awards preview section: heading, secondary action, and horizontal award items.
6. Bottom navigation: three tab destinations with Summary selected in the source screenshot.

## Information Hierarchy

1. Current summary context: date and `Summary` page title.
2. Goal-relative progress: Activity card with Move, Steps, Distance, and circular progress visual.
3. Recent behavior records: Workouts rows with activity title, duration, and date.
4. Trend education or activation: Trends explanatory card and `Get Started` action.
5. Reward preview: Awards row with visible award items and progress text.
6. Global navigation: Summary, Fitness+, Sharing.

## Component Candidates

- `ProgressRing`: observed in `143:25127` named `Circle` inside the Activity section.
- `MetricCard`: observed in `143:25113` named `Stats` and in repeated workout row content.
- `WorkoutItem`: observed in `143:25136` and `143:25151`, both named `Card`, inside the Workouts section.
- `TrendCard`: observed in `143:25168` named `Trends Box`.
- `AwardBadge`: observed in award item frames `143:25193`, `143:25201`, and `143:25209`.

These are captured component candidates, not promoted components.

## Token Candidates

The Figma reads for this cycle did not request or confirm variable definitions, and this contract does not extract raw token values.

Semantic token candidates to investigate later:

- `color.progress.move`
- `color.progress.low`
- `color.action.primary`
- `color.surface.card`
- `color.text.primary`
- `color.text.secondary`
- `type.page.title`
- `type.section.title`
- `type.metric.value`
- `type.metric.unit`
- `space.card.padding`
- `radius.card`

## Inferred Candidates

- The Summary Dashboard pattern appears to combine progress, recent records, trend explanation, and reward preview in one vertical mobile surface.
- The `Show More` labels imply section-level drill-down actions for Workouts and Awards.
- The Trends card appears to be an onboarding or empty-state explanation for trend behavior, but this needs confirmation from additional states.
- The Awards row appears to preview reward status rather than represent the full rewards page.
- The circular Activity visual is likely a goal-relative progress encoding, but exact completion logic is not confirmed by metadata alone.

## Open Questions

- Which of the four screens inside `143:23952` are canonical for first-cycle Summary Dashboard mapping?
- Are Workouts, Trends, and Awards sections required parts of SummaryDashboard, or optional modules based on available user data?
- Does `143:25127` map to one reusable ProgressRing candidate or a specific Activity-only visual?
- Are the repeated workout rows source evidence for `WorkoutItem`, `MetricCard`, or both?
- Which style values are backed by Figma variables rather than local layer styles?
- What states exist for no data, low progress, completed progress, unavailable data, and long localized text?
- Which visual details are source-specific and should not be promoted into stable rules?

## Do Not Promote Yet

- Do not promote `SummaryDashboard` to a stable pattern until Storybook runtime validation exists.
- Do not promote component candidates until their anatomy, states, and accessibility constraints are verified.
- Do not promote token candidates until variable definitions or reviewed style evidence support them.
- Do not treat `captured` as `reviewed`.
- Do not implement React UI from this contract.
- Do not create Storybook stories from this contract in the current cycle.
