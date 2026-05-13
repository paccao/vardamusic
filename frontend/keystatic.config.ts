import { config, fields, singleton, collection } from '@keystatic/core'
import {
  block,
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
          {
            label: 'Högerjustera',
            value: 'text-right',
          },
        ],
      }),
    },
  }),
  Divider: block({
    label: 'Avskiljare',
    description:
      'Använd denna för att dela upp sektioner på sidan med ett horizontellt streck.',
    schema: {
      class: fields.select({
        label: 'Välj storleken på avståndet ovan och nedanför avskiljaren',
        defaultValue: 'my-8',
        options: [
          {
            label: 'Litet avstånd',
            value: 'my-4',
          },
          {
            label: 'Normalt avstånd',
            value: 'my-8',
          },
          {
            label: 'Stort avstånd',
            value: 'my-10',
          },
          {
            label: 'Extra stort avstånd',
            value: 'my-12',
          },
        ],
      }),
    },
  }),
  Image: block({
    label: 'Bild',
    description: 'Lägg in en bild på sidan',
    schema: {
      // TODO: Add feature to pick image that already exists in the repo and make it work for local/github storage mode
      src: fields.image({
        label: 'Bild',
        directory: 'src/lib/assets/',
        publicPath: '/src/lib/assets/',
        validation: { isRequired: true },
      }),
      alt: fields.text({
        label: 'Alternativ text som visas ifall bilden inte kan läsas in.',
        validation: { isRequired: true },
      }),
      caption: fields.text({
        label: 'Bildtext under bild (valfritt)',
        validation: { isRequired: false },
      }),
      class: fields.select({
        label: 'Justera storlek',
        defaultValue:
          'mx-auto my-6 h-auto w-full max-w-[350px] rounded-md object-cover',
        options: [
          {
            label: 'Liten',
            value:
              'mx-auto my-4 h-auto w-full max-w-[250px] rounded-md object-cover',
          },
          {
            label: 'Normal',
            value:
              'mx-auto my-6 h-auto w-full max-w-[350px] rounded-md object-cover',
          },
          {
            label: 'Stor',
            value:
              'mx-auto my-8 h-auto w-full max-w-[400px] rounded-md object-cover',
          },
          {
            label: 'Full bredd, inga rundade hörn',
            value: 'w-full max-h-[60vh] h-auto rounded-none object-cover',
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
