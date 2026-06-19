# Reverse Workflow

Use this workflow to turn fitness-product UI evidence into design-system candidates without losing the boundary between observation and inference.

## Stage 1: Evidence

Collect raw screenshots, DOM snapshots, interaction notes, and viewport metadata under:

```text
ui-reverse-experiments/<case-study>/
```

Keep evidence private by default. Promote only curated artifacts after review.

## Stage 2: Normalization

Normalize evidence into:

- Layout anatomy
- Component roles
- Interaction states
- Token candidates
- Accessibility observations
- Open questions

Separate observed facts from inferred design-system rules.

## Stage 3: Review Surface

Build a Storybook surface under:

```text
src/reverse-components/<pattern>/
```

Every surface needs:

- A React component
- A CSS file
- Mock data
- A Storybook story
- A contract document

## Stage 4: Promotion Review

Before promoting a pattern, write a review that answers:

- Which evidence supports this candidate?
- Which tokens are stable enough to name?
- Which states are missing?
- Which accessibility constraints are unresolved?
- What should stay app-specific rather than becoming a system rule?
