import eslintPluginImportX from 'eslint-plugin-import-x'
import { plugins } from 'neostandard'

import base, { baseConfig } from './base.config.mjs'

/** @type {import('eslint').Linter.Config[]} */
export default plugins['typescript-eslint'].config(
  base,
  {
    languageOptions: {
      ...baseConfig.languageOptions,
      ...plugins['typescript-eslint'].configs.recommended[0].languageOptions,
    },
    plugins: {
      ...baseConfig.plugins,
      ...plugins['typescript-eslint'].configs.recommended[0].plugins,
    },
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      ...baseConfig.rules,
      ...plugins['typescript-eslint'].configs.recommended[1].rules,
      ...plugins['typescript-eslint'].configs.recommended[2].rules,
    },
  },
  eslintPluginImportX.flatConfigs.typescript,
)
