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
    ignores: ['package-lock.json'],
    language: 'json/json',
    ...config,
  },

  // .tsconfig.json and .vscode files
  {
    files: ['**/tsconfig.json', '.vscode/**/*.json'],
    language: 'json/jsonc',
    plugins: { ...config.plugins },
    rules: { ...config.rules, 'no-secrets/no-secrets': 'off' },
  },

  // JSONC files
  {
    files: ['**/*.jsonc'],
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
