import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './MyLikePerspectiva.css'

const MyLikePerspectiva = () => {
  // Dados do MY LIKE
  const empreendimento = {
    nome: 'MY LIKE Campo Limpo',
    cidade: 'São Paulo',
    status: 'Lançamento',
    descricao: '1 ou 2 dorms. 27,36 m² a 37,01 m²',
    slogan: 'Descubra o novo conceito de morar. Um empreendimento que combina conforto, modernidade e qualidade de vida.',
    endereco: 'Rua Professora Nina Stocco, 1.176 - Campo Limpo - São Paulo/SP',
    imagemPrincipal: '/Mylike/torre-mylike.png',
    informacoes: {
      incorporacao: 'Construlike Construtora e Incorporadora Ltda.',
      projetoArquitetonico: 'Rubio Luongo',
      quantidadeApartamentos: 322,
      metragens: '27,36 m² / 36,65 m² / 36,97 m² / 37,01 m²',
      tiposUnidades: '1 ou 2 dorms',
      vagasResidenciais: 103,
      vagasVinculadas: 24,
      vagasVenda: 79,
      quantidadeLojas: 2,
      loja01: '322,94 m²',
      loja02: '228,70 m²',
      vagasLojas: 4,
      areaTerreno: '2.870,65 m²',
      quantidadePavimentos: 13,
      detalhesPavimentos: '2 subsolos, térreo, 9 pavimentos e área técnica',
      numeroElevadores: 6
    },
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
    ],
    sustentabilidade: [
      'Hidrômetro individual entregue instalado',
      'Previsão para instalação de medidor de gás individual',
      'Sensores de presença nas áreas de circulação de uso comum',
      'Bacias sanitárias inteligentes',
      'Elevadores com motores de alta performance',
      'Lâmpadas econômicas (LED)',
      'Torneiras com temporizador na área comum',
      'Reaproveitamento de resíduos cimentícios nas obras',
      'Equipamentos da área comum com selo PROCEL A de eficiência energética',
      'Bicicletário para incentivo ao transporte alternativo'
    ],
    plantas: [
      { nome: '27,36 m² - 1 dorm varanda', imagem: '/Mylike/Plantas/Planta 27,36.png' },
      { nome: '37,01 m² - 2 dorms varanda e vaga', imagem: '/Mylike/Plantas/Planta 37,01a.png' },
      { nome: '37,01 m² - 2 dorms varanda vaga', imagem: '/Mylike/Plantas/Planta 37,01b.png' }
    ],
    implantacao: '/Mylike/imagem-de-implantacao.png',
    amenidades: [
      { numero: 1, nome: 'Portaria' },
      { numero: 2, nome: 'Lobby' },
      { numero: 3, nome: 'Piscina adulto' },
      { numero: 4, nome: 'Piscina infantil' },
      { numero: 5, nome: 'Bangalô' },
      { numero: 6, nome: 'Sala fitness' },
      { numero: 7, nome: 'Academia' },
      { numero: 8, nome: 'Cross training' },
      { numero: 9, nome: 'Beach arena' },
      { numero: 10, nome: 'Quadra recreativa' },
      { numero: 11, nome: 'Salão de festas' },
      { numero: 12, nome: 'Gourmet' },
      { numero: 13, nome: 'Churrasqueira' },
      { numero: 14, nome: 'Coworking' },
      { numero: 15, nome: 'Sala de reunião*' },
      { numero: 16, nome: 'Playground' },
      { numero: 17, nome: 'Brinquedoteca' },
      { numero: 18, nome: 'Espaço podcast*' },
      { numero: 19, nome: 'Salão de jogos/ teens' },
      { numero: 20, nome: 'Sala de cinema*' },
      { numero: 21, nome: 'Espaço beauty*' },
      { numero: 22, nome: 'Espaço zen*' },
      { numero: 23, nome: 'Espaço barbearia*' },
      { numero: 24, nome: 'Espaço delivery' },
      { numero: 25, nome: 'Mini market' },
      { numero: 26, nome: 'Lavanderia*' },
      { numero: 27, nome: 'Pet place' },
      { numero: 28, nome: 'Mirante*' },
      { numero: 29, nome: 'Ladder' },
      { numero: 30, nome: 'Boulevard' }
    ],
    descricaoPlantas: 'Conheça os diferentes tipos de apartamentos disponíveis no MY LIKE Campo Limpo. Cada planta foi cuidadosamente projetada para oferecer o máximo de conforto e funcionalidade.',
    descricaoImplantacao: 'O MY LIKE Campo Limpo oferece uma ampla gama de amenidades e áreas comuns pensadas para proporcionar bem-estar, lazer e praticidade aos moradores. Um verdadeiro conceito de vida moderna e completa.'
  }

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [imagemSelecionada, setImagemSelecionada] = useState(null)
  const [implantacaoAberta, setImplantacaoAberta] = useState(false)
  const [plantaSelecionada, setPlantaSelecionada] = useState(null)
  const imagens = empreendimento.galeria.perspectivas

  // Scroll para o topo quando o componente for montado
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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
    let name = filename
      .replace(/Prohidro_Morumbi_/g, '')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    
    // Ajustes de nomes
    name = name.replace(/Cross Fit/g, 'Cross Training')
    name = name.replace(/^Play$/g, 'Playground')
    
    return name
  }

  return (
    <div className="mylike-perspectiva-detalhes">
      {/* Botão Voltar */}
      <div className="voltar-container">
        <Link to="/empreendimentos" className="btn-voltar-top">
          ← Voltar para Empreendimentos
        </Link>
      </div>

      {/* Hero Section com Imagem */}
      <div className="hero-section hero-section-image">
        <img 
          src={empreendimento.imagemPrincipal} 
          alt={empreendimento.nome}
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-badge">{empreendimento.status}</div>
            <div className="hero-logo-container">
              <img src="/logo-mylike.png" alt="MY LIKE" className="hero-mylike-logo" />
            </div>
            <p className="hero-cidade">{empreendimento.cidade}</p>
            <p className="hero-descricao">{empreendimento.descricao}</p>
            {empreendimento.slogan && (
              <p className="hero-slogan">{empreendimento.slogan}</p>
            )}
          </div>
        </div>
      </div>

      {/* Vídeo abaixo do texto */}
      <section className="video-section">
        <div className="section-wrapper">
          <video
            className="content-video"
            controls
            playsInline
          >
            <source
              src="https://66670533221b2cee3d4a1fa219156d7b.cdn.bubble.io/f1763558662691x199743315729881120/189801d4-54aa-464d-89f2-3fb32b388723.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

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

      {/* Galeria de Plantas */}
      {empreendimento.plantas && empreendimento.plantas.length > 0 && (
        <section className="plantas-section">
          <div className="section-wrapper">
            <h2 className="section-title">Galeria de Plantas</h2>
            <p className="section-subtitle">Todo o conforto que seu apê precisa ter.</p>
            {empreendimento.descricaoPlantas && (
              <p className="section-description">{empreendimento.descricaoPlantas}</p>
            )}
            <div className="plantas-grid">
              {empreendimento.plantas.map((planta, index) => (
                <div key={index} className="planta-item">
                  {planta.imagem ? (
                    <img 
                      src={planta.imagem} 
                      alt={planta.nome}
                      onClick={() => setPlantaSelecionada(planta)}
                      style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <div className="planta-placeholder">
                      <span>{planta.nome}</span>
                    </div>
                  )}
                  <p className="planta-nome">{planta.nome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Implantação */}
      <section className="implantacao-section">
        <div className="section-wrapper">
          <h2 className="section-title">Implantação e Amenidades</h2>
          {empreendimento.descricaoImplantacao && (
            <p className="section-description">{empreendimento.descricaoImplantacao}</p>
          )}
          <div className="implantacao-content">
            {empreendimento.implantacao ? (
              <img 
                src={empreendimento.implantacao} 
                alt="Implantação" 
                onClick={() => setImplantacaoAberta(true)}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <div className="implantacao-placeholder">
                <span>Imagem de Implantação</span>
              </div>
            )}
          </div>
          
          {/* Lista de Amenidades */}
          {empreendimento.amenidades && empreendimento.amenidades.length > 0 && (
            <div className="amenidades-container">
              <h3 className="amenidades-title">Lazer Disponíveis</h3>
              <div className="amenidades-grid">
                {empreendimento.amenidades.map((amenidade, index) => (
                  <div key={index} className="amenidade-item">
                    <div className="amenidade-numero">{amenidade.numero}</div>
                    <span>{amenidade.nome}</span>
                  </div>
                ))}
              </div>
              <p className="amenidades-note">* Lazer opcionais sujeitas a alterações</p>
              
              {/* Equipado e Decorados */}
              <div className="equipado-decorados-card">
                <img 
                  src="/Mylike/equipadasedecoradas.png" 
                  alt="Equipado e Decorados"
                  className="equipado-decorados-image"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Informações do Empreendimento */}
      <section className="informacoes-section">
        <div className="section-wrapper">
          <h2 className="section-title">Informações do Empreendimento</h2>
          <div className="informacoes-grid">
            <div className="informacao-item">
              <span className="informacao-label">Incorporação e Construção:</span>
              <span className="informacao-value">{empreendimento.informacoes.incorporacao}</span>
            </div>
            <div className="informacao-item">
              <span className="informacao-label">Projeto Arquitetônico:</span>
              <span className="informacao-value">{empreendimento.informacoes.projetoArquitetonico}</span>
            </div>
            <div className="informacao-item">
              <span className="informacao-label">Quantidade de Apartamentos:</span>
              <span className="informacao-value">{empreendimento.informacoes.quantidadeApartamentos} unidades</span>
            </div>
            <div className="informacao-item">
              <span className="informacao-label">Metragens:</span>
              <span className="informacao-value">{empreendimento.informacoes.metragens}</span>
            </div>
            <div className="informacao-item">
              <span className="informacao-label">Tipos de Unidades:</span>
              <span className="informacao-value">{empreendimento.informacoes.tiposUnidades}</span>
            </div>
            <div className="informacao-item">
              <span className="informacao-label">Vagas Residenciais:</span>
              <span className="informacao-value">{empreendimento.informacoes.vagasResidenciais} vagas ({empreendimento.informacoes.vagasVinculadas} vinculadas e {empreendimento.informacoes.vagasVenda} para venda)</span>
            </div>
            <div className="informacao-item">
              <span className="informacao-label">Quantidade de Lojas:</span>
              <span className="informacao-value">{empreendimento.informacoes.quantidadeLojas} lojas (Loja 01: {empreendimento.informacoes.loja01} e Loja 02: {empreendimento.informacoes.loja02})</span>
            </div>
            <div className="informacao-item">
              <span className="informacao-label">Vagas Lojas:</span>
              <span className="informacao-value">{empreendimento.informacoes.vagasLojas} vagas</span>
            </div>
            <div className="informacao-item">
              <span className="informacao-label">Área do Terreno:</span>
              <span className="informacao-value">{empreendimento.informacoes.areaTerreno}</span>
            </div>
            <div className="informacao-item">
              <span className="informacao-label">Quantidade de Pavimentos:</span>
              <span className="informacao-value">{empreendimento.informacoes.quantidadePavimentos} ({empreendimento.informacoes.detalhesPavimentos})</span>
            </div>
            <div className="informacao-item">
              <span className="informacao-label">Número de Elevadores:</span>
              <span className="informacao-value">{empreendimento.informacoes.numeroElevadores} elevadores</span>
            </div>
          </div>
        </div>
      </section>

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

      {/* Sustentabilidade */}
      {empreendimento.sustentabilidade && empreendimento.sustentabilidade.length > 0 && (
        <section className="sustentabilidade-section">
          <div className="section-wrapper">
            <h2 className="section-title">Itens de Sustentabilidade</h2>
            <div className="sustentabilidade-grid">
              {empreendimento.sustentabilidade.map((item, index) => (
                <div key={index} className="sustentabilidade-item">
                  <div className="sustentabilidade-icon">🌱</div>
                  <p>{item}</p>
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

      {/* Foto Aérea após Endereço */}
      <section className="imagem-grande-section">
        <div className="section-wrapper">
          <img 
            src="/Mylike/Foto aerea mylike.png" 
            alt="Foto aérea do empreendimento"
            className="imagem-grande"
          />
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

      {/* Modal de Implantação */}
      {implantacaoAberta && empreendimento.implantacao && (
        <div className="image-modal" onClick={() => setImplantacaoAberta(false)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setImplantacaoAberta(false)}>×</button>
            <img src={empreendimento.implantacao} alt="Implantação" />
          </div>
        </div>
      )}

      {/* Modal de Planta */}
      {plantaSelecionada && (
        <div className="planta-modal" onClick={() => setPlantaSelecionada(null)}>
          <div className="planta-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close planta-modal-close" onClick={() => setPlantaSelecionada(null)}>×</button>
            <img src={plantaSelecionada.imagem} alt={plantaSelecionada.nome} />
            <p className="planta-modal-nome">{plantaSelecionada.nome}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyLikePerspectiva
