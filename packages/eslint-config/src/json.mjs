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
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    language: 'json/json',
    ...config,
  },

  // package.json
  {
    files: ['package.json'],
    language: 'json/json',
    plugins: { ...config.plugins },
    rules: { ...config.rules },
  },

  // .tsconfig.json and .vscode files
  {
    files: ['**/tsconfig.json', '.vscode/**/*.json'],
    language: 'json/jsonc',
    plugins: { ...config.plugins },
    rules: { ...config.rules },
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
