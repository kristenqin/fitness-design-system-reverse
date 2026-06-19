# Storybook Classification Protocol

Storybook is the runtime validation layer for this reverse design system project.

It is not only a component gallery. It is used to verify style rules, component states, pattern composition, real data scenarios, and migration experiments.

## Classification

```text
Style System
Components
Patterns
Scenarios
Experiments
```

## Style System

Use `Style System` for visual rules that are not necessarily React components.

Examples:

```text
Style System / Theme Palette
Style System / Typography
Style System / Spacing
Style System / Density
Style System / Radius Policy
Style System / Data Colors
Style System / Chart Rules
```

This category is inspired by Ring UI's `Style-only` category, but renamed for this project because the goal is broader than pure CSS-class display.

Use it to validate:

- CSS variables
- semantic tokens
- typography scale
- spacing rhythm
- density rules
- radius policy
- data color rules
- chart color mapping

## Components

Use `Components` for reusable semantic UI components.

Initial components:

```text
Components / ProgressRing
Components / MetricCard
Components / TrendCard
Components / AwardBadge
Components / WorkoutItem
Components / InsightCard
```

Each component should include stories for:

- Default
- Loading
- Empty
- Error
- Long Text
- Extreme Value
- Completed
- Overachieved
- Disabled or unavailable state when relevant

## Patterns

Use `Patterns` for page-level or section-level composition patterns.

Initial patterns:

```text
Patterns / SummaryDashboard
Patterns / ActivityDetail
Patterns / WorkoutHistory
Patterns / TrendOverview
Patterns / AchievementCollection
```

Patterns verify whether components still work as a composed product surface.

## Scenarios

Use `Scenarios` for real product states and data pressure tests.

Initial scenarios:

```text
Scenarios / NoData
Scenarios / LowProgress
Scenarios / GoalCompleted
Scenarios / Overachieved
Scenarios / DecliningTrend
Scenarios / FirstUse
Scenarios / PermissionDenied
Scenarios / LongHistory
```

Scenarios should feel like user situations, not component variants.

## Experiments

Use `Experiments` for unstable migration and de-branding work.

Initial experiments:

```text
Experiments / ReducedAppleStyle
Experiments / WebAdaptation
Experiments / ChineseTypography
Experiments / NoRadiusPolicy
Experiments / FocusAppMigration
Experiments / LearningTrackerMigration
```

Experiments must not silently become stable system rules. Promote them only after evidence review.

## Naming Rules

Story titles should follow this structure:

```text
<Category>/<Subject>/<Variant>
```

Examples:

```text
Components/MetricCard/ExtremeValue
Patterns/SummaryDashboard/LowProgress
Scenarios/DecliningTrend/Default
Experiments/ChineseTypography/MetricCards
```

## Promotion Rule

A story can support promotion only when it includes:

- clear input data
- visible state or variant name
- evidence or contract reference
- known gaps if incomplete
- no hidden dependency on Apple-specific branding
