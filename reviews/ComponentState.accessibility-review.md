# Component State Accessibility Review

## Scope

This fifth-cycle review covers accessibility drafts for two reverse-surface component candidates:

- `ProgressRing`
- `MetricCard`

It reviews synthetic runtime states only. It does not promote components, inspect additional Figma nodes, extract token values, or implement new page modules.

## ProgressRing Accessibility Draft

Current draft expectations:

- The visual ring remains decorative and is hidden from assistive technology with `aria-hidden`.
- The outer `figure` carries a concise accessible label for value, goal, unit, and availability.
- Empty, unavailable, and overachieved states need explicit labels because raw numeric display alone is not enough.
- Overachieved state may show a percentage above 100 while the visual ring remains capped for readability.
- Unavailable state should not imply zero progress; the label and caption must describe unavailable data.

States drafted in Storybook:

- `Components/ProgressRing/Default`
- `Components/ProgressRing/LowProgress`
- `Components/ProgressRing/Completed`
- `Components/ProgressRing/Empty`
- `Components/ProgressRing/Overachieved`
- `Components/ProgressRing/Unavailable`

## MetricCard Accessibility Draft

Current draft expectations:

- Non-interactive metrics remain `article` elements with visible title, value, unit, and caption.
- Loading state uses `aria-busy` on the card surface.
- Error state is visually distinct, but still needs a final error announcement policy before promotion.
- Interactive target state uses a native `button` so keyboard focus and activation are available by default.
- Interactive targets need an explicit action label when the visible title is not enough.

States drafted in Storybook:

- `Components/MetricCard/Default`
- `Components/MetricCard/LongChineseText`
- `Components/MetricCard/ExtremeValue`
- `Components/MetricCard/Loading`
- `Components/MetricCard/Empty`
- `Components/MetricCard/Error`
- `Components/MetricCard/GoalCompleted`
- `Components/MetricCard/Overachieved`
- `Components/MetricCard/InteractiveTarget`

## Current Implementation

- State fixtures are synthetic runtime validation data in `SummaryDashboard.data.ts`.
- `ProgressRing` now supports `empty`, `overachieved`, and `unavailable` runtime states.
- `MetricCard` now supports `loading`, `empty`, `error`, `goal-completed`, `overachieved`, and an interactive target runtime state.
- Interactive `MetricCard` renders as a native `button`; non-interactive cards remain `article`.
- The implementation remains inside `src/reverse-components/summary-dashboard/`.

## Remaining Gaps

- No automated accessibility test suite has been added.
- Error announcement behavior is drafted but not validated with assistive technology.
- Loading skeleton behavior is not specified; the current state uses text-only synthetic data.
- ProgressRing color and geometry are still local runtime styling, not source-reviewed tokens.
- MetricCard focus and target behavior need product-level rules before promotion.
- `MetricCard` versus `WorkoutItem` remains unresolved.

## Decision

Do not promote.

The fifth cycle improves state coverage and creates an accessibility draft, but the candidates remain reverse-surface assets. `ProgressRing` and `MetricCard` are not reviewed, not tokenized, and not ready for stable design-system promotion.
