import eslintHtml from '@html-eslint/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export const htmlConfig = [
  {
    name: 'tp/html',
    files: ['**/*.html'],
    ...eslintHtml.configs['flat/recommended'],
    rules: {
      ...eslintHtml.configs['flat/recommended'].rules,
      '@html-eslint/no-duplicate-class': 'error',
      '@html-eslint/no-duplicate-in-head': 'error',
      '@html-eslint/no-invalid-entity': 'error',
      '@html-eslint/no-nested-interactive': 'error',
      '@html-eslint/require-button-type': 'error',
      '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
      '@html-eslint/require-meta-charset': 'error',
      '@html-eslint/use-baseline': [
        'error',
        {
          available: 2021,
        },
      ],
      '@html-eslint/require-meta-description': 'warn',
      '@html-eslint/require-open-graph-protocol': 'warn',
      '@html-eslint/no-abstract-roles': 'error',
      '@html-eslint/no-accesskey-attrs': 'error',
      '@html-eslint/no-aria-hidden-on-focusable': 'error',
      '@html-eslint/no-empty-headings': 'error',
      '@html-eslint/no-heading-inside-button': 'error',
      '@html-eslint/no-invalid-role': 'error',
      '@html-eslint/no-non-scalable-viewport': 'error',
      '@html-eslint/no-skip-heading-levels': 'error',
      '@html-eslint/require-form-method': 'error',
      '@html-eslint/require-meta-viewport': 'error',
      '@html-eslint/attrs-newline': 'off',
      '@html-eslint/id-naming-convention': ['warn', 'kebab-case'],
      '@html-eslint/lowercase': 'error',
      '@html-eslint/no-extra-spacing-attrs': 'off',
      '@html-eslint/indent': ['error', 2],
    },
  },
  {
    name: 'tp/html-in-js-ts',
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      ...eslintHtml.configs['flat/recommended'].plugins,
    },
    rules: {
      ...eslintHtml.configs['flat/recommended'].rules,
    },
  },
]
