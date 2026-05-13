import type { Config } from 'markdoc-svelte'

// https://colliercz.github.io/markdoc-svelte/docs/schema/tags
const tags: Config['tags'] = {
  AlignedTextBlock: {
    render: 'AlignedTextBlock',
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
  Divider: {
    render: 'Divider',
    attributes: {
      type: {
        type: String,
        default: 'note',
        matches: ['caution', 'check', 'note', 'warning'],
        errorLevel: 'critical',
      },
      class: { type: String },
    },
  },
  Image: {
    render: 'Image',
    attributes: {
      src: {
        type: String,
      },
      alt: {
        type: String,
      },
      caption: {
        type: String,
      },
      class: {
        type: String,
      },
    },
  },
}

export default tags
