#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

usage() {
    echo "Usage: deploy.sh <domain> <target-path> [--with-claude-md] [--copy]"
    echo ""
    echo "Deploy a domain's skills and rules to a target project."
    echo ""
    echo "Options:"
    echo "  --with-claude-md   Also deploy the domain's CLAUDE.md to the target root"
    echo "  --copy             Copy files instead of symlinking (default: symlink)"
    echo "  --list             List available domains"
    echo ""
    echo "Examples:"
    echo "  deploy.sh obsidian ~/Documents/Obsidian\\ Vault"
    echo "  deploy.sh obsidian ~/Documents/Obsidian\\ Vault --with-claude-md"
    echo "  deploy.sh --list"
    exit 1
}

list_domains() {
    echo "Available domains:"
    for d in "$REPO_ROOT"/domains/*/; do
        name=$(basename "$d")
        echo "  - $name"
    done
    exit 0
}

# Handle --list
if [[ "${1:-}" == "--list" ]]; then
    list_domains
fi

# Validate args
if [[ $# -lt 2 ]]; then
    usage
fi

DOMAIN="$1"
TARGET="$2"
shift 2

WITH_CLAUDE_MD=false
USE_COPY=false

while [[ $# -gt 0 ]]; do
    case "$1" in
        --with-claude-md) WITH_CLAUDE_MD=true ;;
        --copy) USE_COPY=true ;;
        *) echo "Unknown option: $1"; usage ;;
    esac
    shift
done

DOMAIN_DIR="$REPO_ROOT/domains/$DOMAIN"

if [[ ! -d "$DOMAIN_DIR" ]]; then
    echo "Error: Domain '$DOMAIN' not found at $DOMAIN_DIR"
    echo ""
    list_domains
fi

# Create .claude directory in target if needed
mkdir -p "$TARGET/.claude"

# Deploy skills
if [[ -d "$DOMAIN_DIR/.claude/skills" ]]; then
    echo "Deploying skills..."
    if [[ "$USE_COPY" == true ]]; then
        cp -r "$DOMAIN_DIR/.claude/skills" "$TARGET/.claude/"
    else
        # Remove existing symlink or directory
        if [[ -L "$TARGET/.claude/skills" ]]; then
            rm "$TARGET/.claude/skills"
        fi
        ln -sf "$DOMAIN_DIR/.claude/skills" "$TARGET/.claude/skills"
    fi
    echo "  -> .claude/skills/"
fi

# Deploy rules
if [[ -d "$DOMAIN_DIR/.claude/rules" ]]; then
    echo "Deploying rules..."
    if [[ "$USE_COPY" == true ]]; then
        cp -r "$DOMAIN_DIR/.claude/rules" "$TARGET/.claude/"
    else
        if [[ -L "$TARGET/.claude/rules" ]]; then
            rm "$TARGET/.claude/rules"
        fi
        ln -sf "$DOMAIN_DIR/.claude/rules" "$TARGET/.claude/rules"
    fi
    echo "  -> .claude/rules/"
fi

# Deploy CLAUDE.md
if [[ "$WITH_CLAUDE_MD" == true ]] && [[ -f "$DOMAIN_DIR/CLAUDE.md" ]]; then
    echo "Deploying CLAUDE.md..."
    if [[ "$USE_COPY" == true ]]; then
        cp "$DOMAIN_DIR/CLAUDE.md" "$TARGET/CLAUDE.md"
    else
        if [[ -L "$TARGET/CLAUDE.md" ]]; then
            rm "$TARGET/CLAUDE.md"
        fi
        ln -sf "$DOMAIN_DIR/CLAUDE.md" "$TARGET/CLAUDE.md"
    fi
    echo "  -> CLAUDE.md"
fi

echo ""
echo "Done! Domain '$DOMAIN' deployed to $TARGET"
echo ""
echo "Note: settings.local.json is never touched (project-specific)."
