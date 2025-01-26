import js from '@eslint/js'
import json from '@eslint/json'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import jsdoc from 'eslint-plugin-jsdoc'
import * as mdx from 'eslint-plugin-mdx'
import noSecrets from 'eslint-plugin-no-secrets'
import { plugins } from 'neostandard'

export const baseConfig = {
  languageOptions: {},
  plugins: {
    'no-secrets': noSecrets,
    ...plugins['import-x'].flatConfigs.recommended.plugins,
    ...comments.recommended.plugins,
    ...jsdoc.configs['flat/recommended'].plugins,
    ...plugins.promise.configs['flat/recommended'].plugins,
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
    ...plugins['import-x'].flatConfigs.recommended.rules,
    'import-x/no-unresolved': 'off',
    'import-x/order': [
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
        // named: true,
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    ...plugins.promise.configs['flat/recommended'].rules,
    ...comments.recommended.rules,
    ...jsdoc.configs['flat/recommended'].rules,
    'no-secrets/no-secrets': 'error',
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
