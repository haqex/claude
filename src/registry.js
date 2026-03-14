const BUNDLES = {
  frontend: {
    name: 'frontend',
    description: 'Production frontend design — distinctive UI, accessibility, anti-AI-slop',
    skills: ['run-pipeline', 'impeccable-design', 'audit', 'polish', 'normalize', 'critique'],
    pipeline: 'frontend-build',
    example: 'run-pipeline frontend-build target="a pricing page"',
  },
  learn: {
    name: 'learn',
    description: 'YouTube knowledge capture + 3D scroll animation pipeline',
    skills: ['run-pipeline', 'youtube-to-skill', 'build-scroll-animation', 'generate-scroll-frames', 'generate-transition-video'],
    pipeline: 'youtube-research',
    example: 'run-pipeline youtube-research url=https://youtube.com/watch?v=...',
  },
  sdlc: {
    name: 'sdlc',
    description: 'Full dev lifecycle — spec, plan, scaffold, build, test, audit, ship with checklists',
    skills: ['run-pipeline', 'spec', 'plan', 'scaffold', 'build', 'test', 'audit', 'ship', 'check'],
    pipeline: 'sdlc',
    example: 'run-pipeline sdlc goal="build a SaaS dashboard with auth and billing"',
  },
  uiux: {
    name: 'uiux',
    description: 'UI/UX design intelligence — 67 styles, 161 colors, 57 fonts, 99 UX rules, design system pipeline',
    skills: ['run-pipeline', 'design', 'review', 'design-system', 'brand', 'ui-styling'],
    pipeline: 'design-system',
    example: 'run-pipeline design-system product="fintech SaaS dashboard" stack="Next.js, Tailwind"',
  },
  core: {
    name: 'core',
    description: 'Pipeline orchestration — run-pipeline and approve-proposal',
    skills: ['run-pipeline', 'approve-proposal'],
    example: 'run-pipeline <pipeline-name> [key=value ...]',
  },
};

module.exports = BUNDLES;
