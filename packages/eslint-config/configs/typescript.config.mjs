import base, { baseConfig } from './base.config.mjs'
import tseslint from 'typescript-eslint'

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
