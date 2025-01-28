# @tiagoporto/eslint-config

Shareable Config for [ESlint](https://eslint.org).

## Installation

```bash
npm install --save-dev eslint globals @tiagoporto/eslint-config
```

## Usage

### Browser

```mjs
// eslint.config.mjs
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser }
  }
]
```

### Node

```mjs
// eslint.config.mjs
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [{ languageOptions: { globals: globals.node } }]
```

### config

```mjs
// eslint.config.mjs
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [...tpConfig.configs.flat]
```

Linted files

Javascript - `js`,`mjs`,`cjs`, `jsx`, `json`
Json - `json`, `jsonc` and `json5`
Markdown - `md`, `markdown` and `mdx`
Typescript - `ts`, `mts`, `cts` and `tsx`

In `package.json` add the following scripts:

```json
{
  "scripts": {
    "lint": "eslint --max-warnings 0",
    "lint:fix": "npm run lint -- --write"
  }
}
```

## Lint-staged

Check staged files

```mjs
// .lintstagedrc.mjs
export default {
  '*.{md,markdown,mdx}': 'eslint --max-warnings 0',
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': 'eslint --max-warnings 0'
}
```

## Editor

For [VSCode](https://code.visualstudio.com) is recommended the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

```jsonc
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.formatOnSave": true
}
```
