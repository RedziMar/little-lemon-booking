import { Link, useLocation } from 'react-router-dom';

function ConfirmedBooking() {
  const { state } = useLocation();

  return (
    <section className="reservations-section">
      <div className="container">
        <div className="reservations-wrapper">
          <div className="confirmation-card" role="status" aria-live="polite">
            <h1 className="reservations-title">Booking Confirmed!</h1>
            <p>
              {state?.name ? (
                <>
                  Thank you, <strong>{state.name}</strong>. Your table at Little
                  Lemon Chicago has been confirmed.
                </>
              ) : (
                'Your table reservation at Little Lemon Chicago has been confirmed.'
              )}
            </p>

            {state && (
              <ul className="confirmation-details">
                <li><strong>Date:</strong> {state.date}</li>
                <li><strong>Time:</strong> {state.time}</li>
                <li><strong>Guests:</strong> {state.guests}</li>
                <li>
                  <strong>Occasion:</strong> {state.occasion || 'Standard Dining'}
                </li>
                <li><strong>Confirmation sent to:</strong> {state.email}</li>
              </ul>
            )}

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
              <Link to="/booking" className="btn-primary">
                Book Another Table
              </Link>
              <Link to="/" className="btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBooking;