import type { Title } from '$components/ui/card/index.ts'
import { config, fields, singleton, collection } from '@keystatic/core'
import {
  wrapper,
  type ContentComponent,
} from '@keystatic/core/content-components'
const components: Record<string, ContentComponent> = {
  AlignedTextBlock: wrapper({
    label: 'Text',
    description:
      'Detta är en paragraf med en eller flera rader av text som går från vänster till höger på skärmen.',
    schema: {
      textAlign: fields.select({
        label: 'Justera text',
        defaultValue: 'text-left',
        options: [
          {
            label: 'Vänsterjustera',
            value: 'text-left',
          },
          {
            label: 'Centerjustera',
            value: 'text-center',
          },
        ],
      }),
    },
  }),
}

export default config({
  // storage: isProd ? remoteMode : localMode,
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'Sacred Varda Music' },
    navigation: {
      Sidoinnehåll: [
        'pages',
        'settings',
        // 'components'
      ],
    },
  },
  singletons: {
    settings: singleton({
      label: '⚙️ Inställningar',
      path: 'src/content/settings',
      schema: {
        siteName: fields.text({
          label: 'Namn på hemsidan',
          validation: { isRequired: true },
        }),
      },
    }),
  },
  collections: {
    pages: collection({
      label: 'Sidor',
      slugField: 'title',
      path: 'src/content/pages/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titel' } }),
        content: fields.markdoc({
          label: 'Innehåll',
          components,
        }),
      },
    }),
  },
})

// export default config({
//   collections: {
//     // Singleton for settings (you said it already exists; included for completeness)
//     settings: config.singleton({
//       label: 'Settings',
//       slug: 'settings',
//       schema: {
//         email: fields.text({
//           label: 'Contact email',
//           validation: { required: true },
//         }),
//       },
//     }),

//     // Startsida collection (Swedish landing page)
//     startsida: config.collection({
//       label: 'Startsida',
//       path: 'content/startsida',
//       slugField: 'title',
//       schema: {
//         title: fields.text({ label: 'Titel', validation: { required: true } }),
//         blocks: fields.blocks({
//           label: 'Sektioner',
//           // Each block variant defined below
//           blocks: {
//             // Simple text block with alignment toggle (boolean)
//             textBlock: fields.object({
//               label: 'Textblock',
//               schema: {
//                 heading: fields.text({
//                   label: 'Rubrik',
//                   validation: { required: false },
//                 }),
//                 body: fields.richText({
//                   label: 'Brödtext',
//                   // use markdoc/mdx later; richText gives structured content now
//                   validation: { required: false },
//                 }),
//                 center: fields.boolean({
//                   label: 'Centera text?',
//                   description:
//                     'När true, använd center-justering; annars vänster.',
//                   defaultValue: false,
//                 }),
//                 showDivider: fields.boolean({
//                   label: 'Visa avskiljare (divider)?',
//                   defaultValue: false,
//                 }),
//               },
//             }),

//             // Divider-only block (visual separator)
//             divider: fields.object({
//               label: 'Avskiljare',
//               schema: {
//                 size: fields.select({
//                   label: 'Storlek',
//                   options: [
//                     { label: 'Small', value: 'sm' },
//                     { label: 'Medium', value: 'md' },
//                     { label: 'Large', value: 'lg' },
//                   ],
//                   defaultValue: 'md',
//                 }),
//               },
//             }),

//             // Image block (single image + caption)
//             imageBlock: fields.object({
//               label: 'Bild',
//               schema: {
//                 image: fields.image({
//                   label: 'Bild',
//                   directory: 'public/uploads/images',
//                   publicPath: '/uploads/images',
//                   validation: { required: true },
//                 }),
//                 caption: fields.text({
//                   label: 'Bildtext (figcaption)',
//                   validation: { required: false },
//                 }),
//                 fullWidth: fields.boolean({
//                   label: 'Fullbredd?',
//                   defaultValue: false,
//                 }),
//               },
//             }),

