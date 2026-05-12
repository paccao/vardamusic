import type { Config } from 'markdoc-svelte'

// https://colliercz.github.io/markdoc-svelte/docs/schema/tags
const tags: Config['tags'] = {
  AlignedTextBlock: {
    render: 'AlignedTextBlock',
    children: ['paragraph'],
    attributes: {
      type: {
        type: String,
        default: 'note',
        matches: ['caution', 'check', 'note', 'warning'],
        errorLevel: 'critical',
      },
      textAlign: { type: String },
    },
  },
}

export default tags
