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
  {
    ignores: ['package-lock.json'],
  },
  {
    name: 'tp/json',
    files: ['**/*.json'],
    language: 'json/json',
    ...config,
  },
  {
    name: 'tp/jsonc',
    files: ['**/*.jsonc', '**/tsconfig.json', '.vscode/**/*.json'],
    language: 'json/jsonc',
    ...config,
  },
  {
    name: 'tp/json5',
    files: ['**/*.json5'],
    language: 'json/json5',
    ...config,
  },
]
