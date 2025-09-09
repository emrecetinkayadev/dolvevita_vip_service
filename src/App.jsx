import React, { useState, useContext, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import VideoBackground from './components/hero/VideoBackground';
import SearchForm from './components/booking/SearchForm';
import VehicleList from './components/booking/VehicleList';
import PassengerDetailsForm from './components/booking/PassengerDetailsForm';
import PaymentForm from './components/booking/PaymentForm';
import Success from './components/booking/Success';
import { BookingContext } from './context/BookingContext';

function App() {
  const { booking, filteredVehicles } = useContext(BookingContext);
  const [bookingStatus, setBookingStatus] = useState('pending');

  useEffect(() => {
    // Check for redirect status from Stripe
    const query = new URLSearchParams(window.location.search);

    if (query.get('redirect_status') === 'succeeded') {
      setBookingStatus('success');
    }

    if (query.get('redirect_status') === 'failed') {
      // You can also handle the failed state, e.g., show an error message.
      console.error('Payment failed.');
    }
  }, []);

  useEffect(() => {
    if (bookingStatus === 'success') {
      console.log('Booking successful:', booking);
      // Here you would typically save the booking to a database.
    }
  }, [bookingStatus, booking]);

  return (
    <div className="bg-gray-800">
      <Header />
      <main>
        {bookingStatus === 'pending' && (
          <>
            <VideoBackground />
            <SearchForm />
            <VehicleList vehicles={filteredVehicles} />
            <PassengerDetailsForm />
            <PaymentForm setBookingStatus={setBookingStatus} />
          </>
        )}
        {bookingStatus === 'success' && <Success />}
      </main>
      <Footer />
    </div>
  );
}

export default App;