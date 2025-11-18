import './SobreNos.css'
import videoFundo from '../Videos/videodatelainicial.mp4'

const SobreNos = () => {
  return (
    <div className="sobre-nos-page">
      {/* Vídeo de fundo */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoFundo} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>

      {/* Conteúdo sobreposto */}
      <div className="content-overlay">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">A marca de quem pensa no futuro</h1>
          </div>
        </section>

        {/* Quem Somos */}
        <section className="content-section">
          <div className="section-wrapper">
            <div className="section-header">
              <h2 className="section-title">Quem Somos</h2>
              <h3 className="section-subtitle">Sobre nós</h3>
            </div>
            <div className="section-text">
              <p>
                A <strong>Construlike</strong> é a mais nova incorporadora do Grupo Prohidro, trazendo consigo a solidez e a expertise de mais de <strong>35 anos</strong> de atuação no mercado da construção civil. Nossa missão é revolucionar o mercado imobiliário com inovação, qualidade e um compromisso inabalável com a satisfação dos nossos clientes.
              </p>
              <p className="highlight-text">
                Construlike: construir para você curtir.
              </p>
              <p>
                Com um olhar voltado para o futuro e a certeza de que cada projeto é uma nova oportunidade de criar espaços únicos, a Construlike se dedica a oferecer experiências de moradia que combinam conforto, modernidade e sustentabilidade. Junte-se a nós e descubra como transformar o seu sonho em realidade.
              </p>
            </div>
          </div>
        </section>

        {/* Cards Amarelos - Missão, Compromisso, Junte-se */}
        <section className="cards-section">
          <div className="cards-wrapper">
            <div className="yellow-card">
              <div className="card-header">
                <h3>NOSSA MISSÃO</h3>
              </div>
              <div className="card-content">
                <p>
                  Na Construlike, acreditamos que o essencial vai além dos processos e números. Nosso foco está nas pessoas, nos seus sonhos e na qualidade de vida que podemos proporcionar. Cada projeto é pensado para atender às necessidades dos nossos clientes, sempre com um olhar atento às tendências do mercado e às melhores práticas de construção.
                </p>
              </div>
            </div>

            <div className="yellow-card">
              <div className="card-header">
                <h3>COMPROMISSO COM A QUALIDADE</h3>
              </div>
              <div className="card-content">
                <p>
                  Nosso compromisso é com a proximidade e a transparência. Queremos criar oportunidades extraordinárias, onde cada imóvel representa uma conquista e cada cliente é parte da nossa história de sucesso. Acreditamos que, juntos, podemos construir um futuro melhor, onde cada detalhe faz a diferença.
                </p>
              </div>
            </div>

            <div className="yellow-card">
              <div className="card-header">
                <h3>JUNTE-SE A NÓS</h3>
              </div>
              <div className="card-content">
                <p>
                  Seja bem-vindo ao novo tempo da Construlike. Estamos certos de que você vai gostar de fazer parte dessa jornada. Acompanhe nosso site e as nossas redes sociais, conheça nossos projetos e descubra como podemos transformar seus sonhos em realidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">+ R$1.4</div>
              <div className="stat-label">Bi Em VGV</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">+ de 4,65</div>
              <div className="stat-label">Mil Unidades</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">14</div>
              <div className="stat-label">Empreendimentos Lançados</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">11</div>
              <div className="stat-label">Empreendimentos Entregues</div>
            </div>
          </div>
        </section>

        {/* PROVERDE - Sustentabilidade */}
        <section className="proverde-section">
          <div className="section-wrapper">
            <h2 className="section-title">A MARCA DE QUEM PENSA NO FUTURO</h2>
            <div className="proverde-content">
              <p>
                A <strong>PROVERDE</strong> surgiu a partir da conscientização a respeito da preservação dos recursos naturais, prática essencial para a proteção do futuro do nosso planeta, e se tornou a base das nossas ações, proporcionando investimentos em treinamentos para nossos colaboradores e fortalecendo a consciência de sustentabilidade por meio de ações como a coleta seletiva de resíduos nos canteiros de obras, frota com equipamentos novos que minimizam a emissão de CO2 e a doação de mudas de plantas para instituições.
              </p>
            </div>

            <div className="sustentabilidade-grid">
              <div className="sustentabilidade-item">
                <div className="sustentabilidade-icon">💧</div>
                <p>Hidrômetro individual entregue instalado</p>
              </div>
              <div className="sustentabilidade-item">
                <div className="sustentabilidade-icon">🔥</div>
                <p>Previsão para instalação de medidor de gás individual</p>
              </div>
              <div className="sustentabilidade-item">
                <div className="sustentabilidade-icon">👁️</div>
                <p>Sensores de presença nas áreas de circulação de uso comum</p>
              </div>
              <div className="sustentabilidade-item">
                <div className="sustentabilidade-icon">🚽</div>
                <p>Bacias sanitárias inteligentes</p>
              </div>
              <div className="sustentabilidade-item">
                <div className="sustentabilidade-icon">⬆️</div>
                <p>Elevadores com motores de alta performance</p>
              </div>
              <div className="sustentabilidade-item">
                <div className="sustentabilidade-icon">💡</div>
                <p>Lâmpadas econômicas (LED)</p>
              </div>
              <div className="sustentabilidade-item">
                <div className="sustentabilidade-icon">🚿</div>
                <p>Torneiras com temporizador na área comum</p>
              </div>
              <div className="sustentabilidade-item">
                <div className="sustentabilidade-icon">♻️</div>
                <p>Reaproveitamento de resíduos cimentícios nas obras</p>
              </div>
              <div className="sustentabilidade-item">
                <div className="sustentabilidade-icon">⚡</div>
                <p>Equipamentos da área comum com selo PROCEL A de eficiência energética</p>
              </div>
              <div className="sustentabilidade-item">
                <div className="sustentabilidade-icon">🔌</div>
                <p>Tomada para carro elétrico</p>
              </div>
            </div>
          </div>
        </section>

        {/* Política SGI */}
        <section className="sgi-section">
          <div className="section-wrapper">
            <h2 className="section-title">POLÍTICA SGI</h2>
            <div className="sgi-content">
              <p className="sgi-intro">
                Compromisso com a satisfação do cliente, qualidade ágil, preservação ambiental, prevenção da poluição, conformidade e melhoria contínua.
              </p>
              <p>
                Disponibilizar aos clientes soluções em projeto e construção de edificações, comprometendo-se com:
              </p>
              <div className="sgi-list">
                <div className="sgi-item">
                  <div className="sgi-icon">✓</div>
                  <p>Satisfação dos clientes</p>
                </div>
                <div className="sgi-item">
                  <div className="sgi-icon">⚡</div>
                  <p>Agilidade e elevado grau de qualidade</p>
                </div>
                <div className="sgi-item">
                  <div className="sgi-icon">🌱</div>
                  <p>Conscientização de nossos colaboradores e parceiros em relação a preservação do meio ambiente</p>
                </div>
                <div className="sgi-item">
                  <div className="sgi-icon">🌍</div>
                  <p>Prevenção da poluição através da redução dos resíduos sólidos</p>
                </div>
                <div className="sgi-item">
                  <div className="sgi-icon">📈</div>
                  <p>Atendimento aos requisitos e melhoria contínua da eficácia do Sistema de Gestão Integrado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificações */}
        <section className="certificacoes-section">
          <div className="section-wrapper">
            <h2 className="section-title certificacoes-title">CERTIFICAÇÕES</h2>
            <div className="certificacoes-underline"></div>
            <p className="certificacoes-text">
              A MISSÃO É REALIZAR OS SONHOS DE NOSSOS CLIENTES
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SobreNos

