import React from 'react';
import VehicleCard from './VehicleCard';

const VehicleList = ({ vehicles }) => {
  if (!vehicles || vehicles.length === 0) {
    return null; // Don't render anything if there are no vehicles
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map(vehicle => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default VehicleList;