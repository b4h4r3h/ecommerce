import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@components': path.resolve(__dirname, './src/components'),
      // 'api': fileURLToPath(new URL("./src/api", import.meta.url)),
      // 'interfaces': fileURLToPath(new URL("./src/interfaces", import.meta.url)),
      // 'types': fileURLToPath(new URL("./src/types", import.meta.url)),
      // 'enums': fileURLToPath(new URL("./src/enums", import.meta.url)),
      // 'utils': fileURLToPath(new URL("./src/utils", import.meta.url)),
      // 'assets': fileURLToPath(new URL("./src/assets", import.meta.url)),
      // 'shared': fileURLToPath(new URL("./src/components/shared", import.meta.url)),
      // 'global': fileURLToPath(new URL("./ant-design", import.meta.url)),
    }
  },
  plugins: [react()],
})
