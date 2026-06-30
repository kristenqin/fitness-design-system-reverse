# Visual Language

This document defines the visual language extraction rules for the Fitness design-system reverse project.

The visual goal is not to copy Apple Fitness. The goal is to extract transferable visual rules that make progress, behavior, records, trends, and rewards understandable.

## Extraction Priorities

Prioritize visual decisions that express product meaning:

- goal relation
- progress state
- activity type
- trend direction
- reward status
- data confidence
- attention priority

Deprioritize visual details that are mostly brand-specific:

- Apple-specific polish
- platform-native iOS conventions that do not transfer to Web
- proprietary iconography
- purely decorative effects

## Style System Categories

```text
Theme Palette
Typography
Spacing
Density
Radius Policy
Data Colors
Chart Rules
```

## Color Direction

Use semantic naming before raw color naming.

Prefer:

```text
color.activity.move
color.activity.exercise
color.progress.completed
color.progress.pending
color.trend.positive
color.trend.negative
color.surface.primary
color.text.primary
```

Avoid starting with:

```text
green-500
red-400
card-bg
text-gray
```

Raw values can be added after semantic meaning is stable.

## Typography Direction

Typography should be validated with both English and Chinese content.

Initial roles:

```text
type.page.title
type.card.title
type.metric.value
type.metric.unit
type.metric.label
type.caption
type.insight
```

## Radius Policy

This project should not inherit rounded corners automatically from the source design.

Radius must be treated as a policy decision and validated in Storybook, especially through:

```text
Style System / Radius Policy
Experiments / NoRadiusPolicy
```

## Density Direction

Fitness-style products often compress several data objects into a daily review surface. Density must be validated in patterns and scenarios, not only in isolated components.

Key checks:

- Does the dashboard waste space?
- Does the page remain scannable?
- Does long Chinese content break the rhythm?
- Are dividers creating noise?
- Does the metric hierarchy remain clear?

## Chart and Data Rules

Charts and data visuals should answer product questions, not merely decorate data.

Before adding a chart, define:

- what decision or understanding it supports
- what time range it represents
- how it handles insufficient data
- what semantic color rules apply

## Token Evidence Notes

Eighteenth-cycle token evidence review establishes semantic token candidates from runtime roles rather than raw visual values.

Mapped groups:

- `color.progress`, `color.metric`, `color.trend`, `color.reward`, `color.surface`
- `typography.metric`, `typography.record`, `typography.trend`, `typography.reward`
- `spacing.summary`, `spacing.component`
- `density.dashboard`
- `radius.policy`
- `state.unavailable`, `state.interactive`

All raw values remain pending. This cycle does not connect tokens to CSS, does not read Figma variables, does not validate contrast, and does not promote any style-system rule.

## Source Visual Evidence Notes

Nineteenth-cycle source visual evidence planning prioritizes which semantic token groups should be reviewed against existing captured source evidence before any raw values are extracted.

High-priority groups:

- `color.progress`, `color.trend`, `color.reward`
- `typography.metric`, `typography.record`
- `spacing.summary`
- `density.dashboard`
- `state.unavailable`

Medium-priority groups:

- `color.metric`, `color.surface`
- `typography.trend`, `typography.reward`
- `spacing.component`
- `state.interactive`

Deferred:

- `radius.policy`

Runtime CSS remains local implementation styling. Current colors, typography sizes, spacing, density, radius, and interactive treatments are not source-reviewed token values. This planning cycle does not read Figma, extract variables, write raw values, connect tokens to CSS, or promote any visual rule.

## Source Visual Evidence Execution Notes

Twentieth-cycle source visual evidence execution reviews only the high-priority groups from the nineteenth-cycle plan, using existing captured Summary Dashboard evidence.

Reviewed strengths:

