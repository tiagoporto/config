# @tiagoporto/stylelint-config

Shareable Config for [Stylelint](https://stylelint.io).

## Installation

```bash
npm install --save-dev stylelint @tiagoporto/stylelint-config
```

## Usage

```mjs
// .stylelintrc.mjs
export default {
  extends: ['@tiagoporto/stylelint-config'],
}
```

In `package.json` add the following scripts:

```json
{
  "scripts": {
    "lint:styles": "stylelint \"**/*.{css,scss}\"",
    "lint:styles:fix": "stylelint \"**/*.{css,scss}\" --fix"
  }
}
```

## Lint-staged

Check staged markdown

```mjs
// .lintstagedrc.mjs
export default {
  '*.{scss,vue}': ['stylelint --fix'],
}
```

## Editor

For [VSCode](https://code.visualstudio.com) is recommended the following extensions:

- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

```json
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "always"
  },
  "stylelint.validate": ["css", "scss"]
}
```
