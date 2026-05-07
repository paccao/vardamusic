import { fields } from '@keystatic/core'
import { wrapper } from '@keystatic/core/content-components'

TextblockCenter: wrapper({
  label: 'Centrerat Textblock',
  schema: {
    author: fields.text({ label: 'Author' }),
    role: fields.text({ label: 'Role' }),
  },
})
