// import eslintPluginImportX from 'eslint-plugin-import-x'
import jsdoc from 'eslint-plugin-jsdoc'
import { plugins } from 'neostandard'

import { baseConfig } from './javascript.mjs'

/** @type {import('eslint').Linter.Config[]} */
export const typescriptConfig = plugins['typescript-eslint'].config(
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
      ...jsdoc.configs['flat/recommended-typescript'].rules,
      ...plugins['typescript-eslint'].configs.recommended[1].rules,
      ...plugins['typescript-eslint'].configs.recommended[2].rules,
    },
  },
  // eslintPluginImportX.flatConfigs.typescript,
)
