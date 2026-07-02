# Workflow Verifier

The MVP verifier lives at:

```text
scripts/verify-workflow-cycle.mjs
```

Run it from the repository root:

```bash
node scripts/verify-workflow-cycle.mjs
```

## Inputs

The verifier reads:

- `registry/next-action.json`
- `registry/workflow-invariants.json`
- Git changed files from the local working tree

## Checks

The verifier currently checks:

- changed files are covered by `allowedChanges`
- changed files do not match `blockedChanges`
- forbidden status values do not appear in changed JSON files except inside invariant policy fields
- JSON files with `promotionStatus` keep it as `not-promoted`
- token value files are not changed unless the current cycle explicitly allows token value changes
- CSS, TSX, and Storybook paths are not changed unless the current cycle explicitly allows that file type

## Output

The verifier prints:

- `PASS` when all checks pass
- `FAIL` with reasons when any guardrail is violated

Passing the verifier does not promote anything. It only confirms that the local changes stayed inside the current cycle boundary.

