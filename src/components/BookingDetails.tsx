'use client';
import { useEffect } from 'react';
import useBookingStore from '../store/useBookingStore';

interface BookingDetailsProps {
  id: string;
}

const BookingDetails = ({ id }: BookingDetailsProps) => {
  const selectedFlight = useBookingStore((state) => state.selectedFlight);
  const selectFlight = useBookingStore((state) => state.selectFlight);

  useEffect(() => {
    if (!selectedFlight || selectedFlight.id !== id) {
    }
  }, [id, selectedFlight, selectFlight]);

  if (!selectedFlight || selectedFlight.id !== id) {
    return <p>No flight selected</p>;
  }

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Airline: {selectedFlight.airline}</p>
      <p>From: {selectedFlight.from}</p>
      <p>To: {selectedFlight.to}</p>
      <p>Departure: {selectedFlight.departure}</p>
      <p>Arrival: {selectedFlight.arrival}</p>
      <p>Price: ${selectedFlight.price}</p>
      <button onClick={() => alert('Flight booked successfully!')}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingDetails;
