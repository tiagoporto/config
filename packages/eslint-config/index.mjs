import { includeIgnoreFile } from '@eslint/compat'
import childProcess from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

import { htmlConfig } from './eslint-configs/html.mjs'
import { javascriptConfig } from './eslint-configs/javascript.mjs'
import { jsonConfig } from './eslint-configs/json.mjs'
import { markdownConfig } from './eslint-configs/markdown.mjs'
import { reactConfig, reactConfigTypeChecked } from './eslint-configs/react.mjs'
import {
  typescriptConfig,
  typescriptTypeCheckedConfig,
} from './eslint-configs/typescript.mjs'
import { ymlConfig } from './eslint-configs/yml.mjs'

const processPath = childProcess
  .execSync('git rev-parse --show-toplevel')
  .toString()
  .trim()

const gitignorePath = path.resolve(processPath, '.gitignore')
const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name, version } = JSON.parse(jsonData)

const base = [
  includeIgnoreFile(gitignorePath),
  ...htmlConfig,
  ...javascriptConfig,
  ...jsonConfig,
  ...markdownConfig,
  ...ymlConfig,
]

export default {
  meta: {
    name,
    version,
  },
  configs: {
    base: [...base, ...typescriptConfig],
    baseTypeChecked: [...base, ...typescriptTypeCheckedConfig],
    react: [...base, ...typescriptConfig, ...reactConfig],
    reactTypeChecked: [
      ...base,
      ...typescriptTypeCheckedConfig,
      ...reactConfigTypeChecked,
    ],
  },
}
