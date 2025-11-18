import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
  const updateSW = registerSW({
    onNeedRefresh() {
      // Pode adicionar lógica aqui para notificar o usuário sobre atualizações
    },
    onOfflineReady() {
      // App está pronto para funcionar offline
      console.log('App pronto para funcionar offline')
    },
  })
}

