import heroFood from '../assets/restauranfood.jpg';
import greekSalad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';
import marioAdrianA from '../assets/Mario and Adrian A.jpg';
import marioAdrianB from '../assets/Mario and Adrian b.jpg';
import basketIcon from '../assets/Basket.svg';
import BookingForm from './BookingForm';

const SPECIALS = [
  {
    id: 1,
    title: 'Greek salad',
    price: '$12.99',
    image: greekSalad,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: 2,
    title: 'Bruschetta',
    price: '$ 5.99',
    image: bruschetta,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$ 5.00',
    image: lemonDessert,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Tilly M.',
    initials: 'TM',
    rating: '★★★★★',
    review: 'Reserving a table for my birthday was effortless and the lemon cake was unforgettable!',
  },
  {
    id: 2,
    name: 'James R.',
    initials: 'JR',
    rating: '★★★★★',
    review: 'Best Mediterranean food in Chicago. Great atmosphere and friendly staff.',
  },
  {
    id: 3,
    name: 'Sofia L.',
    initials: 'SL',
    rating: '★★★★★',
    review: 'The Greek salad and bruschetta are our weekly favorites. Highly recommend!',
  },
  {
    id: 4,
    name: 'Marcus K.',
    initials: 'MK',
    rating: '★★★★★',
    review: 'Quick online booking with instant confirmation made our anniversary night smooth.',
  },
];

function Main() {
  return (
    <main className="site-main">
      {/* 1. Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-subtitle">Chicago</h2>
            <p className="hero-lead">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a href="#reservations" className="btn-primary">
              Reserve a Table
            </a>
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

      {/* 2. Highlights / Specials Section */}
      <section id="menu" className="specials-section">
        <div className="container">
          <div className="specials-header">
            <h2 className="section-display-title">This weeks specials!</h2>
            <a href="#order-online" id="order-online" className="btn-primary">
              Online Menu
            </a>
          </div>

          <div className="specials-grid">
            {SPECIALS.map(({ id, title, price, image, description }) => (
              <article key={id} className="special-card">
                <img src={image} alt={title} className="special-card-img" />
                <div className="special-card-body">
                  <div className="special-card-top">
                    <h3 className="card-title">{title}</h3>
                    <span className="card-price">{price}</span>
                  </div>
                  <p className="card-description">{description}</p>
                  <button type="button" className="card-delivery-btn">
                    <span>Order a delivery</span>
                    <img
                      src={basketIcon}
                      alt=""
                      aria-hidden="true"
                      className="delivery-icon"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="testimonials-section" aria-label="Customer Testimonials">
        <div className="container">
          <h2 className="testimonials-heading">Testimonials</h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map(({ id, name, initials, rating, review }) => (
              <article key={id} className="testimonial-card">
                <p className="testimonial-rating" aria-label="5 out of 5 stars">
                  {rating}
                </p>
                <div className="testimonial-user">
                  <div className="testimonial-avatar" aria-hidden="true">
                    {initials}
                  </div>
                  <strong>{name}</strong>
                </div>
                <p>{review}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section id="about" className="about-section">
        <div className="container about-grid">
          <div>
            <h2 className="about-title">Little Lemon</h2>
            <h3 className="about-subtitle">Chicago</h3>
            <p className="about-text">
              Little Lemon is owned by two Italian brothers, Mario and Adrian,
              who moved to the United States to pursue their shared dream of
              owning a restaurant.
            </p>
            <p className="about-text">
              To craft the menu, Mario relies on family recipes and his
              experience as a chef in Italy. Adrian does all the marketing for
              the restaurant and led the effort to expand the menu beyond
              classic Italian to incorporate additional cuisines from the
              Mediterranean region.
            </p>
          </div>

          <div className="about-images">
            <img
              src={marioAdrianA}
              alt="Chef Adrian preparing dishes in Little Lemon kitchen"
              className="about-img about-img-back"
            />
            <img
              src={marioAdrianB}
              alt="Mario and Adrian smiling together in the kitchen"
              className="about-img about-img-front"
            />
          </div>
        </div>
      </section>

      {/* 5. Reserve a Table Section */}
      <section id="reservations" className="reservations-section">
        <div className="container">
          <div className="reservations-wrapper">
            <h2 className="reservations-title">Reserve a Table</h2>
            <p className="reservations-subtitle">
              Book your table online and let us know if you are celebrating a special occasion.
            </p>
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;