# ADR-001: Project Scope

## Status

Accepted

## Context

This repository is based on a mature Fitness-style product design file. The project could easily drift into either copying a specific product interface or building an overly broad design-system lab.

Both directions create unnecessary cost.

## Decision

This repository is a single-project reverse design-system workspace.

It focuses on extracting a reusable design system for progress, habit, training, focus, learning, and personal analytics products from Fitness-style UI evidence.

The first reusable loop is:

```text
Goal → Behavior → Record → Trend → Reward
```

## Consequences

- The project does not try to become a general multi-case reverse lab yet.
- The project does not claim to reproduce Apple Fitness or Apple design assets.
- The first cycle should stay narrow: SummaryDashboard, ProgressRing, MetricCard, basic tokens, one scenario, and one migration experiment.
- Future repositories can copy this structure after the workflow becomes stable.
