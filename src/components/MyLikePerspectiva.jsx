import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './MyLikePerspectiva.css'

const MyLikePerspectiva = () => {
  // Dados do MY LIKE
  const empreendimento = {
    nome: 'MY LIKE Campo Limpo',
    cidade: 'São Paulo',
    status: 'Futuro Lançamento',
    descricao: '2 Dorms.',
    slogan: 'Descubra o novo conceito de morar. Um empreendimento que combina conforto, modernidade e qualidade de vida.',
    endereco: 'Campo Limpo - São Paulo/SP',
    imagemPrincipal: '/Mylike/torre-mylike.png',
    galeria: {
      perspectivas: [
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
    },
    diferenciais: [
      'Espaços modernos e bem planejados',
      'Áreas comuns completas e equipadas',
      'Localização privilegiada',
      'Alto padrão de acabamento',
      'Sustentabilidade e eficiência energética'
    ]
  }

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [imagemSelecionada, setImagemSelecionada] = useState(null)
  const imagens = empreendimento.galeria.perspectivas

  // Auto-play do slider rotativo
  useEffect(() => {
    if (imagens.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) =>
          prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000) // Muda a cada 4 segundos
      return () => clearInterval(interval)
    }
  }, [imagens.length])

  const goToSlide = (index) => {
    setCurrentSlideIndex(index)
  }

  const goToPrevious = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
    )
  }, [imagens.length])

  const goToNext = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
    )
  }, [imagens.length])

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

  return (
    <div className="mylike-perspectiva-detalhes">
      {/* Botão Voltar */}
      <div className="voltar-container">
        <Link to="/empreendimentos" className="btn-voltar-top">
          ← Voltar para Empreendimentos
        </Link>
      </div>

      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${empreendimento.imagemPrincipal})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-badge">{empreendimento.status}</div>
            <h1 className="hero-title">{empreendimento.nome}</h1>
            <p className="hero-cidade">{empreendimento.cidade}</p>
            <p className="hero-descricao">{empreendimento.descricao}</p>
            {empreendimento.slogan && (
              <p className="hero-slogan">{empreendimento.slogan}</p>
            )}
          </div>
        </div>
      </div>

      {/* Galeria de Imagens com Slider Rotativo */}
      {imagens.length > 0 && (
        <section className="galeria-section">
          <div className="section-wrapper">
            <h2 className="section-title">Galeria de Perspectivas</h2>
            
            {/* Slider Principal */}
            <div className="slider-container-main">
              <div className="slider-wrapper">
                {imagens.map((imagem, index) => (
                  <div
                    key={index}
                    className={`slider-slide ${index === currentSlideIndex ? 'active' : ''}`}
                    onClick={() => setImagemSelecionada(imagem)}
                  >
                    <img src={imagem} alt={getImageName(imagem)} />
                    <div className="slide-overlay">
                      <h3 className="slide-title">{getImageName(imagem)}</h3>
                    </div>
                  </div>
                ))}
                
                {/* Botões de navegação */}
                {imagens.length > 1 && (
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

            {/* Thumbnails Bar */}
            {imagens.length > 1 && (
              <div className="thumbnails-container-bar">
                <div className="thumbnails-scroll">
                  {imagens.map((imagem, index) => (
                    <div
                      key={index}
                      className={`thumbnail-item ${index === currentSlideIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    >
                      <img src={imagem} alt={`Thumbnail ${index + 1}`} />
                      <div className="thumbnail-overlay">
                        <span>{getImageName(imagem)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Indicador de posição */}
            {imagens.length > 1 && (
              <div className="slider-indicator">
                <span>{currentSlideIndex + 1} / {imagens.length}</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Diferenciais */}
      {empreendimento.diferenciais.length > 0 && (
        <section className="diferenciais-section">
          <div className="section-wrapper">
            <h2 className="section-title">Nossos Maiores diferenciais</h2>
            <p className="section-subtitle">Exclusivos para você</p>
            <div className="diferenciais-grid">
              {empreendimento.diferenciais.map((diferencial, index) => (
                <div key={index} className="diferencial-item">
                  <div className="diferencial-icon">✓</div>
                  <p>{diferencial}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Endereço */}
      <section className="endereco-section">
        <div className="section-wrapper">
          <h2 className="section-title">Endereço do empreendimento</h2>
          <p className="endereco-text">{empreendimento.endereco}</p>
        </div>
      </section>

      {/* Modal de Imagem */}
      {imagemSelecionada && (
        <div className="image-modal" onClick={() => setImagemSelecionada(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setImagemSelecionada(null)}>×</button>
            <img src={imagemSelecionada} alt="Imagem ampliada" />
          </div>
        </div>
      )}
    </div>
  )
}

export default MyLikePerspectiva
