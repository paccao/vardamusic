import { z } from 'zod/v4'
import type { MarkdocModule } from 'markdoc-svelte'
import type { Component } from 'svelte'

export const prerender = true

const postSchema = z.object({
  frontmatter: z.object({
    title: z.string(),
  }),
})

type RawPost = z.infer<typeof postSchema>

export type BlogPost = RawPost['frontmatter'] & {
  slug: string
  Content: Component
}

const allPosts = Object.entries(
  import.meta.glob('/src/content/pages/**/*.{mdoc,md}'),
).reduce<Record<string, () => Promise<MarkdocModule>>>(
  (rawPosts, [path, loadPost]) => {
    const slug = path
      .replace('/src/content/pages/', '')
      .replace(/\.(mdoc|md)$/, '')
    console.log('raw: ', rawPosts)
    console.log('slug: ', slug)
    rawPosts[slug] = loadPost as () => Promise<MarkdocModule>
    return rawPosts
  },
  {},
)

async function getPost(slug: string): Promise<BlogPost> {
  const loaded = await allPosts[slug]?.()
  console.log(allPosts)
  if (!loaded) {
    throw new Error('No post with slug: ' + slug)
  }
  const { default: Content, ...rawPost } = loaded

  const { data, error } = postSchema.safeParse(rawPost)

  if (error) {
    throw new Error('Invalid frontmatter for post with slug: ' + slug, {
      cause: error,
    })
  }

  return { ...data.frontmatter, slug, Content }
}

export const load = async ({ params }) => {
  const slug = params.catchall

  return {
    post: await getPost(slug),
  }
}
// import { error } from '@sveltejs/kit'
// import type { MarkdocModule } from 'markdoc-svelte'

// export const load = async ({ params }) => {
//   const slug = params.catchall
//   try {
//     const page = (await import(`$pages/${slug}.mdoc`)) as MarkdocModule
//     return { page }
//   } catch {
//     throw error(404, `No corresponding file found for the slug "${slug}"`)
//   }
// }
