import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  content: [
    './index.html', // Update with paths to your HTML/JS files
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5f6fff', // Add a custom blue color  
      },
    },
  },
 
  plugins: [
    tailwindcss(),
  ],
})