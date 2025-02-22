import React, { useState } from 'react';

const Booking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Visit booked for ${date} at ${time}`);
  };

  return (
    <div className="p-4 bg-white rounded shadow mt-10">
      <h3 className="font-bold">Book a Visit</h3>
      <form onSubmit={handleBooking}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded p-2 w-full mt-2"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border rounded p-2 w-full mt-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;