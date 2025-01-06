import fs from 'fs'
import defaultConfig from './configs/default.config.mjs'

const jsonData = fs.readFileSync('./package.json', 'utf8')
const { name, version } = JSON.parse(jsonData)

export default {
  meta: {
    name,
    version,
  },
  configs: {
    default: defaultConfig,
  },
}
