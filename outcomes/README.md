# Outcomes

Post-run reports generated after every pipeline execution. Each file documents what ran, what succeeded or failed, vault artifacts created, learning outcomes extracted from the content, and links to any pending proposals.

## Filename Format

```
YYYY-MM-DD-<pipeline-name>-<slug>.md
```

Example: `2026-03-09-youtube-research-claude-code-plugins.md`

## Status Values

| Status | Meaning |
|--------|---------|
| `success` | All steps completed |
| `partial` | Some steps completed, some skipped or failed |
| `failed` | Pipeline halted on a blocking error |

## Reviewing Outcomes

Open any file here to see what the pipeline did. If the outcome includes a proposed repo change, the file will link to a file in `proposals/` and tell you how to apply it.
