# @tiagoporto/editor-config

[EditorConfig](https://editorconfig.org) settings.

## Installation

```bash
npm install --save-dev @tiagoporto/editor-config
```

## Usage

```jsonc
// package.json
{
  "scripts": {
    "postinstall": "$CI = true || editor-config"
  }
}
```

> After npm install an `.editorconfig` file will be added/updated.

## Editor

For [VSCode](https://code.visualstudio.com) is recommended the following extensions:

- [editorconfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)

## License

@tiagoporto/editor-config © 2025 by Tiago Porto is licensed under [MIT License](LICENSE).
