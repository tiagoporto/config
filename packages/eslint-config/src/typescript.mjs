import { importX } from 'eslint-plugin-import-x'
import doc from 'eslint-plugin-jsdoc'
import process from 'node:process'
import tseslint from 'typescript-eslint'

import { baseConfig, testRules } from './javascript.mjs'

const currentPath = process.cwd()

export const tsConfig = {
  languageOptions: {
    ...tseslint.configs.base.languageOptions,
  },
  plugins: {
    ...baseConfig.plugins,
    ...tseslint.configs.base.plugins,
    ...importX.configs['flat/typescript'].plugins,
  },
  settings: {
    ...baseConfig.settings,
    ...importX.configs['flat/typescript'].settings,
  },
  rules: {
    ...baseConfig.rules,
    ...tseslint.configs.eslintRecommended.rules,
    ...tseslint.configs.recommended[2].rules,
    ...tseslint.configs.stylistic[2].rules,
    ...importX.configs['flat/typescript'].rules,
    ...doc.configs['flat/recommended-typescript'].rules,
  },
}

/** @type {import('eslint').Linter.Config[]} */
export const typescriptConfig = [
  {
    name: 'tp/typescript',
    files: ['**/*.{ts,mts,cts}'],
    ...tsConfig,
    rules: {
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

/** @type {import('eslint').Linter.Config[]} */
export const typescriptTypeCheckedConfig = [
  {
    name: 'tp/typescript-type-checked',
    files: ['**/*.{ts,mts,cts}'],
    ...tsConfig,
    languageOptions: {
      ...tsConfig.languageOptions,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: currentPath,
      },
    },
    rules: {
      ...tsConfig.rules,
      ...tseslint.configs.recommendedTypeCheckedOnly[2].rules,
      ...tseslint.configs.stylisticTypeCheckedOnly[2].rules,
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
