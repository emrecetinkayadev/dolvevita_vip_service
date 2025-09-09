import React, { useState, useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';

const SearchForm = () => {
  const { searchVehicles } = useContext(BookingContext);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [passengers, setPassengers] = useState(1);
  // Storing full place details for later use if needed
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (origin && destination) {
      // The actual API calls will be handled by the context or a service
      searchVehicles({ origin, destination, passengers, originPlace, destinationPlace });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto -mt-16 relative z-20">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="from" className="block text-sm font-medium text-gray-700">Nereden</label>
          <input
            type="text"
            id="from"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="Örn: İstanbul Havalimanı"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">Nereye</label>
          <input
            type="text"
            id="to"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Örn: Beşiktaş"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Tarih</label>
          <input type="date" id="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="col-span-1">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Saat</label>
          <input type="time" id="time" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="col-span-1">
          <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">Yolcu</label>
          <input type="number" id="passengers" min="1" value={passengers} onChange={(e) => setPassengers(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="col-span-1 md:col-span-5">
          <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Araçları Bul
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
