export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{md,markdown,mdx}': ['remark --frail', 'eslint --max-warnings 0'],
  '*.{html,yml,json,jsonc,json5}': 'eslint --max-warnings 0',
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': [
    'eslint --max-warnings 0',
    // unit test
  ],
}
