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
# .lintstagedrc.mjs
export default {
  '*.{ts,tsx}': () => 'tsc',
}
```
