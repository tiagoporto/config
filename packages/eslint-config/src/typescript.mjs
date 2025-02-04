import jsdoc from 'eslint-plugin-jsdoc'
import neostandard, { plugins } from 'neostandard'

import { baseConfig } from './javascript.mjs'

const neoConfig = neostandard({ noStyle: true, ts: true, noJsx: true })

export const tsConfig = {
  languageOptions: {
    // typescript-eslint/base
    ...plugins['typescript-eslint'].configs.recommended[0].languageOptions,
  },
  plugins: {
    ...baseConfig.plugins,
    // typescript-eslint/base
    ...plugins['typescript-eslint'].configs.recommended[0].plugins,
  },
  settings: {
    ...plugins['import-x'].flatConfigs.typescript.settings,
  },
  rules: {
    ...baseConfig.rules,
    'n/no-unpublished-import': 'off',
    // typescript-eslint/eslint-recommended
    ...plugins['typescript-eslint'].configs.recommended[1].rules,
    // typescript-eslint/recommended
    ...plugins['typescript-eslint'].configs.recommended[2].rules,
    // neostandard/ts
    ...neoConfig[2].rules,
    ...plugins['import-x'].flatConfigs.typescript.rules,
    // jsdoc/flat/recommended-typescript
    ...jsdoc.configs['flat/recommended-typescript'].rules,
  },
}

/** @type {import('eslint').Linter.Config[]} */
export const typescriptConfig = plugins['typescript-eslint'].config({
  files: ['**/*.{ts,mts,cts}'],
  ...tsConfig,
})
