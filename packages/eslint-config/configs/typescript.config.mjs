// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint'

import base, { baseConfig } from './base.config.mjs'

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(base, {
  files: ['**/*.{ts,tsx,mts,cts}'],
  ...tseslint.configs.recommended[0],
  ...tseslint.configs.recommended[1],
  ...tseslint.configs.recommended[2],
  rules: {
    ...baseConfig.rules,
    ...tseslint.configs.recommended[1].rules,
    ...tseslint.configs.recommended[2].rules,
  },
  name: 'typescript/recommended',
})
