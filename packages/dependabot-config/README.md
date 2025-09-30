# @tiagoporto/dependabot-config

[Dependabot](https://github.com/dependabot/dependabot-core) config.

## Installation

```bash
npm install --save-dev @tiagoporto/dependabot-config
```

## Usage

```jsonc
// package.json
{
  "scripts": {
    "postinstall": "$CI = true || dependabot-config"
  }
}
```

After npm install an `.github/dependabot.yml` file will be added/updated.

## Github

Add `dependencies` label in repository

## License

@tiagoporto/dependabot-config © 2025 by Tiago Porto is licensed under [MIT License](LICENSE).
