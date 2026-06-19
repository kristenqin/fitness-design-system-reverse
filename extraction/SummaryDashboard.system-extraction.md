# SummaryDashboard System Extraction

## Extractable Concepts

- Goal-relative progress can be represented as a primary dashboard signal.
- Supporting metrics can provide context around the primary progress object.
- A compact dashboard can combine progress, recent records, trend explanation, and reward preview.
- Runtime validation should pressure-test long localized labels, extreme values, and low-progress states before promotion.
- Web adaptation should remain an experiment until source evidence and runtime behavior support durable responsive rules.

## Candidate System Assets

### ProgressRing Candidate

Candidate id: `progress-ring-candidate`

Possible system role:

- Semantic component for goal-relative progress.

Current extraction level:

- Evidence captured.
- Runtime-tested in default, low-progress, and completed states.
- Not promoted.

Potential contract:

- `label`
- `value`
- `goal`
- `unit`
- `status`
- `caption`

Do not extract yet:

- Exact ring geometry
- Raw colors
- Animation behavior
- Over-goal behavior
- Final accessibility contract

### MetricCard Candidate

Candidate id: `metric-card-candidate`

Possible system role:

- Semantic component for compact metric display.

Current extraction level:

- Evidence captured.
- Runtime-tested in default, long Chinese text, and extreme value states.
- Not promoted.

Potential contract:

- `title`
- `value`
- `unit`
- `caption`
- `status`

Do not extract yet:

- Final component boundary with `WorkoutItem`
- Raw typography values
- Raw spacing values
- Navigation or action behavior
- Loading, empty, and error behavior

### SummaryDashboard Pattern Candidate

Candidate id: `summary-dashboard-pattern`

Possible system role:

- Page pattern for combining progress, metrics, records, trend explanation, and reward preview into a daily overview.

Current extraction level:

- Evidence captured.
- Runtime-tested as a minimum shell with ProgressRing and MetricCard.
- Not promoted.

Potential composition:

- Header context
- Primary progress signal
- Supporting metric group
- Insight or trend summary
- Optional record, trend, reward, and navigation modules after more evidence

Do not extract yet:

- Full observed source layout
- Required versus optional module rules
- Stable responsive layout
- Tokenized visual language
- Complete section behavior

## Missing Evidence

- Reviewed source states beyond the captured SummaryDashboard screen.
- Source-backed token or variable definitions.
- Confirmed rules for Workouts, Trends, and Awards modules.
- Evidence for empty, completed, overachieved, permission denied, and unavailable-data states.
- Evidence that component candidates recur consistently outside this one SummaryDashboard source surface.

## Missing Runtime States

- `ProgressRing`: empty, overachieved, unavailable, accessible status announcement.
- `MetricCard`: loading, empty, error, goal-completed, overachieved, interactive target.
- `SummaryDashboard`: no data, goal completed, overachieved, permission denied, optional modules hidden, long history.
- `Style System`: semantic colors, spacing, density, radius policy, data colors, and chart rules.

## Transferability Notes

- ProgressRing appears transferable when a product has a measurable goal and current value.
- MetricCard appears transferable when a product needs compact current-state metrics with captions.
- SummaryDashboard appears transferable as a daily or session overview pattern, but only if the product has multiple related objects such as progress, record, trend, and reward.
- Apple-specific styling, native platform assumptions, and source-specific polish must stay out of promoted assets.
- Experiments can inform transferability but must not silently become stable system rules.

## Next Extraction Boundary

Next cycle should stay inside the SummaryDashboard boundary and focus on the smallest blocker set:

- Add missing runtime states for `ProgressRing` and `MetricCard`.
- Decide whether `WorkoutItem` must be separated from `MetricCard`.
- Validate SummaryDashboard optional-module behavior with synthetic runtime data.
- Keep source evidence status separate from promotion status.
- Keep all work inside reverse surfaces until promotion criteria are met.
