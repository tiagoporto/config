import fs from 'fs'

import { javascriptConfig } from './src/javascript.mjs'
import { jsonConfig } from './src/json.mjs'
import { markdownConfig } from './src/markdown.mjs'
import { typescriptConfig } from './src/typescript.mjs'

const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name, version } = JSON.parse(jsonData)

export default {
  meta: {
    name,
    version,
  },
  configs: {
    flat: [
      ...javascriptConfig,
      ...jsonConfig,
      ...markdownConfig,
      ...typescriptConfig,
    ],
  },
}
