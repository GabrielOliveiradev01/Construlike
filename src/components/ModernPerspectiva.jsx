import { useState, useEffect, useRef } from 'react'
import './ModernPerspectiva.css'

const ModernPerspectiva = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const itemRefs = useRef([])

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
    handleScroll() // Chamar uma vez para definir o índice inicial

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

  // Se não houver imagens, criar placeholders
  const displayImages = images.length > 0 ? images : Array(6).fill(null)

  return (
    <div className="modern-perspectiva">
      <div className="perspectiva-container" ref={containerRef}>
        {/* Header */}
        <div className="perspectiva-header">
          <h1>Perspectiva</h1>
        </div>

        {/* Cards de imagem */}
        {displayImages.map((image, index) => (
          <div
            key={index}
            className="perspectiva-item"
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <div className="perspectiva-card">
              {image ? (
                <>
                  <div className="perspectiva-image-wrapper">
                    <img
                      src={image}
                      alt={getImageName(image)}
                      className="perspectiva-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <div className="perspectiva-overlay">
                      <div className="perspectiva-badge">EM OBRAS</div>
                      <div>
                        <h2 className="perspectiva-name">
                          {getImageName(image)}
                        </h2>
                        <p className="perspectiva-subtitle">
                          Prohidro Morumbi
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="perspectiva-placeholder">
                  <p>Imagem {index + 1}<br />Adicione suas imagens aqui</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Indicador de scroll */}
      {currentIndex < displayImages.length - 1 && (
        <div className="scroll-indicator">
          <span className="scroll-indicator-text">Role para ver mais</span>
          <span className="scroll-indicator-arrow">↓</span>
        </div>
      )}

      {/* Navegação por pontos */}
      {displayImages.length > 1 && (
        <div className="perspectiva-dots">
          {displayImages.map((_, index) => (
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

export default ModernPerspectiva


