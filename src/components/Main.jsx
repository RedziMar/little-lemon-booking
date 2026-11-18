/* eslint-disable react-refresh/only-export-components */
import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../utils/bookingAPI';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import Chicago from './Chicago';
import Specials from './Specials';

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = action.date
        ? new Date(`${action.date}T00:00:00`)
        : new Date();
      return fetchAPI(selectedDate);
    }
    case 'BOOK_TIME':
      return state.filter((slot) => slot !== action.time);
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      dispatch({ type: 'BOOK_TIME', time: formData.time });
      navigate('/confirmed', { state: formData });
    }
  }

  return (
    <main className="site-main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/menu" element={<Specials />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order-online" element={<Specials />} />
        <Route
          path="/login"
          element={
            <section className="reservations-section">
              <div className="container">
                <div className="reservations-wrapper">
                  <h1 className="reservations-title">Customer Login</h1>
                  <p className="reservations-subtitle">
                    Member sign-in is coming soon. Meanwhile, you can reserve a
                    table without an account!
                  </p>
                </div>
              </div>
            </section>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default Main;