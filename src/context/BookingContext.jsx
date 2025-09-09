import React, { createContext, useState } from 'react';
import vehicles from '../mock-vehicles.json';
import useGoogleApi from '../services/googleApi';

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const { isLoaded, loadError, getDistanceMatrix } = useGoogleApi();
  const [booking, setBooking] = useState({
    vehicle: null,
    travelDetails: null,
    passengerDetails: null,
  });
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  const searchVehicles = async (searchParams) => {
    if (!isLoaded) {
      console.error('Google Maps script is not loaded yet.');
      return;
    }

    try {
      const response = await getDistanceMatrix(
        searchParams.origin,
        searchParams.destination
      );
      const { distance } = response.rows[0].elements[0];
      const distanceInKm = distance.value / 1000;

      const pricedVehicles = vehicles.map((vehicle) => {
        const price = vehicle.base_price + distanceInKm * vehicle.price_per_km;
        return { ...vehicle, price: price.toFixed(2) };
      });

      const filtered = pricedVehicles.filter(
        (vehicle) => vehicle.capacity >= searchParams.passengers
      );

      setFilteredVehicles(filtered);
      setBooking((prev) => ({ ...prev, travelDetails: searchParams }));
    } catch (error) {
      console.error('Error calculating distance or pricing:', error);
    }
  };

  const selectVehicle = (vehicle) => {
    setBooking((prev) => ({ ...prev, vehicle }));
  };

  const setPassengerDetails = (details) => {
    setBooking((prev) => ({ ...prev, passengerDetails: details }));
  };

  return (
    <BookingContext.Provider
      value={{
        booking,
        filteredVehicles,
        searchVehicles,
        selectVehicle,
        setPassengerDetails,
        isGoogleApiLoaded: isLoaded,
        googleApiLoadError: loadError,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingProvider };