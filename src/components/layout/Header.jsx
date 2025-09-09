import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">Dolce Vita VIP Service</div>
        <button className="bg-white text-black font-bold py-2 px-4 rounded">
          İletişim
        </button>
      </div>
    </header>
  );
};

export default Header;
