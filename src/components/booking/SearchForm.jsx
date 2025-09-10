import React, { useState, useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';

const SearchForm = () => {
  const { searchVehicles } = useContext(BookingContext);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (origin && destination) {
      searchVehicles({ origin, destination, passengers });
    }
  };

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-20">
      <div className="bg-glass p-6 rounded-lg shadow-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          
          <div className="col-span-1 md:col-span-1">
            <label htmlFor="from" className="block text-sm font-medium text-white">Nereden</label>
            <input
              type="text"
              id="from"
              className="mt-1 block w-full bg-transparent text-white border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-brand-gold transition duration-300"
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Örn: İstanbul Havalimanı"
            />
          </div>

          <div className="col-span-1 md:col-span-1">
            <label htmlFor="to" className="block text-sm font-medium text-white">Nereye</label>
            <input
              type="text"
              id="to"
              className="mt-1 block w-full bg-transparent text-white border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-brand-gold transition duration-300"
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Örn: Beşiktaş"
            />
          </div>

          <div className="col-span-1 md:col-span-1">
            <label htmlFor="passengers" className="block text-sm font-medium text-white">Yolcu Sayısı</label>
            <input 
              type="number" 
              id="passengers" 
              min="1" 
              value={passengers} 
              onChange={(e) => setPassengers(e.target.value)} 
              className="mt-1 block w-full bg-transparent text-white border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-brand-gold transition duration-300"
            />
          </div>

          <div className="col-span-1 md:col-span-1">
            <button 
              type="submit" 
              className="w-full bg-brand-gold text-black font-bold py-3 px-4 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-gold transition duration-300 shadow-lg"
            >
              Araçları Bul
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SearchForm;
