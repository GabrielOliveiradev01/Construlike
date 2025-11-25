import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <img src="/Logocontruliketransparente.png" alt="Construlike" className="logo" />
    </Link>
  )
}

export default Logo

