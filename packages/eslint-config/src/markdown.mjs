import * as mdx from 'eslint-plugin-mdx'

/** @type {import('eslint').Linter.Config[]} */
export const markdownConfig = [
  // MARKDOWN files
  {
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

  // MDX files and code blocks
  {
    ...mdx.flat,
    files: ['**/*.mdx'],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },

  // Markdown and MDX code blocks
  {
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
    },
  },
]
