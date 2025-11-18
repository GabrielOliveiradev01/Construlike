import { useState, useEffect, useCallback } from 'react'
import './ImageSlider.css'

const ImageSlider = ({ title, images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Se não houver imagens, criar placeholders
  const displayImages = images.length > 0 ? images : Array(6).fill(null)

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
    )
  }, [displayImages.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
    )
  }, [displayImages.length])

  // Auto-play opcional (descomente se quiser)
  // useEffect(() => {
  //   if (displayImages.length > 1) {
  //     const interval = setInterval(() => {
  //       goToNext()
  //     }, 5000)
  //     return () => clearInterval(interval)
  //   }
  // }, [currentIndex])

  // Navegação com teclado
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [goToPrevious, goToNext])

  return (
    <div className="image-slider">
      <div className="slider-header">
        <h1>{title}</h1>
      </div>

      {/* Área principal do slide */}
      <div className="slider-main">
        <div className="slider-container">
          {displayImages.length > 0 ? (
            displayImages.map((image, index) => (
              <img
                key={index}
                src={image || ''}
                alt={`${title} ${index + 1}`}
                className={`slider-image ${index === currentIndex ? 'active' : ''}`}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            ))
          ) : (
            <div className="slider-placeholder">
              <p>Adicione imagens para visualizar o slider</p>
            </div>
          )}

          {/* Botões de navegação */}
          {displayImages.length > 1 && (
            <>
              <button
                className="slider-nav prev"
                onClick={goToPrevious}
                aria-label="Imagem anterior"
              >
                ‹
              </button>
              <button
                className="slider-nav next"
                onClick={goToNext}
                aria-label="Próxima imagem"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {displayImages.length > 0 && (
        <div className="thumbnails-container">
          <div className="thumbnails-wrapper">
            {displayImages.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                {image ? (
                  <img
                    src={image}
                    alt={`${title} thumbnail ${index + 1}`}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="thumbnail-placeholder">
                          <p>Imagem ${index + 1}</p>
                        </div>
                      `
                    }}
                  />
                ) : (
                  <div className="thumbnail-placeholder">
                    <p>Imagem {index + 1}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageSlider

