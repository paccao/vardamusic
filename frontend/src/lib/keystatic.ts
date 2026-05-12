import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../keystatic.config.ts'
import { pathToFileURL } from 'node:url'

/** See https://keystatic.com/docs/reader-api */
export const reader = createReader(
  pathToFileURL(process.cwd()).href,
  keystaticConfig,
)
