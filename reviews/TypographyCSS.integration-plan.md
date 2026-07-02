# Typography CSS Integration Plan

## Review Scope

This thirty-second cycle prepares a CSS integration plan for transferability-reviewed typography tokens.

It does not write CSS, change token values, update component implementation, create Storybook stories, accept tokens, or promote any asset.

## Current State

Six typography token values are written, verified, and transferability-reviewed:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.title`
- `typography.record.duration`
- `typography.record.date`

They remain candidate tokens.

## Planned Integration Tokens

The planned CSS integration tokens are:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.title`
- `typography.record.duration`
- `typography.record.date`

## Blocked Tokens

The following tokens remain blocked from CSS integration:

- `typography.metric.caption`
- `typography.record.metadata`
- `typography.record.label`
- `typography.record.unavailable`
- `typography.trend.*`
- `typography.reward.*`
- `color.*`
- `spacing.*`
- `density.dashboard`
- `state.*`
- `radius.policy`

## CSS Variable Naming Policy

Planned CSS variables use the prefix:

```text
--reverse-typography
```

Names follow:

```text
--reverse-typography-{group}-{role}-{field}
```

No Apple, Fitness, source, or Figma prefix is used.

## Target Runtime Surfaces

The planned target file is:

```text
src/reverse-components/summary-dashboard/SummaryDashboard.css
```

Target runtime surfaces are limited to current reverse-surface selectors for:

- MetricCard metric value, unit, and label typography
- WorkoutItem record title, duration, and date typography
- Style System/Typography metric role display where applicable

## Direct Plan Candidates

Direct plan candidates:

- `typography.record.title`
- `typography.record.date`

These roles were transferability candidates in the previous review.

## Constrained Plan Candidates

Constrained plan candidates:

- `typography.metric.value`
- `typography.metric.unit`
- `typography.metric.label`
- `typography.record.duration`

Metric typography requires source-specific risk handling. `typography.record.duration` requires hierarchy normalization before runtime CSS can safely depend on it.

## Rollback Policy

Any future CSS write must be reversible by removing the planned `--reverse-typography-*` variables and restoring local runtime styling for the affected selectors.

The future integration should be scoped so component implementation and Storybook stories do not need to change for rollback.

## Validation Requirements

A future CSS integration execution must validate:

- MetricCard states after variable use
- WorkoutItem states after variable use
- SummaryDashboard default and semantic-composition stories
- Style System/Typography metric roles
- long text, extreme values, missing duration, and missing date pressure

This plan does not run that validation.

## Files Not Changed

No runtime CSS, component implementation, Storybook story, or token value file content was changed beyond planning metadata.

## CSS Integration Policy

CSS integration is `planned-not-written`.

No CSS variable is written in this cycle.

## Promotion Impact

No token, style-system asset, component, pattern, or SummaryDashboard surface is promoted.

## Next Cycle Recommendation

Run a constrained typography CSS integration execution only if it writes variables for the six planned tokens, avoids component and Storybook changes, keeps promotion blocked, and validates the affected runtime stories afterward.
