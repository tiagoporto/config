import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import neostandard, { plugins } from 'neostandard'

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
      ...plugins.react.configs.flat.all.rules,
      'react/jsx-indent': ['warn', 2],
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.tsx'] },
      ],
      ...plugins.react.configs.flat['jsx-runtime'].rules,
      //neostandard/jsx
      ...neoConfig[3].rules,
      // jsx-a11y/recommended
      ...jsxA11y.flatConfigs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
    },
  },
]
