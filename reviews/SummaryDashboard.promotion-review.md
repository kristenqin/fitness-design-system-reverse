# SummaryDashboard Promotion Review

## Review Scope

This review covers the fourth Promotion Review / System Extraction cycle for the captured SummaryDashboard reverse surface.

Reviewed candidates:

- `SummaryDashboard` pattern
- `ProgressRing` component candidate
- `MetricCard` component candidate

Out of scope:

- New UI implementation
- New Storybook stories
- Additional Figma reads
- Token value extraction
- Promotion into `src/components` or `src/patterns`
- Workout Detail, Trends Page, Awards Page, or full product reconstruction

## Evidence Reviewed

- Source map entry `figma-node-143-23952`
- Screenshot evidence `screenshot-summary-dashboard-143-23952`
- Figma node map entries for `143:23952`, `143:25101`, `143:25110`, `143:25131`, `143:25166`, and `143:25188`
- Component map entries for `progress-ring`, `metric-card`, `workout-item`, `trend-card`, and `award-badge`
- `registry/pages.json` entry `summary-dashboard`
- `registry/patterns.json` entry `summary-dashboard`
- `registry/components.json` entries `progress-ring` and `metric-card`
- `src/reverse-components/summary-dashboard/SummaryDashboard.contract.md`
- `src/reverse-components/summary-dashboard/SummaryDashboard.runtime-review.md`
- Local reverse runtime files under `src/reverse-components/summary-dashboard/`

Evidence status remains `captured`. This review does not change any source evidence to `reviewed`.

## Runtime Stories Reviewed

- `Components/ProgressRing/Default`
- `Components/ProgressRing/LowProgress`
- `Components/ProgressRing/Completed`
- `Components/MetricCard/Default`
- `Components/MetricCard/LongChineseText`
- `Components/MetricCard/ExtremeValue`
- `Patterns/SummaryDashboard/Default`
- `Patterns/SummaryDashboard/LowProgress`
- `Scenarios/LowProgress/SummaryDashboard`
- `Experiments/WebAdaptation/SummaryDashboard`
- `Style System/Typography/MetricRoles`

These stories support minimum runtime validation only. They do not constitute promotion evidence by themselves.

## Candidate Assessment

### SummaryDashboard Pattern

Status: keep as reverse-surface candidate; do not promote.

Supported by:

- Captured Figma evidence for `Screen 5` inside node `143:23952`
- A contract describing observed sections, hierarchy, component candidates, and open questions
- Runtime stories for default and low-progress pattern shells
- A WebAdaptation experiment that tests transfer pressure without making it stable

Not yet supported by:

- Runtime implementation of all observed source sections
- Reviewed page-level accessibility behavior
- Additional source states for no data, completed, overachieved, permission denied, and unavailable data
- Stable style-system or token decisions
- Confirmation that observed Workouts, Trends, and Awards sections are required pattern anatomy rather than optional modules

### ProgressRing

Status: keep as component candidate; do not promote.

Supported by:

- Captured source mapping to node `143:25127`
- Runtime stories for default, low-progress, and completed states
- A clear semantic purpose: goal-relative progress feedback
- A local runtime contract that accepts value, goal, unit, status, label, and caption

Not yet supported by:

- Source-verified ring geometry, stroke behavior, color variables, or over-goal behavior
- Empty and overachieved runtime states
- Reviewed accessibility requirements beyond a basic `aria-label`
- Evidence that the candidate transfers outside the captured Activity context without source-specific assumptions

### MetricCard

Status: keep as component candidate; do not promote.

Supported by:

- Captured source mapping to activity stats and repeated workout content
- Runtime stories for default, long Chinese text, and extreme values
- A clear semantic purpose: compact metric display with value, unit, and caption
- Useful data-pressure validation for localization and overflow

Not yet supported by:

- Runtime stories for loading, empty, error, goal-completed, and overachieved states
- A resolved boundary between `MetricCard` and `WorkoutItem`
- Source-verified typography, spacing, and color values
- Reviewed interaction and accessibility rules for clickable or navigational metric surfaces

## Promotion Blockers

- Source evidence is captured but not reviewed.
- Runtime validation is minimum and local to `src/reverse-components/summary-dashboard/`.
- The SummaryDashboard runtime omits observed Workouts, Trends, Awards, and Bottom Nav sections.
- `WorkoutItem`, `TrendCard`, and `AwardBadge` remain captured candidates without runtime validation in this cycle.
- Semantic token names are pending and raw values are not extracted.
- Accessibility expectations are not yet documented enough for promotion.
- Component boundaries are still unresolved, especially `MetricCard` versus `WorkoutItem`.
- WebAdaptation remains an experiment and must not become a stable responsive rule yet.

## Required Next Evidence

- Confirm whether `Screen 5` is the canonical SummaryDashboard source for first-cycle extraction.
- Capture or review source states for no data, completed, overachieved, permission denied, and unavailable data.
- Confirm whether Workouts, Trends, and Awards are required or optional modules in the SummaryDashboard pattern.
- Read variable or style definitions only when the workflow is ready to validate token candidates.
- Clarify source semantics for workout rows before extracting `WorkoutItem` or expanding `MetricCard`.

## Required Next Runtime Tests

- `ProgressRing` empty and overachieved states.
- `MetricCard` loading, empty, error, goal-completed, and overachieved states.
- SummaryDashboard pattern with and without optional Workouts, Trends, and Awards modules.
- Accessibility pass for labels, status messaging, and navigation semantics.
- Additional scenario stories for NoData, GoalCompleted, Overachieved, and PermissionDenied when supporting evidence exists.
- Continued WebAdaptation experiments without promoting layout rules prematurely.

## Decision

Do not promote yet.

`SummaryDashboard`, `ProgressRing`, and `MetricCard` remain useful reverse-surface candidates. They have captured source evidence and minimum Storybook runtime validation, but they do not yet meet the project promotion criteria for stable design-system assets.
