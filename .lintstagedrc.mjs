export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{md,markdown,mdx}': ['remark --frail', 'eslint --max-warnings 0'],
}
