'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useFlightStore from '../store/useFlightStore';

const FlightSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const router = useRouter();
  const setFlights = useFlightStore((state) => state.setFlights);

  const searchFlights = async () => {
    const flights = [
      {
        id: '1',
        airline: 'Airline A',
        from,
        to,
        departure: '10:00 AM',
        arrival: '12:00 PM',
        price: 100,
      },
      {
        id: '2',
        airline: 'Airline B',
        from,
        to,
        departure: '01:00 PM',
        arrival: '03:00 PM',
        price: 150,
      },
    ];
    setFlights(flights);
    router.push('/flight/results');
  };

  return (
    <div className="pt-10">
      <h2>Search Flights</h2>
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="border"
      />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="border"
      />
      <button onClick={searchFlights} className="bg-red-400">
        Search
      </button>
    </div>
  );
};

export default FlightSearch;
