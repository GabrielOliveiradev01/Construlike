import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['construlike.png', 'logo-mylike.png'],
      manifest: {
        name: 'Construlike - Incorporadora',
        short_name: 'Construlike',
        description: 'Incorporadora Construlike - Seus sonhos em realidade',
        theme_color: '#FBB602',
        background_color: '#1a1d20',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'construlike.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'construlike.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2}'],
        globIgnores: [
          '**/Mylike/**'
        ],
        maximumFileSizeToCacheInBytes: 2 * 1024 * 1024, // 2 MB (padrão)
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/construlike\.com\.br\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'construlike-images',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 dias
              }
            }
          }
        ]
      }
    })
  ],
})

