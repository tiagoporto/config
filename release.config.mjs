export const config = {
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
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            type: 'docs',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'minor',
          },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
}
