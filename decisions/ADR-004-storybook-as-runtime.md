# ADR-004: Storybook as Runtime

## Status

Accepted

## Context

Static Markdown and static HTML previews cannot fully validate a design system. This project needs to verify states, variants, data inputs, layout density, multilingual content, pattern composition, and migration experiments.

## Decision

Use Storybook as the primary runtime validation layer.

Storybook should validate:

- style-system rules
- semantic components
- page and section patterns
- real data scenarios
- migration and de-branding experiments

## Consequences

- Storybook stories are part of the design-system evidence, not optional demos.
- Components without edge-state stories are not ready for promotion.
- Patterns must be validated as composed surfaces, not only as isolated components.
- Scenario and experiment stories are required for this project because the goal is transferability, not cloning.
