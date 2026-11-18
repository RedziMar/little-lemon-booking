import { useState } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  const [selectedTime, setSelectedTime] = useState(availableTimes[0] || '');

  return (
    <section className="reservations-section">
      <div className="container">
        <div className="reservations-wrapper">
          <h1 className="reservations-title">Reserve a Table</h1>
          <p className="reservations-subtitle">
            Book your table online and let us know if you are celebrating a
            special occasion.
          </p>

          <div className="slots-panel" aria-label="Available booking slots">
            <h2 className="slots-heading">Available Time Slots</h2>
            {availableTimes.length > 0 ? (
              <ul className="slots-list">
                {availableTimes.map((time) => (
                  <BookingSlot
                    key={time}
                    time={time}
                    isSelected={selectedTime === time}
                  />
                ))}
              </ul>
            ) : (
              <p className="no-slots-msg">
                All slots for this date are currently booked. Please choose another date.
              </p>
            )}
          </div>

          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
            onTimeSelect={setSelectedTime}
          />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;