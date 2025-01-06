export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.md': 'remark --frail',
}
