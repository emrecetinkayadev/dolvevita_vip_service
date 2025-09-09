import React, { useState, useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';

const PassengerDetailsForm = () => {
  const { setPassengerDetails, booking } = useContext(BookingContext);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    flightNumber: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Ad Soyad zorunludur.';
    if (!formData.email) {
      newErrors.email = 'E-posta zorunludur.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçersiz e-posta formatı.';
    }
    if (!formData.phone) newErrors.phone = 'Telefon numarası zorunludur.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setPassengerDetails(formData);
      console.log('Passenger details saved:', formData);
      // You can add logic here to scroll to the payment form
    }
  };

  // Hide form if no vehicle is selected yet
  if (!booking.vehicle) {
    return null;
  }

  return (
    <div id="passenger-details-form" className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6">Yolcu Bilgileri</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Ad Soyad</label>
          <input type="text" id="fullName" value={formData.fullName} required onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
          <input type="email" id="email" value={formData.email} required onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon Numarası</label>
          <input type="tel" id="phone" value={formData.phone} required onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="flightNumber" className="block text-sm font-medium text-gray-700">Uçuş Numarası (Opsiyonel)</label>
          <input type="text" id="flightNumber" value={formData.flightNumber} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Özel Notlar</label>
          <textarea id="notes" rows="4" value={formData.notes} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Bilgileri Kaydet ve Devam Et
          </button>
        </div>
      </form>
    </div>
  );
};

export default PassengerDetailsForm;
