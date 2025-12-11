import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

// Registrar Service Worker para PWA
let updateSW
if ('serviceWorker' in navigator) {
  updateSW = registerSW({
    onNeedRefresh() {
      // Mostrar notificação quando houver atualização disponível
      if (confirm('Nova versão disponível! Deseja atualizar?')) {
        updateSW(true)
      }
    },
    onOfflineReady() {
      console.log('App pronto para uso offline')
    },
  })
}

// Detectar evento de instalação do PWA
let deferredPrompt

// Verificar se o app já está instalado
function isPWAInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches || 
         window.navigator.standalone === true ||
         document.referrer.includes('android-app://')
}

// Mostrar prompt de instalação
function showInstallPrompt() {
  // Verificar se já está instalado
  if (isPWAInstalled()) {
    return
  }

  // Verificar se já existe um banner
  if (document.getElementById('pwa-install-banner')) {
    return
  }

  // Verificar se foi dispensado recentemente (7 dias)
  const dismissed = localStorage.getItem('pwa-install-dismissed')
  if (dismissed && Date.now() - parseInt(dismissed) < 7 * 24 * 60 * 60 * 1000) {
    return
  }

  // Criar um prompt customizado
  const installBanner = document.createElement('div')
  installBanner.id = 'pwa-install-banner'
  installBanner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #FBB602 0%, #e0a800 100%);
      color: #1f2326;
      padding: 20px 30px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 90%;
      animation: slideUp 0.5s ease-out;
    ">
      <div>
        <strong style="font-size: 16px; display: block; margin-bottom: 5px;">Instalar App Construlike</strong>
        <span style="font-size: 14px; opacity: 0.9;">Instale nosso app para acesso rápido e offline</span>
      </div>
      <button id="pwa-install-btn" style="
        background: #1f2326;
        color: #FBB602;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        font-size: 14px;
        white-space: nowrap;
        transition: transform 0.2s;
      ">Instalar</button>
      <button id="pwa-dismiss-btn" style="
        background: transparent;
        color: #1f2326;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 0 10px;
        opacity: 0.7;
        transition: opacity 0.2s;
      ">×</button>
    </div>
    <style>
      @keyframes slideUp {
        from {
          transform: translateX(-50%) translateY(100px);
          opacity: 0;
        }
        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }
      #pwa-install-btn:hover {
        transform: scale(1.05);
      }
      #pwa-dismiss-btn:hover {
        opacity: 1;
      }
    </style>
  `
  document.body.appendChild(installBanner)

  // Botão de instalação
  document.getElementById('pwa-install-btn').addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        console.log('Usuário aceitou instalar o PWA')
        installBanner.remove()
      }
      deferredPrompt = null
    } else {
      // Fallback: instruções para instalação manual
      alert('Para instalar o app:\n\nChrome/Edge: Menu (⋮) → "Instalar app"\nSafari (iOS): Compartilhar → "Adicionar à Tela de Início"')
    }
  })

  // Botão de fechar
  document.getElementById('pwa-dismiss-btn').addEventListener('click', () => {
    installBanner.remove()
    // Salvar preferência para não mostrar novamente por 7 dias
    localStorage.setItem('pwa-install-dismissed', Date.now())
  })
}

// Detectar evento beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevenir o prompt automático
  e.preventDefault()
  // Guardar o evento para usar depois
  deferredPrompt = e
  // Mostrar banner imediatamente
  showInstallPrompt()
})

// Mostrar banner após carregar a página (com delay para garantir que o service worker está ativo)
window.addEventListener('load', () => {
  // Aguardar um pouco para o service worker registrar
  setTimeout(() => {
    if (!isPWAInstalled()) {
      showInstallPrompt()
    }
  }, 2000)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

