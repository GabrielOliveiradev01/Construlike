import { Link, useLocation } from 'react-router-dom'
import './SideMenu.css'

const SideMenu = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="side-menu right-menu">
      <div className="tabs-container">
        <Link
          to="/sobre-nos"
          className={`tab-button ${isActive('/sobre-nos') || isActive('/') ? 'active' : ''}`}
        >
          Sobre Nós
        </Link>
        <Link
          to="/empreendimentos"
          className={`tab-button ${isActive('/empreendimentos') ? 'active' : ''}`}
        >
          Empreendimentos
        </Link>
      </div>
    </div>
  )
}

export default SideMenu

