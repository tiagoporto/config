import remarkEmoji from 'remark-emoji'
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
// eslint-disable-next-line import/no-unresolved
import retextEquality from 'retext-equality'
import retextQuotes from 'retext-quotes'
import retextSyntaxMentions from 'retext-syntax-mentions'
import { unified } from 'unified'

export default {
  settings: {
    bullet: '-',
    listItemIndent: 'mixed',
    incrementListMarker: false,
  },
  plugins: [
    remarkGFM,
    remarkEmoji,
    remarkLintConsistent,
    remarkLintRecommended,
    remarkLintMarkdownStyleGuide,
    remarkValidateLinks,
    [
      remarkLintNoDeadUrls,
      {
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
