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
