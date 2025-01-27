import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@images": resolve(__dirname, "src/images"),
    },
  },
  plugins: [react()],
})
