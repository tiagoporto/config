import json from '@eslint/json'

const config = {
  plugins: {
    ...json.configs.recommended.plugins,
  },
  rules: {
    ...json.configs.recommended.rules,
  },
}

/** @type {import('eslint').Linter.Config[]} */
export const jsonConfig = [
  // JSON files
  {
    name: 'tp/json',
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    language: 'json/json',
    ...config,
  },
  // JSONC files
  {
    name: 'tp/jsonc',
    files: ['**/*.jsonc', '**/tsconfig.json', '.vscode/**/*.json'],
    language: 'json/jsonc',
    ...config,
  },

  // JSON5 files
  {
    name: 'tp/json5',
    files: ['**/*.json5'],
    language: 'json/json5',
    ...config,
  },
]
