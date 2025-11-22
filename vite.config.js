import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'thomas-website'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
