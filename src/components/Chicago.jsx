import marioAdrianA from '../assets/Mario and Adrian A.jpg';
import marioAdrianB from '../assets/Mario and Adrian b.jpg';

function Chicago() {
  return (
    <section className="about-section">
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
            To craft the menu, Mario relies on family recipes and his experience
            as a chef in Italy. Adrian does all the marketing for the restaurant
            and led the effort to expand the menu beyond classic Italian to
            incorporate additional cuisines from the Mediterranean region.
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
  );
}

export default Chicago;