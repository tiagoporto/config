# @tiagoporto/ts-config

In `package.json` add the following scripts:

```json
{
  "scripts": {
    "typecheck": "tsc"
  }
}
```

## Lint-staged

Check TypeScript files

```mjs
// .lintstagedrc.mjs
export default {
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json'
}
```

## Editor

Set the TypeScript SDK to workspace

```jsonc
// .vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```
