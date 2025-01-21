import js from '@eslint/js'
import json from '@eslint/json'
import importPlugin from 'eslint-plugin-import'
import * as mdx from 'eslint-plugin-mdx'

export const baseConfig = {
  languageOptions: {},
  plugins: {
    ...importPlugin.flatConfigs.recommended.plugins,
  },
  rules: {
    ...js.configs.recommended.rules,
    'no-void': ['error', { allowAsStatement: true }],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-nested-ternary': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        caughtErrors: 'all',
        ignoreRestSiblings: true,
      },
    ],
    ...importPlugin.flatConfigs.recommended.rules,
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'unknown',
          ['parent', 'sibling', 'index'],
          'object',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        distinctGroup: false,

        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        named: true,
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}

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

  // MARKDOWN files
  {
    ...mdx.flat,
    files: ['**/*.{md,markdown}'],
    languageOptions: {
      ...mdx.flat.languageOptions,
      parserOptions: {
        markdownExtensions: ['.md', '.markdown'],
      },
    },
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
    ...mdx.flat,
    ...mdx.flatCodeBlocks,
    files: ['**/*.{md,markdown,mdx}/*'],
    rules: {
      ...mdx.flatCodeBlocks.rules,
      'mdx/remark': 'warn',
      'no-void': 'off',
      'no-console': 'off',
      'no-alert': 'off',
      'no-debugger': 'off',
    },
  },
]
