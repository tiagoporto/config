import js from '@eslint/js'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import jsdoc from 'eslint-plugin-jsdoc'
import noSecrets from 'eslint-plugin-no-secrets'
import neostandard, { plugins } from 'neostandard'

const neoConfig = neostandard({ noStyle: true })

export const baseConfig = {
  plugins: {
    // import-x, n, promise
    ...neoConfig[1].plugins,
    'no-secrets': noSecrets,
    ...comments.recommended.plugins,
    ...jsdoc.configs['flat/recommended'].plugins,
  },
  rules: {
    ...neoConfig[1].rules,
    ...neoConfig[2].rules,
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
    'no-secrets/no-secrets': [
      'error',
      { ignoreContent: ['123456789', 'ABCDEFGHI', '^https?:'] },
    ],
  },
}

/** @type {import('eslint').Linter.Config[]} */
export const javascriptConfig = [
  // JS files
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {},
    ...baseConfig,
  },
]
