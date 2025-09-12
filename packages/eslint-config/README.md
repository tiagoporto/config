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

### configs

#### base

Linted files

- **HTML** - `html` and code into `script` tag
- **YAML** - `yml`, and `yaml`
- **Json** - `json`, `jsonc` and `json5`
- **Markdown** - `md`, `markdown`, `mdx` and `code blocks`
- **Javascript** - `js`,`mjs` and `cjs`
- **Typescript** - `ts`,`mts` and `cts`

```mjs
// eslint.config.mjs
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [...tpConfig.configs.base]
```

#### react

Linted files

All from base config plus **JavaScript XML** - `jsx` and `tsx`

```mjs
// eslint.config.mjs
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [...tpConfig.configs.react]
```

In `package.json` add the following scripts:

```json
{
  "scripts": {
    "lint": "eslint --max-warnings 0",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

## Lint-staged

Check staged files

```mjs
// .lintstagedrc.mjs
export default {
  '*.{md,markdown,mdx}': [
    // remark,
    'eslint --max-warnings 0 --no-warn-ignored'
  ],
  '*.{html,yml,json,jsonc,json5}': 'eslint --max-warnings 0 --no-warn-ignored',
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': [
    'eslint --max-warnings 0 --no-warn-ignored'
    // unit test
  ]
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
  "editor.formatOnSave": true,
  "eslint.validate": ["yaml", "github-actions-workflow"]
}
```

## License

@tiagoporto/eslint-config © 2025 by Tiago Porto is licensed under [MIT License](LICENSE).
