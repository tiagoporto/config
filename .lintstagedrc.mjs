export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{md,markdown,mdx}': [
    'remark --frail',
    'eslint --max-warnings 0 --no-warn-ignored',
  ],
  '*.{html,yml,json,jsonc,json5}': 'eslint --max-warnings 0 --no-warn-ignored',
  '*.{js,mjs,cjs,jsx,ts,tsx}': [
    'eslint --max-warnings 0 --no-warn-ignored',
    // unit test
  ],
}
