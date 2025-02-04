import json from '@eslint/json'
import noSecrets from 'eslint-plugin-no-secrets'

const config = {
  plugins: {
    ...json.configs.recommended.plugins,
    'no-secrets': noSecrets,
  },
  rules: {
    ...json.configs.recommended.rules,
    'no-secrets/no-secrets': [
      'error',
      { ignoreContent: ['123456789', 'ABCDEFGHI', '^https?:', '=--'] },
    ],
  },
}

/** @type {import('eslint').Linter.Config[]} */
export const jsonConfig = [
  // JSON files
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json', '.vscode/*', '**/tsconfig.json'],
    language: 'json/json',
    ...config,
  },

  // JSONC files
  {
    files: ['**/*.jsonc', '.vscode/**/*.json', '**/tsconfig.json'],
    language: 'json/jsonc',
    ...config,
  },

  // JSON5 files
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    ...config,
  },
]
