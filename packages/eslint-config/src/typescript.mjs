// eslint-disable-next-line import-x/no-named-as-default
import jsdoc from 'eslint-plugin-jsdoc'
import neostandard, { plugins } from 'neostandard'
import childProcess from 'node:child_process'

import { baseConfig, testRules } from './javascript.mjs'

const neoConfig = neostandard({ noStyle: true, ts: true, noJsx: true })
const recommended = plugins['typescript-eslint'].configs.recommended
const stylistic = plugins['typescript-eslint'].configs.stylistic

const gitRoot = childProcess
  .execSync('git rev-parse --show-toplevel')
  .toString()
  .trim()

export const tsConfig = {
  languageOptions: {
    // typescript-eslint/base
    ...recommended[0].languageOptions,
  },
  plugins: {
    ...baseConfig.plugins,
    // typescript-eslint
    ...recommended[0].plugins,
  },
  settings: {
    ...plugins['import-x'].flatConfigs.typescript.settings,
  },
  rules: {
    ...baseConfig.rules,
    // typescript-eslint/eslint-recommended
    ...recommended[1].rules,
    // neostandard/ts
    ...neoConfig[2].rules,
    ...plugins['import-x'].flatConfigs.typescript.rules,
    // jsdoc/flat/recommended-typescript
    ...jsdoc.configs['flat/recommended-typescript'].rules,
  },
}

/** @type {import('eslint').Linter.Config[]} */
export const typescriptConfig = [
  {
    name: 'tp/typescript',
    files: ['**/*.{ts,mts,cts}'],
    ...tsConfig,
    rules: {
      // typescript-eslint/recommended
      ...recommended[2].rules,
      // typescript-eslint/stylistic
      ...stylistic[2].rules,
      ...tsConfig.rules,
    },
  },
  {
    name: 'tp/typescript-test',
    files: ['**/*.{test,spec}.{ts,mts,cts}'],
    rules: {
      ...testRules,
    },
  },
]

// Type Checked

const recommendedTypeChecked =
  plugins['typescript-eslint'].configs.recommendedTypeChecked
const stylisticTypeChecked =
  plugins['typescript-eslint'].configs.stylisticTypeChecked

/** @type {import('eslint').Linter.Config[]} */
export const typescriptTypeCheckedConfig = [
  {
    name: 'tp/typescript',
    files: ['**/*.{ts,mts,cts}'],
    ...tsConfig,
    languageOptions: {
      ...tsConfig.languageOptions,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: gitRoot,
      },
    },
    rules: {
      ...tsConfig.rules,
      // typescript-eslint/recommended-type-checked
      ...recommendedTypeChecked[2].rules,
      // typescript-eslint/stylistic-type-checked
      ...stylisticTypeChecked[2].rules,
    },
  },
  {
    name: 'tp/typescript-test',
    files: ['**/*.{test,spec}.{ts,mts,cts}'],
    rules: {
      ...testRules,
    },
  },
]
