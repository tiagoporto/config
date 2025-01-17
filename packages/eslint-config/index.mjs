import fs from 'fs'

import base from './configs/base.config.mjs'
import typeScript from './configs/typescript.config.mjs'

const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name, version } = JSON.parse(jsonData)

export default {
  meta: {
    name,
    version,
  },
  configs: {
    base,
    typeScript,
  },
}
