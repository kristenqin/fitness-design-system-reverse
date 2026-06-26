# TrendCard Runtime Review

## Runtime Scope

This twelfth-cycle review covers minimum component-level runtime validation for `TrendCard`.

In scope:

- Local reverse component under `src/reverse-components/summary-dashboard/`
- Synthetic runtime validation data
- Component-level Storybook stories
- Trend direction and interpretation states
- Accessibility draft from runtime behavior
- Boundary check against `MetricCard`

Out of scope:

- SummaryDashboard integration
- Full Trends section
- Charts, sparklines, or arrow-heavy UI
- AwardBadge
- BottomNav
- Token extraction
- Pixel-perfect source matching
- Promotion

## Stories Created

- `Components/TrendCard/Default`
- `Components/TrendCard/Improving`
- `Components/TrendCard/Declining`
- `Components/TrendCard/Neutral`
- `Components/TrendCard/InsufficientData`
- `Components/TrendCard/LongExplanation`

## What Worked

- Trend direction can be expressed with a visible text label and interpretation copy rather than chart UI.
- Supporting values can remain subordinate metadata instead of becoming the component's primary object.
- Insufficient-data state can be presented as low confidence rather than decline or error.
- Long Chinese explanation text can remain readable while keeping the trend title and direction visible.
- The component can run independently without SummaryDashboard composition.

## What Broke

- The current runtime surface is synthetic and not source-reviewed.
- The exact source Trends Box copy, action behavior, visual treatment, and data model remain unknown.
- No automated accessibility or assistive technology review has been performed.
- No loading, permission-denied, unavailable, or interactive target states are covered yet.

## Boundary Validation

`TrendCard` preserves trend semantics when the card's strongest visible elements are:

- trend subject,
- direction label,
- interpretation copy,
- time or data-confidence context.

It should not replace `MetricCard`. Current metric display still belongs to `MetricCard`; supporting values inside TrendCard are context for interpretation only.

## Accessibility Draft

- Non-interactive TrendCard renders as `article`.
- Direction is exposed as text, not color alone.
- The accessible label combines subject, metric context, time context, direction, and explanation.
- Insufficient data is explicitly labeled as insufficient data.
- Long explanation copy remains visible rather than hidden behind truncation.

This draft is not a completed accessibility review.

## Still Open

- Is the captured Trends Box an onboarding state, default state, or insufficient-data state?
- Should TrendCard support an interactive action, and should that action be a button or link?
- What source-backed trend directions exist beyond this synthetic state set?
- Does a future source review require chart or sparkline support?
- Should TrendCard be optional or required when SummaryDashboard composition is revisited?

## Promotion Decision

Do not promote.

`TrendCard` now has minimum component-level runtime validation, but it remains a reverse-surface candidate. Source evidence is captured, runtime data is synthetic, accessibility is drafted only, and SummaryDashboard composition is still unresolved.
