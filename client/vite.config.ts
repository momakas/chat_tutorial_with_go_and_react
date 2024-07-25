import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
})

/// <reference types="vite/client" />
interface ImortMetaEnv {
  VITE_WS_PORT: string;
}