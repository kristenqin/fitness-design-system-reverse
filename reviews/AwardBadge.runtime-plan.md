# AwardBadge Runtime Plan

## Purpose

Plan the next runtime validation step for `AwardBadge` without implementing it in this cycle.

The next cycle should validate `AwardBadge` as a component-level reverse surface for reward evidence and achievement markers. It should not validate a full Awards section, should not use real medal assets, and should not connect AwardBadge into SummaryDashboard yet.

## Runtime Scope

Next cycle should cover only:

- `AwardBadge` as a local reverse component candidate
- Synthetic runtime validation data
- Component-level Storybook stories
- Reward status and long-title checks
- Accessibility and semantic-boundary checks

Out of scope for the next cycle:

- SummaryDashboard integration
- Full Awards section
- AchievementCollection
- Real icons or medal assets
- TrendCard composition
- BottomNav
- Token extraction
- Pixel-perfect source matching
- Promotion

## Stories to Create Next Cycle

Recommended Storybook stories:

- `Components/AwardBadge/Default`
- `Components/AwardBadge/Locked`
- `Components/AwardBadge/Unlocked`
- `Components/AwardBadge/New`
- `Components/AwardBadge/InProgress`
- `Components/AwardBadge/LongTitle`

## Synthetic Data Required

Synthetic data must be clearly labeled as runtime validation data and must not be presented as Apple Fitness or Figma source data.

Minimum data fixtures:

- `defaultAwardBadgeData`: title, status, status label
- `lockedAwardBadgeData`: locked status without implying earned reward
- `unlockedAwardBadgeData`: unlocked status with reward evidence text
- `newAwardBadgeData`: newly earned marker
- `inProgressAwardBadgeData`: progress state without claiming completion
- `longTitleAwardBadgeData`: long localized or descriptive title pressure

Optional later fixtures:

- unavailable reward data
- hidden reward detail
- permission denied reward data
- collection overflow
- interactive award target

## Accessibility Checks

Validate:

- Non-interactive reward surfaces use an article-like semantic structure.
- Interactive targets use native button or link semantics.
- Accessible names include title and status.
- Locked state is not announced as earned.
- In-progress state communicates partial reward evidence without pretending completion.
- Visual symbols are decorative unless their meaning is explicitly defined.
- Reward state is available in text, not only visual styling.

Do not claim accessibility review is complete until automated checks or assistive technology review exist.

## Relationship with SummaryDashboard

`AwardBadge` is captured in SummaryDashboard evidence and maps to Reward in the core concept loop, but the next cycle should validate it independently first.

Do not connect `AwardBadge` into SummaryDashboard until:

- the component contract is stable enough for a local runtime pass,
- reward status states are visible in Storybook,
- accessibility behavior is drafted from runtime evidence,
- and SummaryDashboard composition rules can be revisited without expanding into full Awards page or app shell scope.

## Do Not Do

- Do not implement `AwardBadge` in this cycle.
- Do not create `AwardBadge.stories.tsx` in this cycle.
- Do not connect AwardBadge into SummaryDashboard in the next runtime cycle.
- Do not build the full Awards section.
- Do not implement AchievementCollection.
- Do not use real icons or medal assets.
- Do not implement TrendCard composition.
- Do not implement BottomNav.
- Do not extract tokens.
- Do not read additional Figma nodes.
- Do not promote AwardBadge.

## Success Criteria

The next runtime cycle succeeds when:

- `AwardBadge` has a local reverse component surface under `src/reverse-components/summary-dashboard/`.
- The six recommended component stories build successfully.
- Synthetic fixtures are clearly marked as synthetic runtime validation data.
- Locked, unlocked, new, in-progress, and long-title states are visible.
- AwardBadge remains reward evidence, not a decoration-only icon.
- Accessibility gaps are documented without claiming promotion.
- `promotionStatus` remains `not-promoted`.

## Next Cycle Recommendation

Run a fourteenth cycle focused only on `AwardBadge` component-level runtime validation.

Do not connect AwardBadge into SummaryDashboard yet. Do not expand into the full Awards section or AchievementCollection. Keep BottomNav paused as source app shell.
