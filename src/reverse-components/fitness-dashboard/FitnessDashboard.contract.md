# FitnessDashboard Contract

This contract describes the first reverse surface for a fitness-product dashboard. It is a review surface, not a final design-system component.

## Observed Pattern Targets

- Summary metrics with icon, label, value, and trend.
- Weekly activity visualization with compact day labels.
- Schedule list with time, class name, coach, and intensity.
- Goal-progress status visible near the page title.

## Token Candidates

- Radius: `8px` for panels, bars, metric icons, and list rows.
- Surface: off-white panels over a cool green-tinted page background.
- Accent set: energy green, strength amber, recovery blue, high-intensity red.
- Typography: compact operational dashboard scale with 13px metadata, 14px row titles, 18px panel headings, and 40px page title.

## Interaction States To Add

- Metric hover and selected states.
- Bar tooltip state.
- Class row focus and action menu state.
- Empty state for no upcoming classes.
- Loading state for late fitness-device sync.

## Accessibility Requirements

- The dashboard region needs a descriptive `aria-label`.
- Metric icons are decorative unless the source UI exposes them as semantic status indicators.
- Bar charts need accessible summaries before promotion.
- Intensity labels must not rely on color alone.

## Promotion Gaps

- No raw product evidence is committed yet.
- Mobile screenshots need to validate bar overflow and class-row wrapping.
- Token names are candidate names only until at least two fitness surfaces reuse them.
