import { Link } from 'react-router-dom';
import heroFood from '../assets/restauranfood.jpg';

function CallToAction() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div>
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-lead">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn-primary">
            Reserve a Table
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={heroFood}
            alt="Chef holding Little Lemon bruschetta platter"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;