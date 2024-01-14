import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] })],
  build:{
    copyPublicDir:false,
    lib:{
        entry: resolve(__dirname, 'lib/main.ts'),
        formats: ['es'],
    },
    rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['react','react/jsx-runtime'],
        output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              react: 'React',
            },
          },
      },
  }
})
