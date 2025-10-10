import js from '@eslint/js'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import stylistic from '@stylistic/eslint-plugin'
import html from 'eslint-plugin-html'
import { importX } from 'eslint-plugin-import-x'
import jsdoc from 'eslint-plugin-jsdoc'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import nodePlugin from 'eslint-plugin-n'
import promise from 'eslint-plugin-promise'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export const baseConfig = {
  settings: {
    'import-x/extensions': [
      '.js',
      '.mjs',
      '.cjs',
      '.jsx',
    ],
  },
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
  plugins: {
    ...importX.flatConfigs.recommended.plugins,
    ...nodePlugin.configs['flat/recommended'].plugins,
    ...promise.configs['flat/recommended'].plugins,
    ...comments.recommended.plugins,
    ...jsdoc.configs['flat/recommended'].plugins,
    ...stylistic.configs.recommended.plugins,
    ...jsxA11y.flatConfigs.recommended.plugins,
    unicorn,
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
    ...importX.flatConfigs.recommended.rules,
    'import-x/no-named-as-default-member': 'off',
    'import-x/no-named-as-default': 'off',
    'import-x/no-unresolved': 'off',
    'import-x/order': [
      'warn',
      {
        'groups': [
          ['builtin', 'external'],
          'internal',
          'unknown',
          ['parent', 'sibling', 'index'],
          'object',
        ],
        'pathGroups': [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        'distinctGroup': false,
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
        // named: true,
        'warnOnUnassignedImports': true,
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    ...promise.configs['flat/recommended'].rules,

    ...unicorn.configs.recommended.rules,
    'unicorn/prefer-top-level-await': 'off',
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

    ...comments.recommended.rules,
    ...jsdoc.configs['flat/recommended'].rules,
    'jsdoc/require-jsdoc': ['off'],

    ...stylistic.configs.recommended.rules,
    ...jsxA11y.flatConfigs.recommended.rules,
  },
}

export const testRules = {
  'unicorn/no-null': 'off',
}

/** @type {import('eslint').Linter.Config[]} */
export const javascriptConfig = [
  {
    name: 'tp/javascript',
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ...baseConfig.languageOptions,
      globals: globals.browser,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      ...baseConfig.plugins,
    },
    rules: {
      ...baseConfig.rules,
    },
  },
  {
    name: 'tp/js-in-html',
    files: ['**/*.html'],
    plugins: {
      html,
      ...baseConfig.plugins,
    },
    rules: {
      ...baseConfig.rules,
      '@stylistic/spaced-comment': 'off',
    },
  },
  {
    name: 'tp/node-module',
    files: ['**/*.{mjs}'],
    plugins: {
      ...nodePlugin.configs['flat/recommended-module'].plugins,
    },
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    rules: {
      ...nodePlugin.configs['flat/recommended-module'].rules,
    },
  },
  {
    name: 'tp/node-commonjs',
    files: ['**/*.{cjs}'],
    plugins: {
      ...nodePlugin.configs['flat/recommended-script'].plugins,
    },
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
      ecmaVersion: 'latest',
    },
    rules: {
      ...nodePlugin.configs['flat/recommended-script'].rules,
    },
  },
  {
    name: 'tp/javascript-test',
    files: ['**/*.{test,spec}.{js,mjs,cjs,jsx}'],
    rules: {
      ...testRules,
    },
  },
]
