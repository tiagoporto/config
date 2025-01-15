import pluginJs from '@eslint/js'
import json from '@eslint/json'
import * as mdx from 'eslint-plugin-mdx'

export const baseConfig = { ...pluginJs.configs.recommended }

/** @type {import('eslint').Linter.Config[]} */
export default [
  // JS files
  { files: ['**/*.{js,mjs,cjs,jsx}'], ...baseConfig },

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

  // MARKDOWN files and code blocks
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

  // MDX files and code blocks
  {
    ...mdx.flat,
    files: ['**/*.mdx'],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },

  // Markdown and MDX code blocks
  {
    files: ['**/*.{md,mdx}/*'],
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
    },
  },
]
