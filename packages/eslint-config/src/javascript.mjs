import js from '@eslint/js'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import jsdoc from 'eslint-plugin-jsdoc'
import noSecrets from 'eslint-plugin-no-secrets'
import unicorn from 'eslint-plugin-unicorn'
import neostandard, { plugins } from 'neostandard'

const neoConfig = neostandard({ noStyle: true, noJsx: true })

export const baseConfig = {
  plugins: {
    // import-x, n, promise
    ...neoConfig[0].plugins,
    'no-secrets': noSecrets,
    ...comments.recommended.plugins,
    ...jsdoc.configs['flat/recommended'].plugins,
    unicorn,
  },
  rules: {
    // 'node/flat/recommended-module'
    ...plugins.n.configs['flat/recommended'].rules,
    'n/no-missing-import': 'off',
    'n/no-unsupported-features/node-builtins': [
      'error',
      {
        allowExperimental: true,
      },
    ],
    ...unicorn.configs.recommended.rules,
    'unicorn/no-empty-file': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        checkFilenames: false,
        replacements: {
          params: false,
          prod: false,
          dev: false,
          i: false,
          props: false,
          pkg: false,
        },
      },
    ],
    // neostandard/base
    ...neoConfig[0].rules,
    // neostandard/modernization-since-standard-17
    ...neoConfig[1].rules,
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
    // import-x/recommended
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
    // promise/flat/recommended
    ...plugins.promise.configs['flat/recommended'].rules,
    // @eslint-community/eslint-comments/recommended
    ...comments.recommended.rules,
    // jsdoc/flat/recommended
    ...jsdoc.configs['flat/recommended'].rules,
    'no-secrets/no-secrets': [
      'error',
      { ignoreContent: ['123456789', 'ABCDEFGHI', '^https?:'] },
    ],
  },
}

export const testRules = {
  'unicorn/no-null': 'off',
}

/** @type {import('eslint').Linter.Config[]} */
export const javascriptConfig = [
  // JS files
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {},
    ...baseConfig,
  },
  {
    files: ['**/*.{test,spec}.{js,mjs,cjs}'],
    rules: {
      ...testRules,
    },
  },
]
