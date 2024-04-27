# @tiagoporto/remark-config

> Shareable Config for [remark](https://github.com/remarkjs/remark).

`@tiagoporto/remark-config` works integrate with [remark](https://github.com/remarkjs/remark).

```bash
npm install --save-dev remark remark-cli @tiagoporto/remark-config
```

```json
// .remarkrc
{
  "plugins": ["@tiagoporto/remark-config"]
}
```

In `package.json` add the following scripts:

```json
{
  "scripts": {
    "check-docs": "remark --frail ."
  }
}
```

## Editor

For [VSCode](https://code.visualstudio.com) is recommended the following extensions:

- [remark](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-remark)

```json
// .vscode/settings.json
{
  "[markdown]": {
    "editor.defaultFormatter": "unifiedjs.vscode-remark",
    "editor.formatOnSave": true
  }
}
```
