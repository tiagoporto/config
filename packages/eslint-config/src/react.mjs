import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import neostandard, { plugins } from 'neostandard'

import { testRules } from './javascript.mjs'
import { tsConfig } from './typescript.mjs'

const neoConfig = neostandard({ noStyle: true, ts: true })

/** @type {import('eslint').Linter.Config[]} */
export const reactConfig = [
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      ...tsConfig.languageOptions,
      ...neoConfig[3].languageOptions,
    },
    plugins: {
      ...tsConfig.plugins,
      // react
      ...neoConfig[3].plugins,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
    },
    settings: {
      ...tsConfig.settings,
      ...neoConfig[3].settings,
    },
    rules: {
      ...tsConfig.rules,
      ...plugins.react.configs.flat.recommended.rules,
      ...plugins.react.configs.flat['jsx-runtime'].rules,
      //neostandard/jsx
      ...neoConfig[3].rules,
      // jsx-a11y/recommended
      ...jsxA11y.flatConfigs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
        },
      ],
    },
  },
  {
    files: ['**/*.{test,spec}.{jsx,tsx}'],
    rules: {
      ...testRules,
    },
  },
]
