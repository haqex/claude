const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function installBundle(bundleName, targetDir) {
  const bundleSrc = path.join(__dirname, '..', 'bundles', bundleName);
  const bundleDest = path.join(targetDir, 'haqex', bundleName);

  if (!fs.existsSync(bundleSrc)) {
    throw new Error(`Bundle "${bundleName}" not found`);
  }

  copyDir(bundleSrc, bundleDest);
  return bundleDest;
}

function activationPrompt(bundleName, installPath) {
  // Make path relative to cwd
  const rel = path.relative(process.cwd(), installPath);
  const relPath = rel.startsWith('.') ? rel : `./${rel}`;

  return [
    `I've added the ${bundleName} bundle to this project at \`${relPath}\`.`,
    `Read \`${relPath}/BUNDLE.md\` to load all skills and rules.`,
    `Use \`${relPath}\` as the bundle root for all skill and pipeline lookups.`,
  ].join('\n');
}

module.exports = { installBundle, activationPrompt };
