import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'py-4 bg-glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-serif text-3xl font-bold">Dolce Vita VIP Service</div>
        <button className="bg-brand-gold text-black font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300">
          İletişim
        </button>
      </div>
    </header>
  );
};

export default Header;
