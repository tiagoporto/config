/**
 * @type {import("prettier").Config}
 */
export default {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '**/*.{md,markdown,mdx}',
      options: {
        trailingComma: 'none',
      },
    },
  ],
}
