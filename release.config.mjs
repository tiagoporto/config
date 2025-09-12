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

if (process.env.BRANCH === 'main') {
  config.plugins.push('@semantic-release/github')
}

export default config
