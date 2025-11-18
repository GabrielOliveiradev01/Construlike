import { useState, useEffect, useRef } from 'react'
import './MyLikePerspectiva.css'

const MyLikePerspectiva = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const itemRefs = useRef([])

  // Imagens do MY LIKE na pasta public/Mylike/Perspectiva
  const images = [
    '/Mylike/Perspectiva/Prohidro_Morumbi_Barbearia_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Beach_Tennis_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Beauty_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Brinquedoteca_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Cinema_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Coworking_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Cross_Fit_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Delivery_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Espaco_Grill_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Festas_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Fitness_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Jogos_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Lavanderia_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Living_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Lobby_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Massagem_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Mini_Market_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Mirante_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Pet_Place_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Piscina_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Piscina_Infantil_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Play_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Podcast_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Portaria_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Quadra_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Reuniao_HR.jpg',
    '/Mylike/Perspectiva/Prohidro_Morumbi_Solarium_HR.jpg',
  ]

  // Nomes amigáveis para as imagens
  const getImageName = (imagePath) => {
    const filename = imagePath.split('/').pop().replace('.jpg', '').replace('_HR', '')
    return filename
      .replace(/Prohidro_Morumbi_/g, '')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  // Detectar qual item está visível no scroll
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollPosition = container.scrollTop + container.clientHeight / 2
      
      itemRefs.current.forEach((item, index) => {
        if (item) {
          const itemTop = item.offsetTop
          const itemBottom = itemTop + item.offsetHeight
          
          if (scrollPosition >= itemTop && scrollPosition < itemBottom) {
            setCurrentIndex(index)
          }
        }
      })
    }

    container.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => container.removeEventListener('scroll', handleScroll)
  }, [images])

  // Scroll para item específico
  const scrollToItem = (index) => {
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  // Navegação com teclado
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        const nextIndex = e.key === 'ArrowDown' 
          ? Math.min(currentIndex + 1, images.length - 1)
          : Math.max(currentIndex - 1, 0)
        scrollToItem(nextIndex)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex, images.length])

  // Imagem de fundo principal (usando Lobby como imagem de fundo)
  const backgroundImage = '/Mylike/Perspectiva/Prohidro_Morumbi_Lobby_HR.jpg'

  return (
    <div 
      className="mylike-perspectiva"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="perspectiva-container" ref={containerRef}>
        {/* Header com nome do empreendimento */}
        <div className="perspectiva-header">
          <h1>MY LIKE</h1>
          <p className="empreendimento-subtitle">Campo Limpo - São Paulo</p>
        </div>

        {/* Cards de imagem com fundo */}
        {images.map((image, index) => (
          <div
            key={index}
            className="perspectiva-item"
            ref={(el) => (itemRefs.current[index] = el)}
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="perspectiva-overlay">
              <div className="perspectiva-badge">EM OBRAS</div>
              <div className="perspectiva-content">
                <h2 className="perspectiva-name">
                  {getImageName(image)}
                </h2>
                <p className="perspectiva-subtitle">
                  MY LIKE Campo Limpo
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicador de scroll */}
      {currentIndex < images.length - 1 && (
        <div className="scroll-indicator">
          <span className="scroll-indicator-text">Role para ver mais</span>
          <span className="scroll-indicator-arrow">↓</span>
        </div>
      )}

      {/* Navegação por pontos */}
      {images.length > 1 && (
        <div className="perspectiva-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`perspectiva-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => scrollToItem(index)}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MyLikePerspectiva

