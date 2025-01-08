import baseConfig from './index.mjs'
import remarkMdx from 'remark-mdx'

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins, remarkMdx],
}
