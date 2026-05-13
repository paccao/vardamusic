import adapter from '@sveltejs/adapter-vercel'
import { type Config } from '@sveltejs/kit'
import { markdocPreprocess } from 'markdoc-svelte'
import { glob } from 'node:fs/promises'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { posix, sep } from 'node:path'
import { isKeystaticRoute } from 'keystatic-sveltekit'
import markdocTags from './src/lib/markdoc/tagsConfig.ts'

export async function getPrerenderEntries() {
  const pages = (
    await Array.fromAsync(glob('src/content/pages/**/*.{mdoc,md}'))
  ).flatMap((file: string) =>
    file
      // Ensure paths are posix `/` rather than Windows `\`
      .replaceAll(sep, posix.sep)
      // We only need the final part of the file path
      .split('/content')[1]
      // Replace the file extension to get a clean file URL
      .replace(/\.md(?:oc)/, ''),
  )

  // Add loaders for more prerenderable content types here
  return [pages].flat()
}

const config: Config = {
  preprocess: [markdocPreprocess({ tags: markdocTags }), vitePreprocess()],
  extensions: ['.svelte', '.mdoc', '.md'],
  kit: {
    experimental: {
      remoteFunctions: true,
    },
    adapter: adapter(),
    prerender: {
      entries: ['*', await getPrerenderEntries()].flat(),
      handleHttpError({ path, message }) {
        // Ignore prerendering errors for Keystatic CMS since it's a SPA that only supports CSR.
        if (isKeystaticRoute(path)) return

        // Fail the build in other cases.
        throw new Error(message)
      },
    },
    alias: {
      $pages: './src/content/pages',
      '$pages/*': './src/content/pages/*',
      $components: './src/lib/components',
      '$components/*': './src/lib/components/*',
      $assets: './src/lib/assets',
      '$assets/*': './src/lib/assets/*',
      $layouts: './src/lib/layouts',
      '$layouts/*': './src/lib/layouts/*',
    },
  },
  compilerOptions: { experimental: { async: true } },
} satisfies Config

export default config
