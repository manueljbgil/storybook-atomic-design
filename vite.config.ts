import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    lib:{
        entry: resolve(__dirname, 'lib/main.ts'),
        formats: ['es'],
    },
    rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['react'],
      },
  }
})
