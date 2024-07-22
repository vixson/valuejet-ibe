'use client';
import { useRouter } from 'next/navigation';
import useFlightStore from '../store/useFlightStore';
import useBookingStore from '../store/useBookingStore';
import { Flight } from '../types';

const FlightResults = () => {
  const flights = useFlightStore((state) => state.flights);
  const selectFlight = useBookingStore((state) => state.selectFlight);
  const router = useRouter();

  const handleBooking = (flight: Flight) => {
    selectFlight(flight);
    router.push(`/flight/booking/${flight.id}`);
  };

  return (
    <div>
      <ul>
        {flights.map((flight: Flight) => (
          <li key={flight.id}>
            {flight.airline} - {flight.from} to {flight.to} - ${flight.price}
            <button onClick={() => handleBooking(flight)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightResults;
