# @tiagoporto/prettier-config

> Shareable Config for [Prettier](https://prettier.io)

`@tiagoporto/prettier-config` work integrate with the code formatting [Prettier](https://prettier.io).

```bash
npm install --save-dev prettier @tiagoporto/eslint-config
```

```json
// .prettierrc.json
"@tiagoporto/prettier-config"
```

In `package.json` add the following scripts:

```json
{
  "scripts": {
    "check-formatting": "prettier --check --ignore-unknown \"**/*\"",
    "check-formatting:fix": "npm run check-formatting -- --write"
  }
}
```

## Editor

For [VSCode](https://code.visualstudio.com) is recommended the following extensions:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
