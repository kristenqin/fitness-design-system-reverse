# ADR-002: Not an Apple Clone

## Status

Accepted

## Context

The source material is Fitness-style UI evidence. The project can learn from mature product design, but directly copying Apple-specific visual identity would make the system less transferable and legally or ethically unclear.

## Decision

This project extracts transferable design decisions, not Apple brand assets.

We may study:

- product semantics
- information hierarchy
- progress feedback
- trend explanation
- reward systems
- state handling
- data display patterns

We do not directly reproduce:

- Apple brand identity
- proprietary iconography
- platform-specific iOS conventions when they do not transfer
- decorative polish that has no system value

## Consequences

- Every promoted component or pattern must be explainable without Apple-specific branding.
- `Experiments / ReducedAppleStyle` and `Experiments / WebAdaptation` are required validation paths.
- Source evidence stays traceable, but system output must become independent.
