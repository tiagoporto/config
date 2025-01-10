import { unified } from 'unified'
import remarkEmoji from 'remark-emoji'
import remarkLintRecommended from 'remark-preset-lint-recommended'
import remarkLintConsistent from 'remark-preset-lint-consistent'
import remarkLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide'
import remarkGFM from 'remark-gfm'
import remarkValidateLinks from 'remark-validate-links'
import remarkLintNoDeadUrls from 'remark-lint-no-dead-urls'
import remarkLintNoUrlTrailingSlash from 'remark-lint-no-url-trailing-slash'
import remarkPresetPrettier from 'remark-preset-prettier'

import remarkRetext from 'remark-retext'
import retextEnglish from 'retext-english'
import retextEquality from 'retext-equality'
import retextQuotes from 'retext-quotes'
import retextSyntaxMentions from 'retext-syntax-mentions'

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
    [remarkLintNoDeadUrls, { skipLocalhost: true }],
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
