import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <div>
      <h1>Your Booking is Confirmed!</h1>
      <p>Thank you for booking with Little Lemon. We look forward to serving you.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default ConfirmedBooking;
