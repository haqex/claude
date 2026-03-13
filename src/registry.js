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
  core: {
    name: 'core',
    description: 'Pipeline orchestration — run-pipeline and approve-proposal',
    skills: ['run-pipeline', 'approve-proposal'],
    example: 'run-pipeline <pipeline-name> [key=value ...]',
  },
};

module.exports = BUNDLES;
