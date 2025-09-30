import * as mdx from 'eslint-plugin-mdx'

/** @type {import('eslint').Linter.Config[]} */
export const markdownConfig = [
  {
    name: 'tp/markdown',
    ...mdx.flat,
    files: ['**/*.{md,markdown}'],
    languageOptions: {
      ...mdx.flat.languageOptions,
      parserOptions: {
        markdownExtensions: ['.md', '.markdown'],
      },
    },
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
    rules: {
      ...mdx.flat.rules,
      'mdx/remark': 'off',
    },
  },
  {
    name: 'tp/mdx',
    ...mdx.flat,
    files: ['**/*.mdx'],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    name: 'tp/markdown-code-blocks',
    ...mdx.flat,
    ...mdx.flatCodeBlocks,
    files: ['**/*.{md,markdown,mdx}/*'],
    rules: {
      ...mdx.flatCodeBlocks.rules,
      'mdx/remark': 'warn',
      'no-void': 'off',
      'no-console': 'off',
      'no-alert': 'off',
      'no-debugger': 'off',
      'n/no-extraneous-import': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-export-from': 'off',
      '@html-eslint/require-lang': 'off',
      '@html-eslint/require-doctype': 'off',
      '@html-eslint/require-title': 'off',
      '@html-eslint/require-meta-description': 'off',
      '@html-eslint/require-open-graph-protocol': 'off',
    },
  },
]
