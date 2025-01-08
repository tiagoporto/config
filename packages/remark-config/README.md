# @tiagoporto/remark-config

Shareable Config for [remark](https://github.com/remarkjs/remark).

## Installation

```bash
npm install --save-dev remark remark-cli prettier @tiagoporto/remark-config
```

## Usage

```json
// .remarkrc
{
  "plugins": ["@tiagoporto/remark-config"]
}
```

### MDX

```json
// .remarkrc
{
  "plugins": ["@tiagoporto/remark-config/mdx"]
}
```

Note: Running this settings against `md` files can return unexpected results. Example: <https://github.com/mdx-js/mdx/issues/2576>.

The workaround is to create a new `.remarkrc` file under mdx folder.

```md
.
├── packages
│   ├── .remarkrc (MDX Config)
│   ├── TODO.mdx
│   └── README.mdx
│
├── .remarkrc
└── README.md

```

In `package.json` add the following scripts:

```json
{
  "scripts": {
    "check-docs": "remark --frail . --ext md,markdown,mdx"
  }
}
```

## Lint-staged

Check staged markdown

```mjs
// .lintstagedrc.mjs
export default {
  '*.{md,markdown,mdx}': 'remark --frail',
}
```

## Editor

For [VSCode](https://code.visualstudio.com) is recommended the following extensions:

- [remark](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-remark)
