// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint'

import base, { baseConfig } from './base.config.mjs'

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(base, {
  languageOptions: {
    ...baseConfig.languageOptions,
    ...tseslint.configs.recommended[0].languageOptions,
  },
  plugins: {
    ...baseConfig.plugins,
    ...tseslint.configs.recommended[0].plugins,
  },
  files: ['**/*.{ts,tsx,mts,cts}'],
  rules: {
    ...baseConfig.rules,
    ...tseslint.configs.recommended[1].rules,
    ...tseslint.configs.recommended[2].rules,
  },
})
