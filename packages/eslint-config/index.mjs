import fs from 'node:fs'

import { htmlConfig } from './src/html.mjs'
import { javascriptConfig } from './src/javascript.mjs'
import { jsonConfig } from './src/json.mjs'
import { markdownConfig } from './src/markdown.mjs'
import { reactConfig } from './src/react.mjs'
import { typescriptConfig } from './src/typescript.mjs'
import { ymlConfig } from './src/yml.mjs'

const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name, version } = JSON.parse(jsonData)

export default {
  meta: {
    name,
    version,
  },
  configs: {
    base: [
      ...htmlConfig,
      ...javascriptConfig,
      ...jsonConfig,
      ...markdownConfig,
      ...typescriptConfig,
      ...ymlConfig,
    ],
    react: [
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
