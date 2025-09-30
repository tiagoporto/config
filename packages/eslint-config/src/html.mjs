import eslintHtml from '@html-eslint/eslint-plugin'
import html from 'eslint-plugin-html'

import { baseConfig } from './javascript.mjs'

/** @type {import('eslint').Linter.Config[]} */
export const htmlConfig = [
  {
    name: 'tp/js-in-html',
    files: ['**/*.html'],
    plugins: {
      html,
      ...baseConfig.plugins,
    },
    rules: {
      ...baseConfig.rules,
    },
  },
  {
    name: 'tp/html',
    ...eslintHtml.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      ...eslintHtml.configs['flat/recommended'].rules,
      '@html-eslint/indent': ['error', 2],
      '@html-eslint/require-meta-description': 'warn',
      '@html-eslint/require-open-graph-protocol': 'warn',
      '@html-eslint/id-naming-convention': ['warn', 'kebab-case'],
      '@html-eslint/require-button-type': 'error',
      '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
      '@html-eslint/no-heading-inside-button': 'error',
      '@html-eslint/no-invalid-role': 'error',
      '@html-eslint/lowercase': 'error',
      '@html-eslint/no-extra-spacing-attrs': 'off',
      '@html-eslint/attrs-newline': 'off',
      '@html-eslint/use-baseline': [
        'error',
        {
          available: 2021,
        },
      ],
    },
  },
]
