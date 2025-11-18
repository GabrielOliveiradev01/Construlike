import { useState } from 'react'
import './Gallery.css'

const Gallery = ({ title, images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="gallery">
      <div className="gallery-header">
        <h1>{title}</h1>
      </div>
      
      <div className="gallery-grid">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img src={image} alt={`${title} ${index + 1}`} />
            </div>
          ))
        ) : (
          <>
            {[...Array(6)].map((_, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-placeholder">
                  <p>Imagem {index + 1}<br />Adicione suas imagens aqui</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>
              ×
            </button>
            <img src={selectedImage} alt={title} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery

