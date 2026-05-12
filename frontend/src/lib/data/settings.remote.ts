import { prerender } from '$app/server'
import { reader } from '$lib/keystatic.ts'

export const getSettings = prerender(async () => {
  return reader.singletons.settings.readOrThrow()
})
