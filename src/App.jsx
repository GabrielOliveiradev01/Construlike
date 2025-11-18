import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SobreNos from './components/SobreNos'
import Empreendimentos from './components/Empreendimentos'
import MyLikePerspectiva from './components/MyLikePerspectiva'
import EmpreendimentoDetalhes from './components/EmpreendimentoDetalhes'
import SideMenu from './components/SideMenu'
import Logo from './components/Logo'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Logo />
        <SideMenu />
        <Routes>
          <Route path="/" element={<Navigate to="/sobre-nos" replace />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/empreendimentos" element={<Empreendimentos />} />
          <Route path="/mylike-perspectiva" element={<MyLikePerspectiva />} />
          <Route path="/empreendimentos/:slug" element={<EmpreendimentoDetalhes />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

