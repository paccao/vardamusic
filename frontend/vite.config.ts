import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { keystatic } from 'keystatic-sveltekit'
console.log('VITE CONFIG CWD:', process.cwd())
console.log('VITE CONFIG __dirname:', __dirname)

export default defineConfig({
  plugins: [tailwindcss(), enhancedImages(), sveltekit()],
  // Ensure the SvelteKit app is running on 127.0.0.1 to be consistent with Keystatic
  // For production, we want the host to be determined by the runtime instead
  server:
    process.env.NODE_ENV === 'development' ? { host: '127.0.0.1' } : undefined,
})
