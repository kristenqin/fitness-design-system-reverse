# ADR-005: Style System over Static Preview

## Status

Accepted

## Context

A previous option was to keep simple static HTML previews for early visual validation. That is useful for very small experiments, but it becomes inconvenient once the project needs state, data, and component composition validation.

Ring UI's Storybook uses a `Style-only` category to validate non-component CSS and theme assets. This project needs the same idea, but with broader design-system semantics.

## Decision

Use `Style System` as the Storybook category for non-componentized visual rules.

`Style System` includes:

- Theme Palette
- Typography
- Spacing
- Density
- Radius Policy
- Data Colors
- Chart Rules

## Consequences

- Static previews are not the primary validation layer.
- Non-component assets still need Storybook validation.
- Tokens, typography, spacing, data colors, and radius policy can be reviewed visually before becoming stable rules.
