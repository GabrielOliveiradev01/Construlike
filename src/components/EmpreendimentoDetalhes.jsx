import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import './EmpreendimentoDetalhes.css'

const EmpreendimentoDetalhes = () => {
  const { slug } = useParams()

  // Scroll para o topo quando o componente for montado ou o slug mudar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])
  
  // Dados dos empreendimentos
  const empreendimentos = {
    'idea-home-resort': {
      nome: 'Idea Home Resort',
      cidade: 'São Paulo',
      status: 'Em Obras',
      descricao: '2 dorms.',
      slogan: 'A MENTE CRIA DESEJOS, DESEJOS ABREM ESPAÇOS, ESPAÇOS QUE SE TRANSFORMAM EM SUA NOVA FORMA DE VIVER.',
      endereco: 'Av. Itaquera 734 - Aricanduva',
      imagemPrincipal: 'https://construlike.com.br/wp-content/uploads/2024/09/MSH_Itaquera_Fachada_Diurna_HR.jpg',
      galeria: {
        fachadas: [
          'https://construlike.com.br/wp-content/uploads/2024/09/MSH_Itaquera_Fachada_Diurna_HR.jpg'
        ],
        areasComuns: [],
        apartamento: []
      },
      diferenciais: [
        'Eletrodomésticos das áreas comuns entregues com selo Procel A',
        'Estudo de concorrência entre administradoras de condomínio',
        'Áreas verdes que facilitam a permeabilidade da chuva no solo',
        'Áreas comuns entregues equipadas com kit de acessórios para maior comodidade',
        'Elevadores com Mini market',
        'Guarita blindada chamada inteligente',
        'Infraestrutura para ar-condicionado (fitness, salão de festas, mini market e portaria)',
        'Mini Market',
        'Guarita Blindada',
        'Lavanderia Coletiva',
        'Infraestrutura instalada para câmeras de segurança e proteção',
        'Áreas comuns entregues equipadas e decoradas conforme o memorial descritivo',
        'Lixeira preparada para coleta seletiva',
        'Captação e reutilização de água da chuva',
        'Paisagismo com plantas nativas que geram pouca manutenção',
        'Infraestrutura para internet em todas as áreas comuns cobertas',
        'Espaço delivery',
        'Sensores de presença nos halls dos apartamentos',
        'Ponto de TV na sala e previsão para futuro cabeamento nos dormitórios',
        'Torneiras com dispositivo para economia de água',
        'Lâmpadas de LED entregues no hall e na varanda dos apartamentos',
        'Amplas janelas permitindo maior iluminação e ventilação naturais',
        'Banheiro, área de serviço e terraço impermeabilizados',
        'Ponto de filtro na cozinha',
        'Infraestrutura para 1 ponto de ar-condicionado',
        'Previsão para individualização de medição de gás com ponto de fogão',
        'Vaso sanitário com duplo acionamento',
        'Materiais e acabamentos que facilitam a limpeza e a manutenção',
        'Banheiros entregues 100% revestidos em cerâmica'
      ],
      andamentoObras: {
        fundacao: 100,
        estrutura: 100,
        alvenaria: 100,
        instalacoes: 99,
        acabamento: 99,
        fachada: 100,
        pintura: 99
      }
    },
    'mirage-sao-paulo': {
      nome: 'Mirage São Paulo',
      cidade: 'Sorocaba',
      status: 'Em Obras',
      descricao: '2 e 3 Dorms. c/ Suíte',
      slogan: 'Perto de tudo, ideal para você. Ares tranquilos e funcionalidade admirável, essa é a cidade de Sorocaba. Entre áreas verdes, segurança e renomadas indústrias, há qualidade de vida, diversão e alegria. Você no centro de tudo, próximos a importantes eixos comerciais, escolas renomadas e mobilidade acessível. É mais que uma Mirage, é um novo conceito de viver bem.',
      endereco: 'Av. São Paulo, 2.250 - Jardim Gonçalves, Sorocaba - SP',
      imagemPrincipal: '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Fachada_Diurna_HR.JPG',
      galeria: {
        fachadas: [
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Fachada_Conceitual_R03.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Fachada_Diurna_HR.JPG',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Fachada_Lojas_HR.jpg'
        ],
        areasComuns: [
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Acesso_R02.JPG',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Aqua_Play_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Beach_Sports_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Bicicletario_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Brinquedoteca_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Churrasqueira_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Cine_Open_Air_HR.JPG',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Cinema_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Coworking_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Cross_Fit_R02.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Delivery_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Festas_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Fitness_R04.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Ginastica_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Hall_R02.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Jogos_Gamer_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Jogos_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Ladder_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Lavanderia_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Pet_Place_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Piscina_Borda_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Piscina_Deck_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Piscina_Voo_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Play_Aventura_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Play_Baby_HR.JPG',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Praca_Central_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Praca_do_Fogo_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Praca_do_Luau_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Pub_Jogos_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Quadra_HR.JPG',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_StudioMakeup_HR.jpg'
        ],
        apartamento: [
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Living_35m2_HR.jpg',
          '/MirageSaoPaulo/Perspectiva/Prohidro_Sorocaba_Living_60m2_HR.jpg'
        ]
      },
      plantas: [
        { nome: 'Tipo A Garden', imagem: '/MirageSaoPaulo/Plantas/Prohidro_Sorocaba_Tipo_A_Garden_HR.jpg' },
        { nome: 'Tipo A Garden (Alternativa)', imagem: '/MirageSaoPaulo/Plantas/Prohidro_Sorocaba_Tipo_A_Garden_HR_1.JPG' },
        { nome: 'Tipo A', imagem: '/MirageSaoPaulo/Plantas/Prohidro_Sorocaba_Tipo_A_HR.JPG' },
        { nome: 'Tipo B', imagem: '/MirageSaoPaulo/Plantas/Prohidro_Sorocaba_Tipo_B_HR.JPG' },
        { nome: 'Tipo C', imagem: '/MirageSaoPaulo/Plantas/Prohidro_Sorocaba_Tipo_C_HR.jpg' },
        { nome: 'Tipo C Ampliado', imagem: '/MirageSaoPaulo/Plantas/Prohidro_Sorocaba_Tipo_C_Ampliado_HR.JPG' },
        { nome: 'Tipo D', imagem: '/MirageSaoPaulo/Plantas/Prohidro_Sorocaba_Tipo_D_HR.JPG' }
      ],
      implantacao: '/MirageSaoPaulo/implantacao.png',
      descricaoImplantacao: 'O Mirage São Paulo oferece uma ampla gama de amenidades e áreas comuns pensadas para proporcionar bem-estar, lazer e praticidade aos moradores. Um verdadeiro conceito de vida moderna e completa.',
      amenidades: [
        { numero: 1, nome: 'Portaria' },
        { numero: 2, nome: 'Delivery' },
        { numero: 3, nome: 'Piscina com Borda Infinita' },
        { numero: 4, nome: 'Deck Molhado' },
        { numero: 5, nome: 'Churrasqueira a Carvão' },
        { numero: 6, nome: 'Horta' },
        { numero: 7, nome: 'Coworking' },
        { numero: 8, nome: 'Lavanderia' },
        { numero: 9, nome: 'Hall A' },
        { numero: 10, nome: 'Salão de Festas' },
        { numero: 11, nome: 'Brinquedoteca' },
        { numero: 12, nome: 'Play Baby' },
        { numero: 13, nome: 'Acquaplay' },
        { numero: 14, nome: 'Churrasqueira Parrilla' },
        { numero: 15, nome: 'Praça do Fogo' },
        { numero: 16, nome: 'Youtuber e Podcast' },
        { numero: 17, nome: 'Studio Make Up' },
        { numero: 18, nome: 'Hall B' },
        { numero: 19, nome: 'Salão de Jogos' },
        { numero: 20, nome: 'Jogos Gamer' },
        { numero: 21, nome: 'Piscina com SPA' },
        { numero: 22, nome: 'Piscina com Biribol' },
        { numero: 23, nome: 'Churrasqueiras a Gás' },
        { numero: 24, nome: 'Play Aventura' },
        { numero: 25, nome: 'Espaço Boteco' },
        { numero: 26, nome: 'Mini Market' },
        { numero: 27, nome: 'Hall C' },
        { numero: 28, nome: 'Fitness' },
        { numero: 29, nome: 'Ginástica / Yoga' },
        { numero: 30, nome: 'Cinema' },
        { numero: 31, nome: 'Praça do Luau' },
        { numero: 32, nome: 'Crossfit' },
        { numero: 33, nome: 'Quadra Recreativa' },
        { numero: 34, nome: 'Beach Tennis' },
        { numero: 35, nome: 'Cine Open Air' },
        { numero: 36, nome: 'Pet Place' },
        { numero: 37, nome: 'Entrada de veículos torre A' },
        { numero: 38, nome: 'Entrada de veículos torre B' },
        { numero: 39, nome: 'Entrada de veículos torre C' },
        { numero: 'A', nome: 'Centro Comercial' }
      ],
      diferenciais: [
        'Acessibilidade para todas as áreas comuns',
        'Iluminação de LED nas áreas de circulação de uso comum',
        'Elevadores com eficiência energética',
        'Projeto segundo norma de desempenho térmico, lumínico e acústico',
        'App de controle e agendamento de áreas comuns e avisos',
        'Wi-Fi entregue em algumas áreas comuns',
        'Infraestrutura para ar-condicionado no living (exceto para a planta tipo C)',
        'Isolamento acústico nas alvenarias dos dormitórios',
        'Tomada USB nos dormitórios',
        'Utilização de esquadrias nos dormitórios para persianas de enrolar'
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
        'Tomada para carro elétrico'
      ],
      andamentoObras: {
        torres: [
          {
            nome: 'Torre C',
            dataAtualizacao: '12/11/2025',
            terraplanagem: 100,
            contencao: 100,
            fundacao: 100,
            estrutura: 100,
            alvenaria: 100,
            instalacoes: 93,
            acabamento: 93,
            fachada: 100,
            pintura: 75
          },
          {
            nome: 'Torre B',
            dataAtualizacao: '12/11/2025',
            terraplanagem: 100,
            contencao: 100,
            fundacao: 100,
            estrutura: 100,
            alvenaria: 95,
            instalacoes: 70,
            acabamento: 60,
            fachada: 50,
            pintura: 40
          },
          {
            nome: 'Torre A',
            dataAtualizacao: '12/11/2025',
            terraplanagem: 100,
            contencao: 100,
            fundacao: 100,
            estrutura: 75,
            alvenaria: 40,
            instalacoes: 25,
            acabamento: 10,
            fachada: 0,
            pintura: 0
          }
        ]
      }
    },
    'mirage-joao-dias': {
      nome: 'Mirage João Dias',
      cidade: 'São Paulo',
      status: 'Em Obras',
      descricao: '2 Dorms.',
      slogan: 'More em uma região muito especial e bem desenvolvida, que oferece um amplo leque de estabelecimentos de comércio, entretenimento e lazer. Isso sem falar nas várias opções de acesso e na proximidade com grandes rodovias e as marginais. Torne seus dias únicos. Viva e compartilhe cada momento. Aproveite a agitação da cidade e, ao mesmo tempo, a calmaria de viver em um bairro residencial e completo. Sem trocadilho, morar aqui é escolher dar novos dias para a sua vida.',
      endereco: 'AV. JOÃO DIAS, 3.296 - ESQUINA COM R. LUIZ GRASSMANN, 27 | Rua Catuti, 46 - loja 7 - Vila Andrade',
      imagemPrincipal: 'https://construlike.com.br/wp-content/uploads/2024/10/Prohidro_Joao_Dias_Fachada_HR.jpg',
      galeria: {
        fachadas: [
          'https://construlike.com.br/wp-content/uploads/2024/10/Prohidro_Joao_Dias_Fachada_HR.jpg'
        ],
        areasComuns: [],
        apartamento: []
      },
      diferenciais: [],
      andamentoObras: {
        dataAtualizacao: '12/11/2025',
        terraplanagem: 100,
        contencao: 100,
        fundacao: 99,
        estrutura: 43,
        alvenaria: 47,
        instalacoes: 28,
        acabamento: 0,
        fachada: 0,
        pintura: 0
      }
    }
  }

  const empreendimento = empreendimentos[slug]
  const [categoriaGaleria, setCategoriaGaleria] = useState('fachadas')
  const [imagemSelecionada, setImagemSelecionada] = useState(null)
  const [plantaSelecionada, setPlantaSelecionada] = useState(null)
  const [implantacaoAberta, setImplantacaoAberta] = useState(false)
  
  // Estados para slider de perspectivas (Mirage São Paulo)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  
  // Obter todas as perspectivas do Mirage São Paulo
  const getPerspectivasMirageSaoPaulo = () => {
    if (slug === 'mirage-sao-paulo' && empreendimento) {
      const perspectivas = [
        ...(empreendimento.galeria?.fachadas || []),
        ...(empreendimento.galeria?.areasComuns || []),
        ...(empreendimento.galeria?.apartamento || [])
      ]
      return perspectivas
    }
    return []
  }
  
  const perspectivas = getPerspectivasMirageSaoPaulo()

  // Auto-play do slider rotativo para perspectivas
  useEffect(() => {
    if (perspectivas.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) =>
          prevIndex === perspectivas.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000) // Muda a cada 4 segundos
      return () => clearInterval(interval)
    }
  }, [perspectivas.length])

  const goToSlide = (index) => {
    setCurrentSlideIndex(index)
  }

  const goToPrevious = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? perspectivas.length - 1 : prevIndex - 1
    )
  }, [perspectivas.length])

  const goToNext = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === perspectivas.length - 1 ? 0 : prevIndex + 1
    )
  }, [perspectivas.length])

  // Navegação com teclado para perspectivas
  useEffect(() => {
    if (perspectivas.length === 0) return
    
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [goToPrevious, goToNext, perspectivas.length])

  // Nomes amigáveis para as imagens do Mirage São Paulo
  const getImageNameMirage = (imagePath) => {
    const filename = imagePath.split('/').pop().replace(/\.(jpg|jpeg|JPG)$/i, '').replace('_HR', '').replace('_R02', '').replace('_R03', '').replace('_R04', '')
    let name = filename
      .replace(/Prohidro_Sorocaba_/g, '')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    
    // Ajustes de nomes
    name = name.replace(/Cross Fit/g, 'Cross Training')
    name = name.replace(/Play Aventura/g, 'Playground Aventura')
    name = name.replace(/Play Baby/g, 'Playground Baby')
    name = name.replace(/Living 35m2/g, 'Living 35m²')
    name = name.replace(/Living 60m2/g, 'Living 60m²')
    name = name.replace(/Praca/g, 'Praça')
    name = name.replace(/Cine Open Air/g, 'Cinema ao Ar Livre')
    
    return name
  }

  if (!empreendimento) {
    return (
      <div className="empreendimento-detalhes">
        <div className="not-found">
          <h1>Empreendimento não encontrado</h1>
          <Link to="/empreendimentos" className="btn-voltar">Voltar para Empreendimentos</Link>
        </div>
      </div>
    )
  }

  const imagensCategoria = empreendimento.galeria[categoriaGaleria] || []

  return (
    <div className="empreendimento-detalhes">
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

      {/* Galeria de Perspectivas (Mirage São Paulo) */}
      {slug === 'mirage-sao-paulo' && perspectivas.length > 0 && (
        <section className="galeria-section">
          <div className="section-wrapper">
            <h2 className="section-title">Galeria de Perspectivas</h2>
            
            {/* Slider Principal */}
            <div className="slider-container-main">
              <div className="slider-wrapper">
                {perspectivas.map((imagem, index) => (
                  <div
                    key={index}
                    className={`slider-slide ${index === currentSlideIndex ? 'active' : ''}`}
                    onClick={() => setImagemSelecionada(imagem)}
                  >
                    <img src={imagem} alt={getImageNameMirage(imagem)} />
                    <div className="slide-overlay">
                      <h3 className="slide-title">{getImageNameMirage(imagem)}</h3>
                    </div>
                  </div>
                ))}
                
                {/* Botões de navegação */}
                {perspectivas.length > 1 && (
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
            {perspectivas.length > 1 && (
              <div className="thumbnails-container-bar">
                <div className="thumbnails-scroll">
                  {perspectivas.map((imagem, index) => (
                    <div
                      key={index}
                      className={`thumbnail-item ${index === currentSlideIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    >
                      <img src={imagem} alt={`Thumbnail ${index + 1}`} />
                      <div className="thumbnail-overlay">
                        <span>{getImageNameMirage(imagem)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Indicador de posição */}
            {perspectivas.length > 1 && (
              <div className="slider-indicator">
                <span>{currentSlideIndex + 1} / {perspectivas.length}</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Galeria de Imagens (apenas para outros empreendimentos, não Mirage São Paulo) */}
      {slug !== 'mirage-sao-paulo' && imagensCategoria.length > 0 && (
        <section className="galeria-section">
          <div className="section-wrapper">
            <h2 className="section-title">Galeria de Imagens</h2>
            <div className="galeria-categorias">
              {Object.keys(empreendimento.galeria).map((categoria) => {
                const imagens = empreendimento.galeria[categoria]
                if (imagens.length === 0) return null
                return (
                  <button
                    key={categoria}
                    className={`categoria-btn ${categoriaGaleria === categoria ? 'active' : ''}`}
                    onClick={() => {
                      setCategoriaGaleria(categoria)
                      setImagemSelecionada(null)
                    }}
                  >
                    {categoria === 'fachadas' ? 'Fachadas' : 
                     categoria === 'areasComuns' ? 'Áreas comuns' : 
                     'Apartamento'}
                  </button>
                )
              })}
            </div>
            <div className="galeria-grid">
              {imagensCategoria.map((imagem, index) => (
                <div
                  key={index}
                  className="galeria-item"
                  onClick={() => setImagemSelecionada(imagem)}
                >
                  <img src={imagem} alt={`${empreendimento.nome} - ${categoriaGaleria} ${index + 1}`} />
                </div>
              ))}
            </div>
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

      {/* Galeria de Plantas */}
      {empreendimento.plantas && empreendimento.plantas.length > 0 && (
        <section className="plantas-section">
          <div className="section-wrapper">
            <h2 className="section-title">Galeria de Plantas</h2>
            <p className="section-subtitle">Todo o conforto que seu apê precisa ter.</p>
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
      {empreendimento.implantacao && (
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
              </div>
            )}
          </div>
        </section>
      )}

      {/* Itens de Sustentabilidade */}
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

      {/* Andamento de Obras */}
      {empreendimento.andamentoObras && (
        <section className="andamento-section">
          <div className="section-wrapper">
            <h2 className="section-title">Andamento de obras</h2>
            {empreendimento.andamentoObras.torres ? (
              // Andamento com múltiplas torres (Mirage São Paulo)
              <div className="andamento-torres">
                {empreendimento.andamentoObras.torres.map((torre, torreIndex) => (
                  <div key={torreIndex} className="torre-container">
                    <div className="torre-header">
                      <h3 className="torre-nome">Etapas Atuais {torre.nome}</h3>
                      <span className="torre-data">(Atualizado em {torre.dataAtualizacao})</span>
                    </div>
                    <div className="andamento-grid">
                      {Object.entries(torre).map(([fase, percentual]) => {
                        if (fase === 'nome' || fase === 'dataAtualizacao') return null
                        return (
                          <div key={fase} className="andamento-item">
                            <div className="andamento-header">
                              <span className="andamento-fase">
                                {fase === 'terraplanagem' ? 'Terraplanagem' :
                                 fase === 'contencao' ? 'Contenção' :
                                 fase === 'fundacao' ? 'Fundação' :
                                 fase === 'estrutura' ? 'Estrutura' :
                                 fase === 'alvenaria' ? 'Alvenaria' :
                                 fase === 'instalacoes' ? 'Instalações' :
                                 fase === 'acabamento' ? 'Acabamento' :
                                 fase === 'fachada' ? 'Fachada' :
                                 'Pintura'}
                              </span>
                              <span className="andamento-percentual">{percentual}%</span>
                            </div>
                            <div className="andamento-bar">
                              <div 
                                className="andamento-progress" 
                                style={{ width: `${percentual}%` }}
                              ></div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : empreendimento.andamentoObras.dataAtualizacao ? (
              // Andamento simples com data (Mirage João Dias)
              <div className="andamento-simples">
                <div className="andamento-data">
                  <span>Fase de Obras (Atualizado em {empreendimento.andamentoObras.dataAtualizacao})</span>
                </div>
                <div className="andamento-grid">
                  {Object.entries(empreendimento.andamentoObras).map(([fase, percentual]) => {
                    if (fase === 'dataAtualizacao') return null
                    return (
                      <div key={fase} className="andamento-item">
                        <div className="andamento-header">
                          <span className="andamento-fase">
                            {fase === 'terraplanagem' ? 'Terraplanagem' :
                             fase === 'contencao' ? 'Contenção' :
                             fase === 'fundacao' ? 'Fundação' :
                             fase === 'estrutura' ? 'Estrutura' :
                             fase === 'alvenaria' ? 'Alvenaria' :
                             fase === 'instalacoes' ? 'Instalações' :
                             fase === 'acabamento' ? 'Acabamento' :
                             fase === 'fachada' ? 'Fachada' :
                             'Pintura'}
                          </span>
                          <span className="andamento-percentual">{percentual}%</span>
                        </div>
                        <div className="andamento-bar">
                          <div 
                            className="andamento-progress" 
                            style={{ width: `${percentual}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              // Andamento simples sem torres (Idea Home Resort)
              <div className="andamento-grid">
                {Object.entries(empreendimento.andamentoObras).map(([fase, percentual]) => (
                  <div key={fase} className="andamento-item">
                    <div className="andamento-header">
                      <span className="andamento-fase">
                        {fase === 'fundacao' ? 'Fundação' :
                         fase === 'estrutura' ? 'Estrutura' :
                         fase === 'alvenaria' ? 'Alvenaria' :
                         fase === 'instalacoes' ? 'Instalações' :
                         fase === 'acabamento' ? 'Acabamento' :
                         fase === 'fachada' ? 'Fachada' :
                         'Pintura'}
                      </span>
                      <span className="andamento-percentual">{percentual}%</span>
                    </div>
                    <div className="andamento-bar">
                      <div 
                        className="andamento-progress" 
                        style={{ width: `${percentual}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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

      {/* Modal de Implantação */}
      {implantacaoAberta && empreendimento.implantacao && (
        <div className="image-modal" onClick={() => setImplantacaoAberta(false)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setImplantacaoAberta(false)}>×</button>
            <img src={empreendimento.implantacao} alt="Implantação" />
          </div>
        </div>
      )}
    </div>
  )
}

export default EmpreendimentoDetalhes

