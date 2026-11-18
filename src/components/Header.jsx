import logo from '../assets/Logo.svg';

function Header() {
  return (
    <header className="site-header">
      <a href="#home" aria-label="Little Lemon Home">
        <img src={logo} alt="Little Lemon Logo" className="site-logo" />
      </a>
    </header>
  );
}

export default Header;