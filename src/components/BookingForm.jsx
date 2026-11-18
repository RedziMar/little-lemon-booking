import { useState } from 'react';
import OccasionDropdown from './OccasionDropdown';

const AVAILABLE_TIMES = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '18:00',
    guests: 2,
    occasion: '',
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
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
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '18:00',
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
          <label htmlFor="res-date">Choose Date</label>
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
          <label htmlFor="res-time">Choose Time</label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            {AVAILABLE_TIMES.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="res-guests">Number of Guests</label>
        <input
          id="res-guests"
          name="guests"
          type="number"
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

      <button type="submit" className="btn-primary">
        Confirm Reservation
      </button>
    </form>
  );
}

export default BookingForm;