import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import remarkEmoji from 'remark-emoji'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGFM from 'remark-gfm'
import remarkLintNoDeadUrls from 'remark-lint-no-dead-urls'
import remarkLintNoUrlTrailingSlash from 'remark-lint-no-url-trailing-slash'
import remarkLintConsistent from 'remark-preset-lint-consistent'
import remarkLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide'
import remarkLintRecommended from 'remark-preset-lint-recommended'
import remarkPresetPrettier from 'remark-preset-prettier'
import remarkRetext from 'remark-retext'
import remarkValidateLinks from 'remark-validate-links'
import retextEnglish from 'retext-english'
import retextEquality from 'retext-equality'
import retextQuotes from 'retext-quotes'
import retextSyntaxMentions from 'retext-syntax-mentions'
import { unified } from 'unified'

const currentPath = process.cwd()
const folderName = path.basename(currentPath)

function getPackageJsonFiles(directory) {
  const files = fs.readdirSync(directory)
  const packageJsonFiles = []

  for (const file of files) {
    const filePath = path.join(directory, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory() && file !== 'node_modules') {
      packageJsonFiles.push(...getPackageJsonFiles(filePath))
    } else if (file === 'package.json') {
      packageJsonFiles.push(filePath)
    }
  }

  return packageJsonFiles
}

const pkgPaths = getPackageJsonFiles(currentPath)
const pkgNames = pkgPaths.map((pkgPath) => {
  return JSON.parse(fs.readFileSync(path.join(pkgPath), 'utf8')).name
})
const ignoreAllNpmUrls = pkgNames.map(
  pkg => `https://www.npmjs.com/package/${pkg}`,
)

export default {
  settings: {
    bullet: '-',
    listItemIndent: 'mixed',
    incrementListMarker: false,
  },
  plugins: [
    remarkGFM,
    [remarkFrontmatter, ['yaml', 'toml']],
    remarkEmoji,
    remarkLintConsistent,
    remarkLintRecommended,
    remarkLintMarkdownStyleGuide,
    remarkValidateLinks,
    [
      remarkLintNoDeadUrls,
      {
        // TODO: https://github.com/wooorm/dead-or-alive/issues/3
        skipUrlPatterns: [
          `https://tiagoporto.github.io/${folderName}/`,
          // NOTE: avoid npm 403 errors
          ...ignoreAllNpmUrls,
        ],
        skipLocalhost: true,
        skipOffline: true,
        deadOrAliveOptions: {
          timeout: 4000,
          maxRetries: 2,
        },
      },
    ],
    remarkLintNoUrlTrailingSlash,
    [
      remarkRetext,
      unified()
        .use(retextEnglish)
        .use(retextEquality)
        .use(retextQuotes)
        .use(retextSyntaxMentions),
    ],
    remarkPresetPrettier,
    ['remark-lint-no-file-name-mixed-case', false],
    ['remark-lint-file-extension', false],
  ],
}
