import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_ETH || "/bus-ticket-booking-website",
  server: {
    port: 3000,
  }
})
