import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className="home-screen">
      {/* Seção Sobre Nós */}
      <section className="home-section sobre-nos">
        <div className="section-content">
          <h2 className="section-title">Sobre Nós</h2>
          <div className="section-text">
            <p>
              A Construlike é uma marca do Grupo Prohidro Construtora, especializada 
              em desenvolver empreendimentos de alto padrão que transformam sonhos em realidade.
            </p>
            <p>
              Com anos de experiência no mercado imobiliário, nossa missão é criar 
              espaços únicos que combinam qualidade, inovação e sustentabilidade.
            </p>
            <p>
              Estamos comprometidos em entregar não apenas imóveis, mas um estilo de vida 
              completo para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Empreendimentos */}
      <section className="home-section empreendimentos">
        <div className="section-content">
          <h2 className="section-title">Empreendimentos</h2>
          <div className="empreendimentos-grid">
            <div className="empreendimento-card">
              <div className="empreendimento-image">
                <div className="empreendimento-placeholder">
                  <span>Empreendimento 1</span>
                </div>
              </div>
              <div className="empreendimento-info">
                <h3>Nome do Empreendimento</h3>
                <p>Descrição breve do empreendimento</p>
                <button className="empreendimento-btn">Saiba Mais</button>
              </div>
            </div>
            
            <div className="empreendimento-card">
              <div className="empreendimento-image">
                <div className="empreendimento-placeholder">
                  <span>Empreendimento 2</span>
                </div>
              </div>
              <div className="empreendimento-info">
                <h3>Nome do Empreendimento</h3>
                <p>Descrição breve do empreendimento</p>
                <button className="empreendimento-btn">Saiba Mais</button>
              </div>
            </div>

            <div className="empreendimento-card">
              <div className="empreendimento-image">
                <div className="empreendimento-placeholder">
                  <span>Empreendimento 3</span>
                </div>
              </div>
              <div className="empreendimento-info">
                <h3>Nome do Empreendimento</h3>
                <p>Descrição breve do empreendimento</p>
                <button className="empreendimento-btn">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeScreen

