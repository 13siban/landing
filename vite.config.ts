import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // https://mymyy.com/landing/ 하위 경로로 서빙되므로 에셋 URL도 같은 접두사를 타야 한다
  base: '/landing/',
  plugins: [react(), tailwindcss()],
})
