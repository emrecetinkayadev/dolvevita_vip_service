import React from 'react';
import VehicleCard from './VehicleCard';

const VehicleList = ({ vehicles }) => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Araçlarımız</h2>
        {vehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Sonuç Bulunamadı</p>
        )}
      </div>
    </div>
  );
};

export default VehicleList;
