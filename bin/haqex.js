#!/usr/bin/env node

const readline = require('readline');
const path = require('path');
const BUNDLES = require('../src/registry');
const { installBundle, activationPrompt } = require('../src/install');

const BUNDLE_NAMES = Object.keys(BUNDLES);

// ─── Helpers ────────────────────────────────────────────────────────────────

const c = {
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
};

function printHeader() {
  console.log('');
  console.log(c.bold('  haqex') + c.dim(' — Claude Code bundles'));
  console.log('');
}

function printBundleList() {
  BUNDLE_NAMES.forEach((name, i) => {
    const b = BUNDLES[name];
    const num = c.dim(`  ${i + 1}.`);
    const bname = c.bold(name.padEnd(10));
    const desc = c.dim(b.description);
    console.log(`${num} ${bname} ${desc}`);
  });
  console.log('');
}

function printActivationPrompt(bundleName, installPath) {
  const prompt = activationPrompt(bundleName, installPath);
  const bar = c.dim('  ' + '─'.repeat(60));
  console.log(bar);
  prompt.split('\n').forEach((line) => console.log(c.dim('  ') + line));
  console.log(bar);
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// ─── Install ────────────────────────────────────────────────────────────────

function runInstall(names) {
  const invalid = names.filter((n) => !BUNDLES[n]);
  if (invalid.length) {
    console.error(c.red(`  Unknown bundle(s): ${invalid.join(', ')}`));
    console.error(c.dim(`  Available: ${BUNDLE_NAMES.join(', ')}`));
    process.exit(1);
  }

  console.log('');
  const results = [];

  for (const name of names) {
    try {
      const installPath = installBundle(name, process.cwd());
      const rel = path.relative(process.cwd(), installPath);
      console.log(c.green(`  ✓`) + ` Installed ${c.bold(name)} → ./${rel}`);
      results.push({ name, installPath });
    } catch (err) {
      console.error(c.red(`  ✗`) + ` Failed to install ${name}: ${err.message}`);
      process.exit(1);
    }
  }

  console.log('');
  console.log(c.bold('  Activate with Claude:'));
  console.log(c.dim('  Copy the prompt below and paste it to Claude in your project:\n'));

  if (results.length === 1) {
    printActivationPrompt(results[0].name, results[0].installPath);
  } else {
    // Multi-bundle prompt
    const bar = c.dim('  ' + '─'.repeat(60));
    console.log(bar);
    const paths = results.map((r) => {
      const rel = path.relative(process.cwd(), r.installPath);
      return `./${rel}`;
    });
    const lines = [
      `I've added ${results.length} Claude bundles to this project:`,
      ...results.map((r, i) => `- ${r.name} bundle at \`${paths[i]}\``),
      '',
      'Read each BUNDLE.md file and use its directory as the bundle root:',
      ...results.map((r, i) => `- Read \`${paths[i]}/BUNDLE.md\``),
    ];
    lines.forEach((line) => console.log(c.dim('  ') + line));
    console.log(bar);
  }

  console.log('');
}

// ─── Interactive menu ────────────────────────────────────────────────────────

async function runInteractive() {
  printBundleList();

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const answer = await ask(
    rl,
    c.dim('  ? ') + 'Which bundle(s)? ' + c.dim('(name or number, comma-separated): ')
  );
  rl.close();

  if (!answer.trim()) {
    console.log(c.dim('\n  Cancelled.\n'));
    process.exit(0);
  }

  const tokens = answer.split(',').map((t) => t.trim()).filter(Boolean);
  const names = tokens.map((t) => {
    const n = parseInt(t, 10);
    if (!isNaN(n) && n >= 1 && n <= BUNDLE_NAMES.length) return BUNDLE_NAMES[n - 1];
    return t.toLowerCase();
  });

  runInstall(names);
}

// ─── Entry ──────────────────────────────────────────────────────────────────

printHeader();

const args = process.argv.slice(2).filter((a) => !a.startsWith('-'));

if (args.length > 0) {
  runInstall(args.map((a) => a.toLowerCase()));
} else {
  runInteractive().catch((err) => {
    console.error(c.red('  Error: ') + err.message);
    process.exit(1);
  });
}
