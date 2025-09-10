import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    searchPerformed: false,
    vehicle: null,
    passengerDetails: null,
  });
  const [bookingStatus, setBookingStatus] = useState('pending');

  const searchVehicles = () => {
    setBooking(prev => ({ ...prev, searchPerformed: true }));
    setTimeout(() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const selectVehicle = (vehicle) => {
    setBooking(prev => ({ ...prev, vehicle }));
    setTimeout(() => document.getElementById('passenger-details')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const setPassengerDetails = (details) => {
    setBooking(prev => ({ ...prev, passengerDetails: details }));
  };

  const resetBooking = () => {
    setBooking({
      searchPerformed: false,
      vehicle: null,
      passengerDetails: null,
    });
    setBookingStatus('pending');
  }

  const value = { 
    booking, 
    bookingStatus, 
    setBookingStatus, 
    searchVehicles, 
    selectVehicle, 
    setPassengerDetails,
    resetBooking
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};