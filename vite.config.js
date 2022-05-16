import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import purgecss from '@fullhuman/postcss-purgecss'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      css: {
        devSourcemap: true,
      },
    }
  } else {
    return {
      plugins: [react()],
      css: {
        postcss: {
          plugins: [
            purgecss({
              content: ['./**/*.html', './src/**/*jsx', './src/**/*js '],
            }),
          ],
        },
      },
    }
  }
})
