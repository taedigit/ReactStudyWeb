import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          prism: ['prism-react-renderer'],
          vendor: [
            '@chakra-ui/react',
            '@emotion/react',
            '@emotion/styled',
            'framer-motion',
          ],
        },
      },
    },
  },
})
