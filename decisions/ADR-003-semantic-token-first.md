# ADR-003: Semantic Token First

## Status

Accepted

## Context

A design-system reverse project can easily start by copying raw colors, font sizes, spacing values, and radii from the source file. That creates many variables but not a stable system.

Raw token extraction before semantic modeling increases future cleanup cost.

## Decision

Use semantic token names before final raw values.

Examples:

```text
color.activity.move
color.activity.exercise
color.progress.completed
color.trend.positive
type.metric.value
type.card.caption
space.card.padding
```

Raw values should be filled only after source evidence and Storybook validation support the naming.

## Consequences

- Token files may contain `pending` placeholders in early stages.
- Token names must express product meaning, not only visual appearance.
- Token promotion requires evidence, usage context, and runtime validation.
