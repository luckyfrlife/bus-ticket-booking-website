import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: process.env.BASE_PATH || "/bus-ticket-booking-website",
  server: {
    port: 3000,
  }
})
