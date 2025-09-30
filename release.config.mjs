import { env } from 'node:process'

const config = {
  extends: 'semantic-release-monorepo',
  branches: [
    'main',
    {
      name: 'alpha',
      channel: 'alpha',
      prerelease: true,
    },
    {
      name: 'beta',
      channel: 'beta',
      prerelease: true,
    },
  ],
  preset: 'conventionalcommits',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
  ],
}

// NOTE: add BRANCH env in the workflow
console.info('env.BRANCH:', env.BRANCH)
if (env.BRANCH === 'main') {
  config.plugins.push('@semantic-release/github')
}

export default config
