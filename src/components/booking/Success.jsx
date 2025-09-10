import React from 'react';

const Success = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-900">
      <div className="animate-fade-in">
        <h1 className="font-serif text-5xl text-brand-gold font-bold mb-4">Teşekkür Ederiz!</h1>
        <p className="text-xl text-gray-300">Rezervasyon talebiniz başarıyla alınmıştır.</p>
        <p className="text-gray-400 mt-2">En kısa sürede sizinle iletişime geçeceğiz.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-8 bg-brand-gold text-black font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition">
          Yeni Rezervasyon
        </button>
      </div>
    </div>
  );
};

export default Success;