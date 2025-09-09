import React, { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';

const PaymentForm = ({ setBookingStatus }) => {
  const { booking } = useContext(BookingContext);

  // Render this component only if passenger details have been submitted
  if (!booking.passengerDetails) {
    return null;
  }

  const handleBooking = () => {
    console.log("Booking completed with mock data:", booking);
    // Simulate a successful booking
    setBookingStatus('success');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6">Ödeme Bilgileri</h2>
      <div className="text-center p-4">
        <p className="mb-4">Ödeme entegrasyonu geçici olarak devre dışı bırakıldı.</p>
        <button 
          onClick={handleBooking}
          className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Rezervasyonu Tamamla (Simülasyon)
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
