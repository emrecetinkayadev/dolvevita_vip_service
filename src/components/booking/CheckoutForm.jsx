import React, { useState, useContext } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { BookingContext } from '../../context/BookingContext';

const CheckoutForm = ({ setBookingStatus }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { booking } = useContext(BookingContext);

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Redirect to this page after payment. We'll check the status here.
        return_url: window.location.href.split('?')[0],
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="w-full mt-6 bg-indigo-6-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : `Öde ${booking.vehicle.price}`}
        </span>
      </button>
      {message && <div id="payment-message" className="text-red-500 text-sm mt-2">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
