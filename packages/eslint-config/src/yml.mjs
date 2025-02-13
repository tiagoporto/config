import eslintPluginYml from 'eslint-plugin-yml'

const config = {
  plugins: {
    ...eslintPluginYml.configs['flat/standard'][0].plugins,
  },
  languageOptions: {
    ...eslintPluginYml.configs['flat/standard'][1].languageOptions,
  },
  rules: {
    ...eslintPluginYml.configs['flat/standard'][1].rules,
    ...eslintPluginYml.configs['flat/standard'][2].rules,
    ...eslintPluginYml.configs['flat/prettier'][2].rules,
    'yml/no-empty-mapping-value': 'off',
    'yml/file-extension': ['warn', { extension: 'yml', caseSensitive: true }],
  },
}

/** @type {import('eslint').Linter.Config[]} */
export const ymlConfig = [
  // YML and YAML files
  {
    files: ['**/*.{yml,YML}', '**/*.{yaml,YAML}'],
    ...config,
  },
  {
    files: ['pnpm-*.{yaml,YAML}'],
    ...config,
    rules: {
      ...config.rules,
      'yml/file-extension': 'off',
    },
  },
]
