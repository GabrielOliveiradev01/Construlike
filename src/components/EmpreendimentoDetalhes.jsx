import { useState, useEffect } from 'react'
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
      imagemPrincipal: 'https://construlike.com.br/wp-content/uploads/2024/09/Prohidro_Sorocaba_Fachada_Conceitual_HR.jpg',
      galeria: {
        fachadas: [
          'https://construlike.com.br/wp-content/uploads/2024/09/Prohidro_Sorocaba_Fachada_Conceitual_HR.jpg'
        ],
        areasComuns: [],
        apartamento: []
      },
      plantas: [
        { nome: '1 Suíte Flex', imagem: '' },
        { nome: '2 Dorms', imagem: '' },
        { nome: '2 Dorms', imagem: '' },
        { nome: '2 Dorms', imagem: '' },
        { nome: '3 Dorms', imagem: '' }
      ],
      implantacao: '',
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

      {/* Galeria de Imagens */}
      {imagensCategoria.length > 0 && (
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
                    <img src={planta.imagem} alt={planta.nome} />
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
            <h2 className="section-title">Implantação</h2>
            <div className="implantacao-content">
              {empreendimento.implantacao ? (
                <img src={empreendimento.implantacao} alt="Implantação" />
              ) : (
                <div className="implantacao-placeholder">
                  <span>Imagem de Implantação</span>
                </div>
              )}
            </div>
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
    </div>
  )
}

export default EmpreendimentoDetalhes

