import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <section className="reservations-section">
      <div className="container">
        <div className="reservations-wrapper">
          <h1 className="reservations-title">Reserve a Table</h1>
          <p className="reservations-subtitle">
            Book your table online and let us know if you are celebrating a
            special occasion.
          </p>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;