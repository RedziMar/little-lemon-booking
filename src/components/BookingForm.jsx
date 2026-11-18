import { useState } from 'react';
import OccasionDropdown from './OccasionDropdown';

function getTodayString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function validateBooking(data, availableTimes) {
  const errors = {};
  const today = getTodayString();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const guestCount = Number(data.guests);

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  if (!data.email.trim() || !emailPattern.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.date) {
    errors.date = 'Please choose a reservation date.';
  } else if (data.date < today) {
    errors.date = 'Reservation date cannot be in the past.';
  }

  if (availableTimes.length === 0 || !data.time) {
    errors.time = 'No available times for the selected date.';
  }

  if (Number.isNaN(guestCount) || guestCount < 1 || guestCount > 10) {
    errors.guests = 'Number of guests must be between 1 and 10.';
  }

  return errors;
}

function BookingForm({ availableTimes, dispatch, submitForm, onTimeSelect }) {
  const today = getTodayString();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: today,
    time: availableTimes[0] || '17:00',
    guests: 2,
    occasion: '',
  });

  const [touched, setTouched] = useState({});

  const activeTime = availableTimes.includes(formData.time)
    ? formData.time
    : availableTimes[0] || '';

  const errors = validateBooking({ ...formData, time: activeTime }, availableTimes);
  const isFormValid = Object.keys(errors).length === 0;

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

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
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
    setTouched({
      name: true,
      email: true,
      date: true,
      time: true,
      guests: true,
    });

    if (!isFormValid) {
      return;
    }

    submitForm({ ...formData, time: activeTime });
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Table reservation form"
      noValidate
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="res-name">Full Name</label>
          <input
            id="res-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={60}
            placeholder="e.g., Tilly Smith"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby={touched.name && errors.name ? 'res-name-error' : undefined}
          />
          {touched.name && errors.name && (
            <span id="res-name-error" className="error-text" role="alert">
              {errors.name}
            </span>
          )}
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
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.email && errors.email)}
            aria-describedby={touched.email && errors.email ? 'res-email-error' : undefined}
          />
          {touched.email && errors.email && (
            <span id="res-email-error" className="error-text" role="alert">
              {errors.email}
            </span>
          )}
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
            min={today}
            value={formData.date}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.date && errors.date)}
            aria-describedby={touched.date && errors.date ? 'res-date-error' : undefined}
          />
          {touched.date && errors.date && (
            <span id="res-date-error" className="error-text" role="alert">
              {errors.date}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            required
            value={activeTime}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={availableTimes.length === 0}
            aria-invalid={Boolean(touched.time && errors.time)}
            aria-describedby={touched.time && errors.time ? 'res-time-error' : undefined}
          >
            {availableTimes.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {touched.time && errors.time && (
            <span id="res-time-error" className="error-text" role="alert">
              {errors.time}
            </span>
          )}
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
          onBlur={handleBlur}
          aria-invalid={Boolean(touched.guests && errors.guests)}
          aria-describedby={touched.guests && errors.guests ? 'guests-error' : undefined}
        />
        {touched.guests && errors.guests && (
          <span id="guests-error" className="error-text" role="alert">
            {errors.guests}
          </span>
        )}
      </div>

      <OccasionDropdown
        value={formData.occasion}
        onChange={handleOccasionChange}
      />

      <button
        type="submit"
        className="btn-primary"
        disabled={!isFormValid}
        aria-label="On Click"
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;