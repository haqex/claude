#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

if [[ $# -lt 1 ]]; then
    echo "Usage: new-domain.sh <domain-name>"
    echo ""
    echo "Scaffolds a new domain directory with the standard structure."
    echo ""
    echo "Example: new-domain.sh code-review"
    exit 1
fi

DOMAIN="$1"
DOMAIN_DIR="$REPO_ROOT/domains/$DOMAIN"

if [[ -d "$DOMAIN_DIR" ]]; then
    echo "Error: Domain '$DOMAIN' already exists at $DOMAIN_DIR"
    exit 1
fi

echo "Creating domain: $DOMAIN"

mkdir -p "$DOMAIN_DIR/.claude/rules"
mkdir -p "$DOMAIN_DIR/.claude/skills"

# Create CLAUDE.md from template or minimal
if [[ -f "$REPO_ROOT/shared/templates/new-domain-CLAUDE.md.template" ]]; then
    sed "s/{{DOMAIN_NAME}}/$DOMAIN/g" "$REPO_ROOT/shared/templates/new-domain-CLAUDE.md.template" > "$DOMAIN_DIR/CLAUDE.md"
else
    cat > "$DOMAIN_DIR/CLAUDE.md" << EOF
# ${DOMAIN} — Claude Code Project Instructions

## Overview
<!-- Describe the target project this domain supports -->

## Skills Available
<!-- List skills as they are added -->

## Conventions
<!-- Project-specific conventions and rules -->
EOF
fi

# Create README.md
cat > "$DOMAIN_DIR/README.md" << EOF
# ${DOMAIN} Domain

## Skills

| Skill | Command | Description |
|-------|---------|-------------|
| <!-- skill --> | \`/project:<name> <args>\` | <!-- description --> |

## Rules

<!-- List auto-trigger rules -->

## Usage

\`\`\`bash
claude --add-dir ~/developer/enterprise/claude/domains/${DOMAIN}
\`\`\`
EOF

echo ""
echo "Created:"
echo "  $DOMAIN_DIR/"
echo "  ├── CLAUDE.md"
echo "  ├── README.md"
echo "  └── .claude/"
echo "      ├── rules/"
echo "      └── skills/"
echo ""
echo "Next: Add skills under .claude/skills/<skill-name>/SKILL.md"
