import { includeIgnoreFile } from '@eslint/compat'
import childProcess from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

import { htmlConfig } from './src/html.mjs'
import { javascriptConfig } from './src/javascript.mjs'
import { jsonConfig } from './src/json.mjs'
import { markdownConfig } from './src/markdown.mjs'
import { reactConfig } from './src/react.mjs'
import { typescriptConfig } from './src/typescript.mjs'
import { ymlConfig } from './src/yml.mjs'

const processPath = childProcess
  .execSync('git rev-parse --show-toplevel')
  .toString()
  .trim()

const gitignorePath = path.resolve(processPath, '.gitignore')
const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name, version } = JSON.parse(jsonData)

export default {
  meta: {
    name,
    version,
  },
  configs: {
    base: [
      includeIgnoreFile(gitignorePath),
      ...htmlConfig,
      ...javascriptConfig,
      ...jsonConfig,
      ...markdownConfig,
      ...typescriptConfig,
      ...ymlConfig,
    ],
    react: [
      includeIgnoreFile(gitignorePath),
      ...htmlConfig,
      ...javascriptConfig,
      ...jsonConfig,
      ...markdownConfig,
      ...reactConfig,
      ...typescriptConfig,
      ...ymlConfig,
    ],
  },
}
