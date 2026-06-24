# TrendCard Contract

## Source Evidence

This contract uses existing SummaryDashboard evidence only.

Evidence references:

- Source map id: `figma-node-143-23952`
- Screenshot evidence id: `screenshot-summary-dashboard-143-23952`
- SummaryDashboard screen node: `143:25101` / `Screen 5`
- Trends section node: `143:25166` / `Trends`
- Trends Box node: `143:25168` / `Trends Box`
- Component map entry: `component-trend-card-summary-dashboard`
- Pattern: `summary-dashboard`

Observed evidence from the existing contract:

- `Screen 5` contains a visible `Trends` section.
- The `Trends` section contains a `Trends Box`.
- The `Trends Box` contains explanatory text.
- The `Trends Box` contains a `Get Started` text action.

No additional Figma nodes were read for this contract. No exact trend copy, metric value, percentage, arrow, delta value, chart, or sparkline is confirmed by the current evidence.

## Contract Purpose

Define `TrendCard` as a reverse-surface component candidate for communicating direction and interpretation over time.

The purpose of this contract is to separate trend interpretation from current metric display before any runtime implementation or SummaryDashboard composition work.

## Boundary Principle

- `MetricCard` owns current metric display.
- `TrendCard` owns direction and interpretation over time.
- `TrendCard` may contain metric values, but those values are subordinate to trend interpretation.
- `TrendCard` should not be used as a generic metric tile.
- `TrendCard` should not be composed into `SummaryDashboard` until contract and component-level runtime validation are complete.

## Primary Object

Primary object:

- Trend

Supporting objects:

- Insight
- Metric context
- Time range
- Data confidence

`TrendCard` should answer whether repeated records appear to be improving, declining, stable, or insufficient for interpretation.

## Information Anatomy

### Observed Slots

Observed in existing SummaryDashboard evidence:

- Section identity: `Trends`
- Container identity: `Trends Box`
- Explanatory text block
- Text action: `Get Started`

### Inferred Slots

Inferred from project concept model and the existing Trends Box role:

- trend subject or metric identity
- trend interpretation
- trend direction
- data sufficiency state
- optional action label
- optional action target

These are inferred candidates only. They are not confirmed as exact source slots.

### Future Candidate Slots

Potential future slots that require runtime validation or additional evidence:

- comparison period
- supporting value
- delta value
- percentage change
- direction icon
- chart or sparkline
- confidence or data-quality label
- empty-state explanation
- permission or unavailable-data explanation

Do not treat these as observed source facts.

## Input Contract Draft

Draft shape for future runtime validation:

```ts
type TrendDirection = "improving" | "declining" | "neutral" | "insufficient-data";

interface TrendCardData {
  id: string;
  title: string;
  direction: TrendDirection;
  explanation: string;
  metricLabel?: string;
  timeRangeLabel?: string;
  supportingValue?: string;
  actionLabel?: string;
  isInteractive?: boolean;
}
```

This draft is for synthetic runtime validation only. It is not a stable component API.

## State Plan

Minimum states to validate next:

- default
- improving
- declining
- neutral
- insufficient-data
- long-explanation

Later states may include unavailable data, permission denied, loading, and error, but those are not required for the next runtime pass.

## Accessibility Draft

Draft expectations:

- Non-interactive TrendCard should render as an article-like semantic surface.
- Interactive TrendCard should use a native button or link in runtime validation.
- Accessible naming should prioritize trend subject, direction, and interpretation.
- Direction must not be communicated only through color or iconography.
- Insufficient-data state should be announced as insufficient data, not as a negative trend.
- Long explanations should remain readable without hiding essential interpretation.

This accessibility draft is not reviewed with automated checks or assistive technology.

## Relationship with MetricCard

`MetricCard` displays a current metric value or compact metric fact.

`TrendCard` interprets movement across time. It can include metric values as supporting evidence, but the card's main meaning is the interpretation, not the value itself.

Boundary examples:

- Current value: `MetricCard`
- Current value plus unit and caption: `MetricCard`
- Improving, declining, stable, or insufficient trend explanation: `TrendCard`
- Trend text that includes a number as supporting evidence: still `TrendCard`

## Relationship with SummaryDashboard

`TrendCard` is the next semantic module for SummaryDashboard composition, but it should not be composed into SummaryDashboard yet.

Required sequence:

1. Define this contract.
2. Run component-level runtime validation with synthetic data.
3. Review accessibility and state coverage.
4. Revisit SummaryDashboard optional or required module composition.

## Not in Scope

- Implementing `TrendCard.tsx`
- Creating `TrendCard.stories.tsx`
- Connecting TrendCard to `SummaryDashboard`
- Implementing the full Trends section
- Implementing charts, sparklines, arrows, or source-specific illustrations
- Extracting token values
- Reading more Figma nodes
- Promoting TrendCard
- Implementing `AwardBadge` or `BottomNav`

## Open Questions

- Is the captured Trends Box an onboarding state, an insufficient-data state, or a default trend explanation?
- Which metric or behavior object should TrendCard reference first?
- Is `Get Started` a setup action, an education action, or a route to another surface?
- Does TrendCard require a chart, or can text interpretation be enough?
- Which states are source-backed versus synthetic runtime-only?
- Should TrendCard become optional or required in SummaryDashboard after component runtime validation?

## Promotion Constraints

Do not promote `TrendCard` until:

- source evidence remains traceable,
- component-level runtime stories exist,
- direction and data-sufficiency states are validated,
- accessibility behavior is reviewed,
- boundary with `MetricCard` remains stable,
- SummaryDashboard composition rules are revisited,
- and the candidate can be explained without source-specific branding.
