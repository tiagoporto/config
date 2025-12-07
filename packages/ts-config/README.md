# @tiagoporto/ts-config

In `package.json` add the following scripts:

```json
{
  "scripts": {
    "typecheck": "tsc --project tsconfig.json"
  }
}
```

## TSConfig

Base TypeScript configuration

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "bundler",
    "downlevelIteration": true,
    "noEmit": true,
    "isolatedModules": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Lefthook

Check TypeScript files

```yml
# .lefthook.yml
pre-commit:
  parallel: true
  commands:
    typecheck:
      glob: '*.{ts,tsx}'
      # Whole project type check for global errors
      run: pnpm exec tsc --project tsconfig.json
```

## Editor

Set the TypeScript SDK to workspace

```jsonc
// .vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## License

@tiagoporto/ts-config © 2025 by Tiago Porto is licensed under [MIT License](LICENSE).