- `color.progress`: partial source evidence for Activity progress role; runtime states remain assumptions.
- `color.trend`: partial source evidence for Trends as an interpretation module; direction-state colors remain assumptions.
- `color.reward`: partial source evidence for Awards as reward evidence; status colors remain assumptions.
- `typography.metric`: strong source evidence for metric label, value, unit, and caption hierarchy; raw font values remain pending.
- `typography.record`: strong source evidence for workout record title and metadata hierarchy; missing-state typography remains runtime-only.
- `spacing.summary`: partial source evidence for broad SummaryDashboard rhythm; numeric spacing remains pending.
- `density.dashboard`: partial source evidence for compact summary density; transferable density scale remains unreviewed.
- `state.unavailable`: weak source evidence; unavailable, missing, empty, and insufficient visual treatment remains synthetic runtime coverage.

The review explicitly rejects local runtime CSS values as source evidence. No raw hex, font, spacing, radius, or variable values were extracted. No token was accepted, no token was connected to CSS, and no component or pattern was promoted.

## Medium-priority Source Visual Evidence Notes

Twenty-first-cycle source visual evidence execution reviews only the medium-priority groups from the nineteenth-cycle plan, using existing captured Summary Dashboard evidence.

Reviewed strengths:

- `color.metric`: partial source evidence for metric value, label, and supporting color hierarchy; metric state colors remain runtime-only.
- `color.surface`: partial source evidence for dashboard, card, module, and row surface hierarchy; raw surface values remain pending.
- `typography.trend`: partial source evidence for Trends heading, explanation, and action text; direction and metadata roles remain runtime-only.
- `typography.reward`: partial source evidence for award title and progress-like supporting text; reward status typography remains runtime-only.
- `spacing.component`: partial source evidence for component interior spacing relationships; numeric spacing remains pending.
- `state.interactive`: weak source evidence for actions; web focus, keyboard, hover, and target treatment remain runtime/accessibility assumptions.

`radius.policy` remains deferred and was not reviewed. This cycle does not read Figma, extract variables, write raw values, connect tokens to CSS, change runtime styling, or promote any visual rule.

## Token Readiness Gate Notes

Twenty-second-cycle token readiness review decides which semantic token groups may enter constrained raw-value extraction planning.

Readiness decisions:

- `typography.metric` and `typography.record` are ready for constrained raw-value extraction planning only.
- No token group is ready for direct raw-value extraction.
- `color.progress`, `color.trend`, `color.reward`, `color.metric`, and `color.surface` need contrast review before raw-value planning.
- `typography.trend`, `typography.reward`, `state.unavailable`, and `state.interactive` need stronger state evidence before raw-value planning.
- `spacing.summary`, `spacing.component`, and `density.dashboard` need transferability review before raw-value planning.
- `radius.policy` remains deferred.

All raw values remain pending. CSS remains local runtime styling. No token is accepted, connected to CSS, or promoted by this gate.

## Typography Raw-value Planning Notes

Twenty-third-cycle planning narrows future raw-value extraction planning to typography only.

Allowed groups:

- `typography.metric`
- `typography.record`

Planned tokens:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.metric.caption`
- `typography.record.title`
- `typography.record.metadata`
- `typography.record.label`
- `typography.record.unavailable`

Future extraction may plan to inspect typography fields such as font family, style, size, weight, line height, letter spacing, text case, and text decoration, but this cycle does not read or write those values.

Future raw values must first land in a typography raw-value review matrix, not in `tokens/semantic.tokens.json`. Color, spacing, density, state, and radius groups remain blocked from this plan. CSS remains local runtime styling, and no token is accepted or promoted.

## Typography Raw-value Review Matrix Notes

Twenty-fourth-cycle preparation creates the review matrix for future constrained typography raw-value review.

Prepared groups:

- `typography.metric`
- `typography.record`

Prepared token entries:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.metric.caption`
- `typography.record.title`
- `typography.record.metadata`
- `typography.record.label`
- `typography.record.unavailable`

The matrix allows only typography fields: font family, font style, font size, font weight, line height, letter spacing, text case, and text decoration. All future raw values remain null and pending.

The review matrix is a preparation artifact only. It does not read Figma, extract raw values, write semantic token values, integrate CSS, accept tokens, or promote any asset.
