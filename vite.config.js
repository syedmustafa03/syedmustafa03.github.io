import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE ON base:
// - If this repo is named "yourusername.github.io" (a user/profile site), keep base: '/'
// - If this repo is a PROJECT site (e.g. "linkroom-demo"), change base to '/linkroom-demo/'
//   otherwise you'll get a blank white page when deployed.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
