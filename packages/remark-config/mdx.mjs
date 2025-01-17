import remarkMdx from 'remark-mdx'

import baseConfig from './index.mjs'

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins, remarkMdx],
}
