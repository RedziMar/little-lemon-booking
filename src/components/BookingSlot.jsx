function BookingSlot({ time, isSelected }) {
  return (
    <li className={`booking-slot ${isSelected ? 'selected' : ''}`}>
      <span>{time}</span>
      <span className="slot-status">Available</span>
    </li>
  );
}

export default BookingSlot;