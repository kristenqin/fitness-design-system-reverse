# AwardBadge Contract

## Source Evidence

This contract uses existing SummaryDashboard evidence only.

Evidence references:

- Source map id: `figma-node-143-23952`
- Screenshot evidence id: `screenshot-summary-dashboard-143-23952`
- SummaryDashboard screen node: `143:25101` / `Screen 5`
- Awards section node: `143:25188` / `Awards`
- Award item nodes: `143:25193`, `143:25201`, and `143:25209`
- Component map entry: `component-award-badge-summary-dashboard`
- Pattern: `summary-dashboard`

Observed evidence from the existing contract:

- `Screen 5` contains a visible `Awards` section.
- The `Awards` section contains a heading `Awards`.
- The `Awards` section contains a `Show More` text action.
- The `Awards` section contains three award item frames.

No additional Figma nodes were read for this contract. No exact award title, icon meaning, unlock condition, progress value, date, or reward status is confirmed by the current evidence.

## Contract Purpose

Define `AwardBadge` as a reverse-surface component candidate for reward evidence and achievement markers.

The purpose of this contract is to separate reward semantics from trend interpretation, current metric display, and completed behavior records before any runtime implementation or SummaryDashboard composition work.

## Boundary Principle

- `AwardBadge` owns reward evidence and achievement markers.
- `TrendCard` owns direction and interpretation over time.
- `MetricCard` owns current metric display.
- `WorkoutItem` owns completed behavior records.
- `AwardBadge` should not be used as a decoration-only icon.
- `AwardBadge` should not be composed into `SummaryDashboard` until contract and component-level runtime validation are complete.

## Primary Object

Primary object:

- Reward

Supporting objects:

- Achievement
- Milestone
- Completion state
- Unlock evidence

`AwardBadge` should answer what achievement or reward is being represented and whether the reward evidence is available, locked, newly earned, or in progress.

## Information Anatomy

### Observed Slots

Observed in existing SummaryDashboard evidence:

- Section identity: `Awards`
- Text action: `Show More`
- Three award item frames

### Inferred Slots

Inferred from project concept model and the existing Awards preview role:

- award identity
- achievement marker
- reward status
- visual symbol placeholder
- optional progress summary
- optional action target

These are inferred candidates only. They are not confirmed as exact source slots.

### Future Candidate Slots

Potential future slots that require runtime validation or additional evidence:

- award title
- award description
- icon meaning
- unlock condition
- unlock date
- progress value
- progress label
- locked state reason
- newness marker
- milestone count
- collection position

Do not treat these as observed source facts.

## Input Contract Draft

Draft shape for future runtime validation:

```ts
type AwardBadgeStatus = "default" | "locked" | "unlocked" | "new" | "in-progress";

interface AwardBadgeData {
  id: string;
  title: string;
  status: AwardBadgeStatus;
  statusLabel: string;
  description?: string;
  progressLabel?: string;
  actionLabel?: string;
  isInteractive?: boolean;
}
```

This draft is for synthetic runtime validation only. It is not a stable component API.

## State Plan

Minimum states to validate next:

- default
- locked
- unlocked
- new
- in-progress
- long-title

Later states may include unavailable reward data, hidden reward detail, permission denied, loading, and collection overflow, but those are not required for the next runtime pass.

## Accessibility Draft

Draft expectations:

- Non-interactive AwardBadge should render as an article-like reward evidence surface.
- Interactive AwardBadge should use a native button or link in runtime validation.
- Accessible naming should include title, status, and reward meaning when available.
- Reward status must not be communicated only through color, shape, or icon treatment.
- Locked and in-progress states should describe status without implying the reward was earned.
- Decorative visual symbols should be hidden from assistive technology unless their meaning is explicitly defined.

This accessibility draft is not reviewed with automated checks or assistive technology.

## Relationship with TrendCard

`TrendCard` explains direction and interpretation over time.

`AwardBadge` represents reward evidence or achievement markers. A reward may be earned because of repeated behavior, but the badge itself should not explain the trend. Trend interpretation belongs to `TrendCard`; reward recognition belongs to `AwardBadge`.

## Relationship with MetricCard

`MetricCard` displays current metric values.

`AwardBadge` may include a progress label in a future state, but that progress is subordinate to reward status. It should not replace a metric tile or become a generic numeric display.

## Relationship with WorkoutItem

`WorkoutItem` represents one completed behavior record.

`AwardBadge` can be connected to repeated behavior or milestone completion, but it does not represent a single completed workout or session. Completed record semantics stay with `WorkoutItem`.

## Relationship with SummaryDashboard

`AwardBadge` is a Reward semantic module for SummaryDashboard, but it should not be composed into SummaryDashboard yet.

Required sequence:

1. Define this contract.
2. Run component-level runtime validation with synthetic data.
3. Review accessibility and state coverage.
4. Revisit SummaryDashboard optional or required module composition.

## Not in Scope

- Implementing `AwardBadge.tsx`
- Creating `AwardBadge.stories.tsx`
- Connecting AwardBadge to `SummaryDashboard`
- Implementing the full Awards section
- Implementing `AchievementCollection`
- Using real icons or medal assets
- Implementing TrendCard composition
- Implementing BottomNav
- Extracting token values
- Reading more Figma nodes
- Promoting AwardBadge

## Open Questions

- Are the captured award item frames locked, unlocked, new, or in-progress?
- What exact title or label should each award expose?
- Is `Show More` a collection route, an expansion action, or source app navigation?
- Does AwardBadge require progress text, or is progress only present in a larger Awards section?
- Which reward states are source-backed versus synthetic runtime-only?
- Should AwardBadge be optional or required in SummaryDashboard after component runtime validation?

## Promotion Constraints

Do not promote `AwardBadge` until:

- source evidence remains traceable,
- component-level runtime stories exist,
- reward status states are validated,
- accessibility behavior is reviewed,
- boundaries with `TrendCard`, `MetricCard`, and `WorkoutItem` remain stable,
- SummaryDashboard composition rules are revisited,
- and the candidate can be explained without source-specific branding or real medal assets.
