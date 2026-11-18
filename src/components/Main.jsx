import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Chicago from './Chicago';
import Specials from './Specials';

function Main() {
  return (
    <main className="site-main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/booking" element={<BookingPage />} />
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
      </Routes>
    </main>
  );
}

export default Main;