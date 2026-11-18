import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

function Header() {
  return (
    <header className="site-header">
      <Link to="/" aria-label="Little Lemon Home">
        <img src={logo} alt="Little Lemon Logo" className="site-logo" />
      </Link>
    </header>
  );
}

export default Header;