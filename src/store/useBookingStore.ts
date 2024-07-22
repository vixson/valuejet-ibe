import { create } from 'zustand';
import { Flight } from '../types';

interface BookingStoreState {
  selectedFlight: Flight | null;
  selectFlight: (flight: Flight) => void;
}

const useBookingStore = create<BookingStoreState>((set) => ({
  selectedFlight: null,
  selectFlight: (flight) => set({ selectedFlight: flight }),
}));

export default useBookingStore;
