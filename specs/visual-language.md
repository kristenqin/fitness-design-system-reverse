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
