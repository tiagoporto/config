import json from '@eslint/json'

/** @type {import('eslint').Linter.Config[]} */
export const jsonConfig = [
  // JSON files
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json', '.vscode/*', '**/tsconfig.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },

  // JSONC files
  {
    files: ['**/*.jsonc', '.vscode/**/*.json', '**/tsconfig.json'],
    language: 'json/jsonc',
    ...json.configs.recommended,
  },

  // JSON5 files
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    ...json.configs.recommended,
  },
]
