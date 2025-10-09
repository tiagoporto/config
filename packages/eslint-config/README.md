# @tiagoporto/eslint-config

Shareable Config for [ESlint](https://eslint.org).

## Linted files

- **Javascript** - `.js`,`.mjs`, `.cjs` and `<script>`.
- **Typescript** - `.ts`.
- **JavaScript XML** - `.jsx` and `.tsx`.
- **HTML** - `.html` and html in template literal strings (necessary comment).

  ```js
  const code = /* html */ `<img class="image">`
  ```

- **YAML** - `.yml`, and `.yaml`.
- **Json** - `.json`, `.jsonc` and `.json5`.
- **Markdown** - `.md`, `.markdown`, `.mdx` and code blocks.

## Includes

- [@eslint-community/eslint-plugin-eslint-comments](https://github.com/eslint-community/eslint-plugin-eslint-comments)
- [@eslint-react/eslint-plugin](https://github.com/Rel1cx/eslint-react)
- [@eslint/js](https://eslint.org)
- [@eslint/json](https://github.com/eslint/json)
- [@html-eslint/eslint-plugin](https://github.com/yeonjuan/html-eslint)
- [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)
- [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html)
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-mdx](https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx)
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)
- [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
- [eslint-plugin-react-hooks](https://react.dev)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-yml](https://ota-meshi.github.io/eslint-plugin-yml/)
- [typescript-eslint](https://typescript-eslint.io/packages/typescript-eslint/)

## Installation

```bash
npm install --save-dev eslint @tiagoporto/eslint-config
```

## Usage

### configs

#### base

```mjs
// eslint.config.mjs
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [...tpConfig.configs.base]
```

#### base type-checked

```mjs
// eslint.config.mjs
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tpConfig.configs.baseTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  }
]
```

Requires `tsconfig.json` with `include` set.

#### react

```mjs
// eslint.config.mjs
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [...tpConfig.configs.react]
```

#### react type-checked

```mjs
// eslint.config.mjs
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tpConfig.configs.reactTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  }
]
```

#### NPM scripts

```jsonc
// package.json
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
  '*.{html,yml,yaml,json,jsonc,json5}':
    'eslint --max-warnings 0 --no-warn-ignored',
  '*.{js,mjs,cjs,jsx,ts,tsx}': [
    'eslint --max-warnings 0 --no-warn-ignored'
    // unit test
  ]
}
```

## Prettier

To avoid conflicts with Prettier, ignore the following files:

```sh
# .prettierignore
**/*.js
**/*.mjs
**/*.cjs
**/*.jsx
**/*.ts
**/*.tsx
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
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "mdx",
    "vue",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "github-actions-workflow"
  ]
}
```

## License

@tiagoporto/eslint-config © 2025 by Tiago Porto is licensed under [MIT License](LICENSE).
