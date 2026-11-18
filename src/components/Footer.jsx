import logo from '../assets/Logo.svg';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
        </div>

        <div>
          <h3 className="footer-heading">Doormat Navigation</h3>
          <ul className="footer-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-list">
            <li>123 Lemon St, Chicago, IL</li>
            <li>(312) 555-0198</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Social Media Links</h3>
          <ul className="footer-list">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">Twitter / X</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;