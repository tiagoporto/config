import jsdoc from 'eslint-plugin-jsdoc'
import neostandard, { plugins } from 'neostandard'

import { baseConfig } from './javascript.mjs'

const neoConfig = neostandard({ noStyle: true, ts: true })

/** @type {import('eslint').Linter.Config[]} */
export const typescriptConfig = plugins['typescript-eslint'].config({
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ...plugins['typescript-eslint'].configs.recommended[0].languageOptions,
  },
  plugins: {
    ...baseConfig.plugins,
    ...plugins['typescript-eslint'].configs.recommended[0].plugins,
  },
  settings: {
    ...plugins['import-x'].flatConfigs.typescript.settings,
  },
  rules: {
    ...baseConfig.rules,
    ...plugins['typescript-eslint'].configs.recommended[1].rules,
    ...plugins['typescript-eslint'].configs.recommended[2].rules,
    ...neoConfig[4].rules,
    ...plugins['import-x'].flatConfigs.typescript.rules,
    ...jsdoc.configs['flat/recommended-typescript'].rules,
  },
})
