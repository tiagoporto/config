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

## Lefthook

Check staged files

```yml
# .lefthook.yml
pre-commit:
  parallel: true
  commands:
    format:
      glob: '*'
      run: pnpm exec prettier  --write --ignore-unknown {staged_files}
      stage_fixed: true
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
