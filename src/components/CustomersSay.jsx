const TESTIMONIALS = [
  {
    id: 1,
    name: 'Tilly M.',
    initials: 'TM',
    rating: '★★★★★',
    review:
      'Reserving a table for my birthday was effortless and the lemon cake was unforgettable!',
  },
  {
    id: 2,
    name: 'James R.',
    initials: 'JR',
    rating: '★★★★★',
    review:
      'Best Mediterranean food in Chicago. Great atmosphere and friendly staff.',
  },
  {
    id: 3,
    name: 'Sofia L.',
    initials: 'SL',
    rating: '★★★★★',
    review:
      'The Greek salad and bruschetta are our weekly favorites. Highly recommend!',
  },
  {
    id: 4,
    name: 'Marcus K.',
    initials: 'MK',
    rating: '★★★★★',
    review:
      'Quick online booking with instant confirmation made our anniversary night smooth.',
  },
];

function CustomersSay() {
  return (
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
  );
}

export default CustomersSay;