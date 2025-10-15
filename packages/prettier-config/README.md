# @tiagoporto/prettier-config

Shareable Config for [Prettier](https://prettier.io)

## Installation

```bash
npm install --save-dev prettier @tiagoporto/prettier-config
```

## Usage

```mjs
// .prettierrc.mjs
import tpConfig from '@tiagoporto/prettier-config'

export default tpConfig
```

In `package.json` add the following scripts:

```json
{
  "scripts": {
    "format:check": "prettier --check --ignore-unknown \"**/*\"",
    "format": "npm run format:check -- --write"
  }
}
```

## Lint-staged

Check staged files

```mjs
// .lintstagedrc.mjs
export default {
  '*': 'prettier --check --ignore-unknown --write'
}
```

## Editor

For [VSCode](https://code.visualstudio.com) is recommended the following extensions:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```jsonc
// .vscode/settings.json
{
  "editor.formatOnSave": true
}
```

## License

@tiagoporto/prettier-config © 2024 by Tiago Porto is licensed under [MIT License](LICENSE).
