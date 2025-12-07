# @tiagoporto/remark-config

Shareable Config for [remark](https://github.com/remarkjs/remark).

## Installation

```bash
npm install --save-dev remark remark-cli @tiagoporto/remark-config
```

## Usage

```jsonc
// .remarkrc
{
  "plugins": ["@tiagoporto/remark-config"]
}
```

### MDX

```jsonc
// .remarkrc
{
  "plugins": ["@tiagoporto/remark-config/mdx"]
}
```

Note: Running this settings against `md` files can return unexpected results. Example: <https://github.com/mdx-js/mdx/issues/2576>.

The workaround is to create a new `.remarkrc` file under mdx folder.

<!-- prettier-ignore -->
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

## Lefthook

Check staged markdown

```yml
# .lefthook.yml
pre-commit:
  parallel: true
  commands:
    doc-lint:
      glob: '*.{md,markdown,mdx}'
      run: pnpm exec remark --frail {staged_files}
```

## Editor

For [VSCode](https://code.visualstudio.com) is recommended the following extensions:

- [remark](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-remark)
- [mdx](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

## License

@tiagoporto/remark-config © 2024 by Tiago Porto is licensed under [MIT License](LICENSE).
