import eslintReact from '@eslint-react/eslint-plugin'
import { importX } from 'eslint-plugin-import-x'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

import { testRules } from './javascript.mjs'
import { tsConfig } from './typescript.mjs'

export const react = {
  settings: {
    ...tsConfig.settings,
    ...importX.flatConfigs.react.settings,
  },
  languageOptions: {
    ...tsConfig.languageOptions,
    ...importX.flatConfigs.react.languageOptions,
  },
  plugins: {
    ...tsConfig.plugins,
    ...importX.flatConfigs.react.plugins,
    ...eslintReact.configs['recommended-typescript'].plugins,
    'react-hooks': reactHooks,
  },
  rules: {
    ...tsConfig.rules,
    ...reactHooks.configs.recommended.rules,
    'unicorn/filename-case': [
      'error',
      {
        case: 'pascalCase',
      },
    ],
  },
}

/** @type {import('eslint').Linter.Config[]} */
export const reactConfig = [
  {
    name: 'tp/react',
    files: ['**/*.{jsx,tsx}'],
    ...react,
    rules: {
      ...react.rules,
      ...eslintReact.configs['recommended-typescript'].rules,
    },
  },
  {
    name: 'tp/react-test',
    files: ['**/*.{test,spec}.{jsx,tsx}'],
    rules: {
      ...testRules,
    },
  },
]

/** @type {import('eslint').Linter.Config[]} */
export const reactConfigTypeChecked = [
  {
    name: 'tp/react',
    files: ['**/*.{jsx,tsx}'],
    ...react,
    rules: {
      ...react.rules,
      ...tseslint.configs.recommendedTypeCheckedOnly[2].rules,
      ...tseslint.configs.stylisticTypeCheckedOnly[2].rules,
      ...eslintReact.configs['recommended-type-checked'].rules,
    },
  },
  {
    name: 'tp/react-test',
    files: ['**/*.{test,spec}.{jsx,tsx}'],
    rules: {
      ...testRules,
    },
  },
]
