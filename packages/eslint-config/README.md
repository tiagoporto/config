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
  {languageOptions: { globals: globals.browser }},
];
```

### Node

```mjs
// eslint.config.mjs
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.node }},
];
```

### default config

Lint `js`,`mjs`,`cjs`,`ts`,`jsx` and `tsx` files

```mjs
// eslint.config.mjs
import tpConfig from '@tiagoporto/eslint-config'


/** @type {import('eslint').Linter.Config[]} */
export default [
    ...tpConfig.configs.default,
];
```

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

Check staged files formatting

```mjs
// .lintstagedrc.mjs
export default {
    '*.{md,mdx}': 'eslint --ext md,mdx --max-warnings 0',
  '*.{js,mjs,cjs,jsx,ts,tsx}': 'eslint --max-warnings 0',
}
```

## Editor

For [VSCode](https://code.visualstudio.com) is recommended the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

```json
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
}
```
