import globals from 'globals'

import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  ...tpConfig.configs.typeScript,
]