//             // Multi-component container: user can add multiple inner components on the fly
//             // Implemented as a nested blocks field called "children"
//             multiComponent: fields.object({
//               label: 'Multi-komponent',
//               schema: {
//                 children: fields.blocks({
//                   label: 'Innehåll',
//                   blocks: {
//                     mc_text: fields.object({
//                       label: 'Text (inside multi)',
//                       schema: {
//                         body: fields.richText({
//                           label: 'Text',
//                           validation: { required: false },
//                         }),
//                         center: fields.boolean({
//                           label: 'Centera?',
//                           defaultValue: false,
//                         }),
//                       },
//                     }),
//                     mc_divider: fields.object({
//                       label: 'Avskiljare (inside multi)',
//                       schema: {
//                         size: fields.select({
//                           label: 'Storlek',
//                           options: [
//                             { label: 'Small', value: 'sm' },
//                             { label: 'Medium', value: 'md' },
//                             { label: 'Large', value: 'lg' },
//                           ],
//                           defaultValue: 'md',
//                         }),
//                       },
//                     }),
//                     mc_image: fields.object({
//                       label: 'Bild (inside multi)',
//                       schema: {
//                         image: fields.image({
//                           label: 'Bild',
//                           directory: 'public/uploads/images',
//                           publicPath: '/uploads/images',
//                         }),
//                         caption: fields.text({
//                           label: 'Bildtext',
//                           validation: { required: false },
//                         }),
//                       },
//                     }),
//                   },
//                 }),
//               },
//             }),

//             // Information section: unordered list with dynamic items (label + rich description)
//             informationSection: fields.object({
//               label: 'Informationssektion',
//               schema: {
//                 intro: fields.text({
//                   label: 'Introduktion (valfritt)',
//                   validation: { required: false },
//                 }),
//                 items: fields.array({
//                   label: 'Punkter',
//                   item: fields.object({
//                     label: fields.text({
//                       label: 'Etikett (fet text)',
//                       validation: { required: true },
//                     }),
//                     // richText allows inline bold formatting in the description
//                     description: fields.richText({
//                       label: 'Beskrivning (stöd för fetstil inline)',
//                       validation: { required: false },
//                     }),
//                   }),
//                   min: 0,
//                 }),
//               },
//             }),

//             // Social link: image + url + label
//             socialLink: fields.object({
//               label: 'Social länk',
//               schema: {
//                 icon: fields.image({
//                   label: 'Bild/ikon',
//                   directory: 'public/uploads/social',
//                   publicPath: '/uploads/social',
//                 }),
//                 url: fields.url({
//                   label: 'URL',
//                   validation: { required: true },
//                 }),
//                 label: fields.text({
//                   label: 'Visningstext',
//                   validation: { required: false },
//                 }),
//               },
//             }),

//             // Email component referencing settings singleton (store only a flag or empty object; render will read settings)
//             emailComponent: fields.object({
//               label: 'E-post (referens till inställningar)',
//               schema: {
//                 useSettingsEmail: fields.boolean({
//                   label: 'Använd e-post från inställningar?',
//                   description:
//                     'Tar e-postvärdet från Settings.email singleton.',
//                   defaultValue: true,
//                 }),
//                 // Optional override (if you want to allow direct override)
//                 overrideEmail: fields.text({
//                   label: 'Överskriv e-post (valfritt)',
//                   validation: { required: false },
//                 }),
//                 displayText: fields.text({
//                   label: "Visningstext (t.ex. 'Kontakta oss')",
//                   validation: { required: false },
//                 }),
//               },
//             }),
//           },
//           // optional: allow reordering and limit number of blocks per page if desired
//           itemLabel: (block) => {
//             // Keystatic supports function labels in config; keep simple here
//             return block.type
//           },
//         }),
//       },
//     }),
//   },
// })
