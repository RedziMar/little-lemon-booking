import { Link } from 'react-router-dom';
import greekSalad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';
import basketIcon from '../assets/Basket.svg';

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

function Specials() {
  return (
    <section className="specials-section">
      <div className="container">
        <div className="specials-header">
          <h2 className="section-display-title">This weeks specials!</h2>
          <Link to="/menu" className="btn-primary">
            Online Menu
          </Link>
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
  );
}

export default Specials;