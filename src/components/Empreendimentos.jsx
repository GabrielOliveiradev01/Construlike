import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Empreendimentos.css'

const Empreendimentos = () => {
  // Scroll para o topo quando o componente for montado
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  // Lista de empreendimentos que terão o botão "Saiba Mais"
  const empreendimentosComBotao = [
    'Idea Home Resort',
    'Mirage São Paulo',
    'Mirage João Dias',
    'MY LIKE Campo Limpo'
  ]

  // Mapeamento de nomes para slugs
  const nomeParaSlug = {
    'Idea Home Resort': 'idea-home-resort',
    'Mirage São Paulo': 'mirage-sao-paulo',
    'Mirage João Dias': 'mirage-joao-dias',
    'MY LIKE Campo Limpo': 'mylike-perspectiva'
  }

  const emObras = [
    {
      nome: 'Idea Home Resort',
      cidade: 'São Paulo',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/09/MSH_Itaquera_Fachada_Diurna_HR.jpg',
      descricao: '2 dorms. 39m² e 40m²',
      status: 'Em Obras'
    },
    {
      nome: 'Mirage São Paulo',
      cidade: 'Sorocaba',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/09/Prohidro_Sorocaba_Fachada_Conceitual_HR.jpg',
      descricao: '2 e 3 Dorms. c/ Suíte. 37,80m² a 60,09m². 1 vaga',
      status: 'Em Obras'
    },
    {
      nome: 'Mirage João Dias',
      cidade: 'São Paulo',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/Prohidro_Joao_Dias_Fachada_HR.jpg',
      descricao: '2 Dorms. 34m² e 43 m²',
      status: 'Em Obras'
    }
  ]

  const lancamento = [
    {
      nome: 'MY LIKE Campo Limpo',
      cidade: 'São Paulo',
      imagem: '/Mylike/torre Mylike.png',
      descricao: '2 Dorms.',
      status: 'Lançamento'
    }
  ]

  const futuroLancamento = [
    {
      nome: 'Av. Itavuvu',
      cidade: 'Sorocaba',
      imagem: 'https://construlike.com.br/wp-content/uploads/2025/08/ITAVUVU-oficial.png',
      descricao: '2 Dorms.',
      status: 'Futuro Lançamento'
    },
    {
      nome: 'Av. Eng. Carlos Reinaldo Mendes',
      cidade: 'Sorocaba',
      imagem: 'https://construlike.com.br/wp-content/uploads/2025/08/CCS.png',
      descricao: '',
      status: 'Futuro Lançamento'
    },
    {
      nome: 'Av. Washington Luís',
      cidade: 'Sorocaba',
      imagem: 'https://construlike.com.br/wp-content/uploads/2025/08/Washington-Luis.png',
      descricao: '',
      status: 'Futuro Lançamento'
    },
    {
      nome: 'Rua Augusto Lippel',
      cidade: 'Sorocaba',
      imagem: 'https://construlike.com.br/wp-content/uploads/2025/08/Campolim.png',
      descricao: '',
      status: 'Futuro Lançamento'
    },
    {
      nome: 'R. Paraisópolis',
      cidade: 'São Paulo',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/11/HEBE-CAMARGO_pin.jpg',
      descricao: '',
      status: 'Futuro Lançamento'
    },
    {
      nome: 'R. Jandyr Peres',
      cidade: 'Indaiatuba',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/11/INDAIATUBA-MAPS.jpg',
      descricao: '',
      status: 'Futuro Lançamento'
    }
  ]

  const entregues = [
    {
      nome: 'Vistta Santa Rosália',
      cidade: 'Sorocaba',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/023F7607-A59D-435E-B776-80A96C5A16CD_4_5005_c.jpeg',
      endereco: 'Rua Aparecida, 1530 - Jardim Santa Rosália - Sorocaba/SP',
      descricao: '2 Dorms (45m²) e 3 Dorms (59m²) - 212 unidades',
      dataEntrega: 'Out/2024'
    },
    {
      nome: 'Eleva Cupecê',
      cidade: 'São Paulo',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/PHOTO-2024-02-16-18-40-38.jpg',
      endereco: 'Rua Marco Gagliano, 55 - Cupecê - São Paulo/SP',
      descricao: '2 dorms - (36, 42 e 48 m²) - 292 unidades',
      dataEntrega: 'Mar/2022'
    },
    {
      nome: 'Eleva Tatuapé',
      cidade: 'São Paulo',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/FOTO-FINAL-ELEVA-TATUAPE.jpg',
      endereco: 'Rua Alferes Frazão, 11 - Tatuapé - São Paulo/SP',
      descricao: '2 dorms (34 e 40 m²) - 172 unidades',
      dataEntrega: 'Ago/2022'
    },
    {
      nome: 'To be free',
      cidade: 'São Paulo',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/SITE_TO-BE-FREE-1-copia.jpg',
      endereco: 'Rua Álvaro de carvalho, 163 - Centro - São Paulo/SP',
      descricao: '1 e 2 dorms (22, 25 e 50 m2) - 124 unidades',
      dataEntrega: 'Dez/2020'
    },
    {
      nome: 'Villa Parque',
      cidade: 'Campinas',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/023F7607-A59D-435E-B776-80A96C5A16CD_4_5005_c.jpeg',
      endereco: 'Rua João Teodoro, 445 - Vila Industrial - Campinas/SP',
      descricao: 'Apartamentos de 47m² com 2 quartos',
      dataEntrega: 'Mar/2020'
    },
    {
      nome: 'Visuale Parque Ecológico',
      cidade: 'São Paulo',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/SITE_TO-BE-FREE-1-copia.jpg',
      endereco: 'Av. Cangaiba, 3564 - Cangaíba - São Paulo/SP',
      descricao: 'Apartamentos de 46m² e 47m²',
      dataEntrega: 'Jun/2018'
    },
    {
      nome: 'Vista Politécnica',
      cidade: 'São Paulo',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/SITE_VISTA-POLITECNICA.jpg',
      endereco: 'Rua Clemente Berninin,160 - Rio Pequeno - São Paulo/SP',
      descricao: 'Apartamentos de 45m² e 52m²',
      dataEntrega: 'Jun/2016'
    },
    {
      nome: 'Parque das Flores',
      cidade: 'Sumaré',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/SITE_PQ-DAS-FLORES.jpg',
      endereco: 'Rua Itaipu, 140 - Residencial Guaíra - Sumaré/SP',
      descricao: 'Apartamentos de 45m²',
      dataEntrega: 'Abr/2017'
    },
    {
      nome: 'MIRANTE SANTA ROSÁLIA',
      cidade: 'Sorocaba',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/MIRANTE-STA-ROSALIA-1.jpg',
      endereco: 'Rua Prof. Luiz de Vasconcelos,160 - Vila Progresso - Sorocaba/SP',
      descricao: 'Apartamentos de 51m² e 64m².',
      dataEntrega: 'Dez/2014'
    },
    {
      nome: 'Onix',
      cidade: 'Sorocaba',
      imagem: 'https://construlike.com.br/wp-content/uploads/2024/10/residencial-onix2.jpg',
      endereco: 'Rua José Marques da Silva, 231 Vila São Caetano - Sorocaba/SP',
      descricao: 'Apartamentos de 47m², 49 m² à 53 m²',
      dataEntrega: 'Out/2013'
    }
  ]

  return (
    <div className="empreendimentos-page">
      <div className="empreendimentos-content">
        <h1 className="page-title">Empreendimentos</h1>

        {/* CTA MY LIKE */}
        <div className="mylike-cta">
          <div className="mylike-cta-content">
            <div className="mylike-cta-logo">
              <img src="/logo-mylike.png" alt="My Like Logo" />
            </div>
            <Link to="/mylike-perspectiva" className="mylike-cta-button">
              Saiba Mais
            </Link>
          </div>
        </div>

        {/* Lançamento */}
        <section className="empreendimentos-section">
          <h2 className="section-subtitle">Lançamento</h2>
          <div className="empreendimentos-grid">
            {lancamento.map((empreendimento, index) => (
              <div key={index} className="empreendimento-card">
                <div className="empreendimento-image">
                  {empreendimento.imagem ? (
                    <img src={empreendimento.imagem} alt={empreendimento.nome} />
                  ) : (
                    <div className="empreendimento-placeholder">
                      <span>{empreendimento.nome}</span>
                    </div>
                  )}
                  <div className="empreendimento-badge">{empreendimento.status}</div>
                </div>
                <div className="empreendimento-info">
                  <div className="empreendimento-cidade">{empreendimento.cidade}</div>
                  <h3>{empreendimento.nome}</h3>
                  {empreendimento.descricao && <p>{empreendimento.descricao}</p>}
                  {empreendimentosComBotao.includes(empreendimento.nome) && (
                    empreendimento.nome === 'MY LIKE Campo Limpo' ? (
                      <Link to="/mylike-perspectiva" className="empreendimento-btn">
                        Saiba Mais
                      </Link>
                    ) : (
                      <Link 
                        to={`/empreendimentos/${nomeParaSlug[empreendimento.nome]}`} 
                        className="empreendimento-btn"
                      >
                        Saiba Mais
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Futuro Lançamento */}
        <section className="empreendimentos-section">
          <h2 className="section-subtitle">Futuro Lançamento</h2>
          <div className="empreendimentos-grid">
            {futuroLancamento.map((empreendimento, index) => (
              <div key={index} className="empreendimento-card">
                <div className="empreendimento-image">
                  {empreendimento.imagem ? (
                    <img src={empreendimento.imagem} alt={empreendimento.nome} />
                  ) : (
                    <div className="empreendimento-placeholder">
                      <span>{empreendimento.nome}</span>
                    </div>
                  )}
                  <div className="empreendimento-badge">{empreendimento.status}</div>
                </div>
                <div className="empreendimento-info">
                  <div className="empreendimento-cidade">{empreendimento.cidade}</div>
                  <h3>{empreendimento.nome}</h3>
                  {empreendimento.descricao && <p>{empreendimento.descricao}</p>}
                  {empreendimentosComBotao.includes(empreendimento.nome) && (
                    empreendimento.nome === 'MY LIKE Campo Limpo' ? (
                      <Link to="/mylike-perspectiva" className="empreendimento-btn">
                        Saiba Mais
                      </Link>
                    ) : (
                      <Link 
                        to={`/empreendimentos/${nomeParaSlug[empreendimento.nome]}`} 
                        className="empreendimento-btn"
                      >
                        Saiba Mais
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Em Obras */}
        <section className="empreendimentos-section">
          <h2 className="section-subtitle">Em Obras</h2>
          <div className="empreendimentos-grid">
            {emObras.map((empreendimento, index) => (
              <div key={index} className="empreendimento-card">
                <div className="empreendimento-image">
                  {empreendimento.imagem ? (
                    <img src={empreendimento.imagem} alt={empreendimento.nome} />
                  ) : (
                    <div className="empreendimento-placeholder">
                      <span>{empreendimento.nome}</span>
                    </div>
                  )}
                  <div className="empreendimento-badge">{empreendimento.status}</div>
                </div>
                <div className="empreendimento-info">
                  <div className="empreendimento-cidade">{empreendimento.cidade}</div>
                  <h3>{empreendimento.nome}</h3>
                  {empreendimento.descricao && <p>{empreendimento.descricao}</p>}
                  {empreendimentosComBotao.includes(empreendimento.nome) && (
                    empreendimento.nome === 'MY LIKE Campo Limpo' ? (
                      <Link to="/mylike-perspectiva" className="empreendimento-btn">
                        Saiba Mais
                      </Link>
                    ) : (
                      <Link 
                        to={`/empreendimentos/${nomeParaSlug[empreendimento.nome]}`} 
                        className="empreendimento-btn"
                      >
                        Saiba Mais
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Entregues */}
        <section className="empreendimentos-section entregues-section">
          <h2 className="section-subtitle">Entregues</h2>
          <div className="empreendimentos-grid">
            {entregues.map((empreendimento, index) => (
              <div key={index} className="empreendimento-card">
                <div className="empreendimento-image">
                  {empreendimento.imagem ? (
                    <img src={empreendimento.imagem} alt={empreendimento.nome} />
                  ) : (
                    <div className="empreendimento-placeholder">
                      <span>{empreendimento.nome}</span>
                    </div>
                  )}
                  <div className="empreendimento-badge entregue">Entregue em: {empreendimento.dataEntrega}</div>
                </div>
                <div className="empreendimento-info">
                  <div className="empreendimento-cidade">{empreendimento.cidade}</div>
                  <h3>{empreendimento.nome}</h3>
                  <p className="empreendimento-endereco">{empreendimento.endereco}</p>
                  <p>{empreendimento.descricao}</p>
                  {empreendimentosComBotao.includes(empreendimento.nome) && (
                    <button className="empreendimento-btn">Saiba Mais</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Empreendimentos

