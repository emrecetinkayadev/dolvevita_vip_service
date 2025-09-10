import React, { useState, useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';

const PassengerDetailsForm = () => {
  const { booking, setPassengerDetails, setBookingStatus } = useContext(BookingContext);
  const [details, setDetails] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassengerDetails(details);
    // Directly set the status to success to show the confirmation
    setBookingStatus('success'); 
    console.log("Reservation submitted:", { ...booking, passengerDetails: details });
  };

  // This form should only appear after a vehicle has been selected.
  if (!booking.vehicle) {
    return null;
  }

  return (
    <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-12">
      <h2 className="font-serif text-3xl font-bold mb-6 text-white">Yolcu Bilgileri</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Ad Soyad</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-brand-gold focus:border-brand-gold" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">E-posta</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-brand-gold focus:border-brand-gold" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Telefon</label>
            <input type="tel" name="phone" id="phone" required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-brand-gold focus:border-brand-gold" onChange={handleChange} />
          </div>
        </div>
        <div className="mt-8 text-right">
          <button type="submit" className="w-full md:w-auto bg-brand-gold text-black font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition shadow-lg">
            Rezervasyonu Onayla
          </button>
        </div>
      </form>
    </div>
  );
};

export default PassengerDetailsForm;