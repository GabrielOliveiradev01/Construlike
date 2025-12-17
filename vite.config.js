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
          '**/Mylike/**',
          '**/MirageSaoPaulo/**',
          '**/sobre-nos.svg'
        ],
        maximumFileSizeToCacheInBytes: 100 * 1024 * 1024, // 100 MB para permitir imagens grandes
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
          },
          {
            urlPattern: /\.(jpg|jpeg|png|webp|svg)$/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 dias
              }
            }
          }
        ]
      }
    })
  ],
})

