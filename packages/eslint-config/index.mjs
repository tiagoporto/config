import fs from 'node:fs'

import { gitignoreConfig } from './eslint-configs/gitignore.mjs'
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

const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name, version } = JSON.parse(jsonData)

const base = [
  ...gitignoreConfig,
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
