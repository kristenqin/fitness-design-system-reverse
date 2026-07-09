# Cycle Template

Use this template when defining the next local Agent cycle.

## Cycle

- Cycle:
- Name:
- Mode:
- Objective:
- Workflow layer:
- Track: reverse-runtime | design-system | workflow-control

## Required Reads

- README.md
- docs/reverse-workflow.md
- docs/storybook-classification.md
- registry/workflow-state.json
- registry/next-action.json
- registry/workflow-invariants.json
- registry/workflow-goal.json
- relevant registry, review, spec, token, and decision files for this cycle

## Allowed Changes

List exact file paths or glob patterns.

```json
[]
```

## Blocked Changes

List exact file paths or glob patterns.

```json
[]
```

## Status Policy

- Promotion allowed:
- Accepted status allowed:
- Token value write allowed:
- CSS write allowed:
- TSX write allowed:
- Storybook write allowed:

## Next Action Policy

- Update `registry/next-action.json`:
- Active action after completion:
- Next recommended action after completion:
- Reason:

## Deliverables

- Registry files:
- Review files:
- Decision files:
- Verification artifacts:

## Validation

Required commands:

```bash
node scripts/verify-workflow-cycle.mjs
```

Optional commands:

```bash
npm run build
```

## Completion Output

Report:

1. Modified files
2. Current cycle result
3. Blocked actions respected
4. Verification result
5. Promotion status
6. Next action state
