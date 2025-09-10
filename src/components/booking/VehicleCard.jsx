import React, { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext.jsx';

const VehicleCard = ({ vehicle }) => {
  const { selectVehicle } = useContext(BookingContext);

  if (!vehicle) return null;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-1">
      <img src={vehicle.images[0]} alt={vehicle.name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-white">{vehicle.name}</h3>
        <p className="text-gray-400 mt-2">{vehicle.description}</p>
        <div className="flex justify-between items-center mt-4 text-gray-300">
          <div className="flex items-center">
            <span>Kapasite: {vehicle.capacity}</span>
          </div>
          <span>Bagaj: {vehicle.luggage}</span>
        </div>
        <div className="mt-6">
          <button onClick={() => selectVehicle(vehicle)} className="w-full bg-brand-gold text-black font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition">
            Seç ve Devam Et
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;