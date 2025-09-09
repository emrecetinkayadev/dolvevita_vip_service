import React, { useContext } from 'react';
import ImageSlider from './ImageSlider';
import { BookingContext } from '../../context/BookingContext';

const VehicleCard = ({ vehicle }) => {
  const { selectVehicle } = useContext(BookingContext);

  const handleSelect = () => {
    selectVehicle(vehicle);
    console.log('Selected vehicle:', vehicle);
    // Optionally, scroll to the next section (e.g., passenger details)
    // document.getElementById('passenger-details-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <ImageSlider images={vehicle.images} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
        <p className="text-gray-600 mb-4">{vehicle.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <i className="fas fa-user-friends mr-2"></i>
            <span>{vehicle.capacity}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-suitcase-rolling mr-2"></i>
            <span>{vehicle.luggage}</span>
          </div>
        </div>
        <div className="text-2xl font-bold text-right mb-4">{vehicle.price}</div>
        <button 
          onClick={handleSelect}
          className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Seç ve Devam Et
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
