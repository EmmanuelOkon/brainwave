import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Resolves '@' alias to the 'src' directory
    },
  },
  // server: {
  //   hmr: {
  //     overlay: false, // Disable HMR overlay
  //   },
  // },
});
