import { Link } from 'react-router-dom';
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
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