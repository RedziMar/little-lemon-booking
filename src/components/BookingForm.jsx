import { useState } from 'react';
import OccasionDropdown from './OccasionDropdown';

function BookingForm({ availableTimes, dispatch, onTimeSelect }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: availableTimes[0] || '17:00',
    guests: 2,
    occasion: '',
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }

    if (name === 'time' && onTimeSelect) {
      onTimeSelect(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOccasionChange = (occasion) => {
    setFormData((prev) => ({
      ...prev,
      occasion,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const chosenTime = availableTimes.includes(formData.time)
      ? formData.time
      : availableTimes[0] || formData.time;

    dispatch({ type: 'BOOK_TIME', time: chosenTime });
    setFormData((prev) => ({ ...prev, time: chosenTime }));
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    const nextDefaultTime = availableTimes[0] || '17:00';
    if (onTimeSelect) {
      onTimeSelect(nextDefaultTime);
    }
    setFormData({
      name: '',
      email: '',
      date: '',
      time: nextDefaultTime,
      guests: 2,
      occasion: '',
    });
  };

  if (isConfirmed) {
    const { name, email, date, time, guests, occasion } = formData;
    return (
      <div className="confirmation-card" role="status" aria-live="polite">
        <h3>Reservation Confirmed!</h3>
        <p>
          Thank you, <strong>{name}</strong>. Your table at Little Lemon Chicago is reserved.
        </p>
        <ul className="confirmation-details">
          <li><strong>Date:</strong> {date}</li>
          <li><strong>Time:</strong> {time}</li>
          <li><strong>Guests:</strong> {guests}</li>
          <li><strong>Occasion:</strong> {occasion || 'Standard Dining'}</li>
          <li><strong>Confirmation sent to:</strong> {email}</li>
        </ul>
        <button type="button" className="btn-primary" onClick={handleReset}>
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="res-name">Full Name</label>
          <input
            id="res-name"
            name="name"
            type="text"
            required
            placeholder="e.g., Tilly Smith"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="res-email">Email Address</label>
          <input
            id="res-email"
            name="email"
            type="email"
            required
            placeholder="tilly@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            id="res-date"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            value={
              availableTimes.includes(formData.time)
                ? formData.time
                : availableTimes[0] || ''
            }
            onChange={handleChange}
            disabled={availableTimes.length === 0}
          >
            {availableTimes.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          name="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          required
          value={formData.guests}
          onChange={handleChange}
        />
      </div>

      <OccasionDropdown
        value={formData.occasion}
        onChange={handleOccasionChange}
      />

      <button
        type="submit"
        className="btn-primary"
        disabled={availableTimes.length === 0}
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;