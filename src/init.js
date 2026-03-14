const fs = require('fs');
const path = require('path');
const readline = require('readline');
const figlet = require('figlet');
const BUNDLES = require('./registry');
const { installBundle, activationPrompt } = require('./install');

const CONFIG_FILE = '.haqex.json';
const BUNDLE_NAMES = Object.keys(BUNDLES);

// ─── Colors ──────────────────────────────────────────────────────────────────

const c = {
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  magenta: (s) => `\x1b[35m${s}\x1b[0m`,
};

// ─── Banner ──────────────────────────────────────────────────────────────────

function printBanner() {
  const banner = figlet.textSync('haqex', { font: 'ANSI Shadow' });
  const lines = banner.split('\n');
  lines.forEach((line) => console.log(c.cyan(`  ${line}`)));
  console.log(c.dim('  Claude Code bundles\n'));
}

// ─── Prompt helpers ──────────────────────────────────────────────────────────

function ask(rl, question, fallback) {
  const suffix = fallback ? c.dim(` (${fallback})`) : '';
  return new Promise((resolve) => {
    rl.question(`  ${c.green('?')} ${question}${suffix} `, (answer) => {
      resolve(answer.trim() || fallback || '');
    });
  });
}

function askChoice(rl, question, choices, fallback) {
  const choiceStr = choices.map((ch, i) => {
    const label = ch === fallback ? c.bold(ch) : ch;
    return `${c.dim(`${i + 1}.`)} ${label}`;
  }).join('  ');
  return new Promise((resolve) => {
    console.log(`  ${c.green('?')} ${question}`);
    console.log(`    ${choiceStr}`);
    rl.question(`    ${c.dim('>')} `, (answer) => {
      const trimmed = answer.trim();
      if (!trimmed && fallback) return resolve(fallback);
      const n = parseInt(trimmed, 10);
      if (!isNaN(n) && n >= 1 && n <= choices.length) return resolve(choices[n - 1]);
      const match = choices.find((ch) => ch.toLowerCase() === trimmed.toLowerCase());
      resolve(match || fallback || trimmed);
    });
  });
}

function askMulti(rl, question, choices) {
  choices.forEach((name, i) => {
    const b = BUNDLES[name];
    console.log(`    ${c.dim(`${i + 1}.`)} ${c.bold(name.padEnd(10))} ${c.dim(b.description)}`);
  });
  return new Promise((resolve) => {
    rl.question(`\n  ${c.green('?')} ${question} ${c.dim('(comma-separated)')} `, (answer) => {
      const tokens = answer.split(',').map((t) => t.trim()).filter(Boolean);
      const names = tokens.map((t) => {
        const n = parseInt(t, 10);
        if (!isNaN(n) && n >= 1 && n <= choices.length) return choices[n - 1];
        return t.toLowerCase();
      }).filter((n) => choices.includes(n));
      resolve([...new Set(names)]);
    });
  });
}

// ─── Bundle-specific questions ───────────────────────────────────────────────

const FRAMEWORKS = ['Next.js', 'React', 'Vue', 'Svelte', 'Astro', 'Node.js', 'Other'];
const DESIGN_DIRECTIONS = ['bold', 'minimal', 'playful', 'corporate', 'brutalist'];

async function askBundlePreferences(rl, bundles) {
  const prefs = {};

  if (bundles.includes('frontend')) {
    console.log(`\n  ${c.magenta('frontend')} ${c.dim('preferences:')}`);
    const direction = await askChoice(rl, 'Design direction:', DESIGN_DIRECTIONS, 'bold');
    const colorScheme = await ask(rl, 'Primary brand color:', '#000000');
    prefs.frontend = { design_direction: direction, brand_color: colorScheme };
  }

  if (bundles.includes('learn')) {
    console.log(`\n  ${c.magenta('learn')} ${c.dim('preferences:')}`);
    const vaultPath = await ask(rl, 'Obsidian vault path:', '~/Documents/Obsidian Vault');
    prefs.learn = { vault_path: vaultPath };
  }

  return prefs;
}

// ─── Config file ─────────────────────────────────────────────────────────────

function saveConfig(targetDir, config) {
  const configPath = path.join(targetDir, CONFIG_FILE);
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
  return configPath;
}

function loadConfig(targetDir) {
  const configPath = path.join(targetDir, CONFIG_FILE);
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }
  return null;
}

// ─── Init flow ───────────────────────────────────────────────────────────────

async function runInit() {
  printBanner();

  const existing = loadConfig(process.cwd());
  if (existing) {
    console.log(c.dim(`  Found existing ${CONFIG_FILE} — answers will use your previous config as defaults.\n`));
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  try {
    // Project basics
    const dirName = path.basename(process.cwd());
    const project = await ask(rl, 'Project name:', existing?.project || dirName);
    const framework = await askChoice(rl, 'Framework:', FRAMEWORKS, existing?.framework || 'Next.js');

    // Bundle selection
    console.log(`\n  ${c.bold('Available bundles:')}`);
    const bundles = await askMulti(rl, 'Which bundles?', BUNDLE_NAMES);

    if (!bundles.length) {
      console.log(c.dim('\n  No bundles selected. Cancelled.\n'));
      rl.close();
      return;
    }

    // Bundle-specific preferences
    const preferences = await askBundlePreferences(rl, bundles);

    rl.close();

    // Build config
    const config = {
      project,
      framework,
      bundles,
      preferences,
      initialized: new Date().toISOString().split('T')[0],
    };

    // Save config
    const configPath = saveConfig(process.cwd(), config);
    console.log(`\n  ${c.green('✓')} Config saved to ${c.bold(CONFIG_FILE)}`);

    // Install bundles
    const results = [];
    for (const name of bundles) {
      try {
        const installPath = installBundle(name, process.cwd());
        const rel = path.relative(process.cwd(), installPath);
        console.log(`  ${c.green('✓')} Installed ${c.bold(name)} → ./${rel}`);
        results.push({ name, installPath });
      } catch (err) {
        console.error(`  ${c.red('✗')} Failed to install ${name}: ${err.message}`);
      }
    }

    // Print activation prompt
    if (results.length) {
      console.log(`\n  ${c.bold('Activate with Claude:')}`);
      console.log(c.dim('  Copy the prompt below and paste it to Claude in your project:\n'));

      const bar = c.dim('  ' + '─'.repeat(60));
      console.log(bar);

      if (results.length === 1) {
        const prompt = activationPrompt(results[0].name, results[0].installPath);
        prompt.split('\n').forEach((line) => console.log(c.dim('  ') + line));
      } else {
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
          '',
          `Project: ${config.project} (${config.framework})`,
          `Config: .haqex.json`,
        ];
        lines.forEach((line) => console.log(c.dim('  ') + line));
      }

      console.log(bar);
    }

    console.log('');
  } catch (err) {
    rl.close();
    throw err;
  }
}

module.exports = { runInit, loadConfig, saveConfig, printBanner, CONFIG_FILE };
