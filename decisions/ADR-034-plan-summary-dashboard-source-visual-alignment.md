# ADR-034: Plan SummaryDashboard Source Visual Alignment

## Status

Planned.

No design-system asset changes promotion state in this ADR.

## Context

SummaryDashboard is the active workflow goal and the only current object scope.

Metric typography visual QA reviewed the Cycle 42 CSS execution and recommended moving up to SummaryDashboard-level alignment rather than writing another metric-only CSS adjustment.

## Decision

Plan a SummaryDashboard source visual alignment pass before further CSS execution.

The next workflow step should capture runtime visual baselines for existing reverse surfaces and compare them against captured SummaryDashboard source evidence.

## Constraints

This cycle does not read additional Figma nodes.

This cycle does not generate runtime screenshots.

This cycle does not change CSS, TSX, Storybook stories, source assets, Figma maps, or semantic token values.

This cycle does not change promotion state.

## Consequences

SummaryDashboard high-fidelity alignment becomes the next workflow focus.

The next cycle should capture runtime screenshots before any visual alignment execution.

BottomNav remains deferred source app shell.

