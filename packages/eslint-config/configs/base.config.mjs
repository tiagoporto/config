import pluginJs from '@eslint/js'
import json from '@eslint/json'
import * as mdx from 'eslint-plugin-mdx'

export const baseConfig = { ...pluginJs.configs.recommended }

/** @type {import('eslint').Linter.Config[]} */
export default [
  // lint JS files
  { files: ['**/*.{js,mjs,cjs,jsx}'], ...baseConfig },

  // lint JSON files
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json', '.vscode/*', '**/tsconfig.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },

  // lint JSONC files
  {
    files: ['**/*.jsonc', '.vscode/**/*.json', '**/tsconfig.json'],
    language: 'json/jsonc',
    ...json.configs.recommended,
  },

  // lint JSON5 files
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    ...json.configs.recommended,
  },
  // lint MARKDOWN and code block files
  {
    ...mdx.flat,
    files: ['**/*.md'],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
    rules: {
      ...mdx.flat.rules,
      'mdx/remark': 'off',
    },
  },
  {
    ...mdx.flat,
    files: ['**/*.mdx'],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
]
