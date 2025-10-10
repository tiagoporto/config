import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { importX } from 'eslint-plugin-import-x'
import doc from 'eslint-plugin-jsdoc'
import tseslint from 'typescript-eslint'

import { baseConfig, testRules } from './javascript.mjs'

export const tsConfig = {
  languageOptions: {
    ...tseslint.configs.base.languageOptions,
    ...baseConfig.languageOptions,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: {
    ...baseConfig.plugins,
    ...tseslint.configs.base.plugins,
    ...importX.flatConfigs.typescript.plugins,
  },
  settings: {
    ...baseConfig.settings,
    ...importX.flatConfigs.typescript.settings,
    'import-x/resolver-next': [
      createTypeScriptImportResolver({
        alwaysTryTypes: true,
      }),
    ],
  },
  rules: {
    ...baseConfig.rules,
    ...tseslint.configs.eslintRecommended.rules,
    ...tseslint.configs.recommended[2].rules,
    ...tseslint.configs.stylistic[2].rules,
    ...importX.flatConfigs.typescript.rules,
    ...doc.configs['flat/recommended-typescript'].rules,
  },
}

/** @type {import('eslint').Linter.Config[]} */
export const typescriptConfig = [
  {
    name: 'tp/typescript',
    files: ['**/*.{ts,tsx}'],
    ...tsConfig,
    rules: {
      ...tsConfig.rules,
    },
  },
  {
    name: 'tp/typescript-test',
    files: ['**/*.{test,spec}.{ts,tsx}'],
    rules: {
      ...testRules,
    },
  },
]

/** @type {import('eslint').Linter.Config[]} */
export const typescriptTypeCheckedConfig = [
  {
    name: 'tp/typescript-type-checked',
    files: ['**/*.{ts,tsx}'],
    ...tsConfig,
    rules: {
      ...tsConfig.rules,
      ...tseslint.configs.recommendedTypeCheckedOnly[2].rules,
      ...tseslint.configs.stylisticTypeCheckedOnly[2].rules,
    },
  },
  {
    name: 'tp/typescript-test',
    files: ['**/*.{test,spec}.{ts,tsx}'],
    rules: {
      ...testRules,
    },
  },
]
