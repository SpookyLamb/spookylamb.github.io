import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
      
// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    base: '/spookylamb.github.io/',
    plugins: [react()],
    server: {
      port: 8080,
      hot: true
    },
  }
})
