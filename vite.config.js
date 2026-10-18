import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // Sve što počinje s /api/weather bit će preusmjereno na aviationweather.gov
      '/api/weather': {
        target: 'https://aviationweather.gov',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/weather/, '')
      }
    }
  }
})