import base, { baseConfig } from './base.config.mjs'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...base,
  {
    files: ['**/*.{ts,tsx}'],
    ...baseConfig,
    ...tseslint.configs.recommended,
  },
]
