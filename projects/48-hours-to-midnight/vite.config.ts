import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The sub-path this app lives at on the personal site
const BASE = '/projects/48-hours-to-midnight/'

export default defineConfig({
  plugins: [react()],
  base: BASE,
  build: {
    // Output into the personal site's public folder so it gets served
    outDir: '../../public/projects/48-hours-to-midnight',
    emptyOutDir: true,
  },
})
