# @tiagoporto/prettier-config

Shareable Config for [Prettier](https://prettier.io)

## Installation

```bash
npm install --save-dev prettier @tiagoporto/prettier-config
```

## Usage

```json
// .prettierrc
"@tiagoporto/prettier-config"
```

In `package.json` add the following scripts:

```json
{
  "scripts": {
    "formatting:check": "prettier --check --ignore-unknown \"**/*\"",
    "formatting": "npm run formatting:check -- --write"
  }
}
```

## Lint-staged

Check staged files formatting

```mjs
// .lintstagedrc.mjs
export default {
  '*': 'prettier --check --ignore-unknown --write',
}
```

## Editor

For [VSCode](https://code.visualstudio.com) is recommended the following extensions:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
