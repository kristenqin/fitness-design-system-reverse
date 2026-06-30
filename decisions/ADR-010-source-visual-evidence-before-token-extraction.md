# ADR-010: Source Visual Evidence Before Token Extraction

## Status

Accepted

## Context

Semantic token candidates are now mapped to runtime evidence, but raw values remain pending and CSS remains local runtime styling.

The project needs a source visual evidence review plan before any raw token extraction. Without that step, raw values could be copied before the project knows which visual decisions are meaning-bearing, transferable, and accessible.

## Decision

Perform source visual evidence review before raw token extraction.

- Use existing captured source evidence first.
- Keep raw values pending.
- Do not accept tokens in this cycle.
- Do not connect tokens to CSS.
- Do not promote tokens, components, or SummaryDashboard.

## Consequences

- `registry/source-visual-evidence-priority-matrix.json` defines which token groups need source review first.
- Future raw-value extraction must be constrained to reviewed source roles.
- Runtime CSS remains implementation scaffolding until source review, contrast review, and transferability review support promotion.
