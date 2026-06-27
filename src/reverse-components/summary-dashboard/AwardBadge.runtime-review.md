# AwardBadge Runtime Review

## Runtime Scope

This fourteenth-cycle review covers minimum component-level runtime validation for `AwardBadge`.

In scope:

- Local reverse component under `src/reverse-components/summary-dashboard/`
- Synthetic runtime validation data
- Component-level Storybook stories
- Reward status states
- Accessibility draft from runtime behavior
- Decoration-risk and boundary checks

Out of scope:

- SummaryDashboard integration
- Full Awards section
- AchievementCollection
- Real icons or medal assets
- Apple award cloning
- TrendCard composition
- BottomNav
- Token extraction
- Pixel-perfect source matching
- Promotion

## Stories Created

- `Components/AwardBadge/Default`
- `Components/AwardBadge/Locked`
- `Components/AwardBadge/Unlocked`
- `Components/AwardBadge/New`
- `Components/AwardBadge/InProgress`
- `Components/AwardBadge/LongTitle`

## What Worked

- AwardBadge can express reward evidence through visible title, status label, description, and progress context.
- Locked state can communicate unavailable reward evidence without implying completion.
- In-progress state can communicate partial reward evidence without becoming a metric tile.
- The visual symbol can remain an `aria-hidden` placeholder rather than a real icon or medal asset.
- The component can run independently without SummaryDashboard composition.

## What Broke

- The current runtime surface is synthetic and not source-reviewed.
- The source does not confirm exact award titles, icon meanings, unlock conditions, progress values, dates, or reward statuses.
- No automated accessibility or assistive technology review has been performed.
- No unavailable, permission-denied, loading, collection-overflow, or interactive target states are covered yet.

## Boundary Validation

`AwardBadge` preserves reward semantics when the card's strongest visible elements are:

- reward or achievement title,
- reward status,
- reward evidence explanation,
- optional progress context.

It should not replace `TrendCard`, `MetricCard`, or `WorkoutItem`. Trend interpretation belongs to `TrendCard`; current metric display belongs to `MetricCard`; completed behavior records belong to `WorkoutItem`.

## Accessibility Draft

- Non-interactive AwardBadge renders as `article`.
- Reward status is visible as text and included in the accessible name.
- The placeholder symbol is hidden with `aria-hidden` because no source-backed icon meaning is confirmed.
- Locked and in-progress states do not announce the reward as earned.
- Long title remains visible rather than hidden behind truncation.

This draft is not a completed accessibility review.

## Decoration Risk Check

AwardBadge avoids decoration-only behavior by requiring visible reward status and explanatory evidence text. The symbol is present only as a placeholder and is not the component's semantic carrier.

Do not promote a future AwardBadge if the title, status, or reward evidence can be removed without changing meaning; that would indicate the component has become decorative.

## Still Open

- Are the captured award item frames locked, unlocked, new, or in-progress?
- What exact source titles or labels should award items expose?
- Does source evidence support progress text inside the badge or only in the larger Awards section?
- Should AwardBadge support an interactive action, and should that action be a button or link?
- Should AwardBadge be optional or required when SummaryDashboard composition is revisited?

## Promotion Decision

Do not promote.

`AwardBadge` now has minimum component-level runtime validation, but it remains a reverse-surface candidate. Source evidence is captured, runtime data is synthetic, accessibility is drafted only, no real icon assets are used, and SummaryDashboard composition is still unresolved.
