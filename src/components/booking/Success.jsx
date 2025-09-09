import React from 'react';

const Success = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-12 text-center">
      <div className="text-green-500 text-6xl mb-4">
        <i className="fas fa-check-circle"></i>
      </div>
      <h2 className="text-2xl font-bold mb-4">Rezervasyonunuz Alınmıştır!</h2>
      <p className="text-gray-600">
        Detayları e-posta adresinize gönderdik.
      </p>
    </div>
  );
};

export default Success;
