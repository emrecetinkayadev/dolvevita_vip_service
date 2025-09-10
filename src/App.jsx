import React, { useState, useEffect, useContext } from 'react';
import { BookingContext } from './context/BookingContext.jsx';
import vehiclesData from './mock-vehicles.json';
import VehicleList from './components/booking/VehicleList';
import PassengerDetailsForm from './components/booking/PassengerDetailsForm';
import Success from './components/booking/Success';
import ContactModal from './components/contact/ContactModal'; // ContactModal import edildi

// --- Alt Bileşenler ---

const Header = ({ onContactClick }) => { // onContactClick prop'u eklendi
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'py-3 bg-glass shadow-xl' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-serif text-2xl font-bold">Dolce Vita VIP Service</div>
        <button onClick={onContactClick} className="bg-brand-gold text-black font-bold py-2 px-5 rounded-md text-sm hover:bg-opacity-90 transition-colors duration-300">
          İletişim
        </button>
      </div>
    </header>
  );
};

const SearchForm = () => {
  const { searchVehicles } = useContext(BookingContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchVehicles();
  };
  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in-up">
      <div className="bg-glass p-5 rounded-lg shadow-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
           {/* Form içeriği */}
          <div className="col-span-1"><label htmlFor="from" className="block text-xs font-medium text-gray-300">Nereden</label><input type="text" id="from" className="mt-1 block w-full bg-transparent text-white border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-brand-gold transition" placeholder="Havalimanı, Otel..." /></div>
          <div className="col-span-1"><label htmlFor="to" className="block text-xs font-medium text-gray-300">Nereye</label><input type="text" id="to" className="mt-1 block w-full bg-transparent text-white border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-brand-gold transition" placeholder="Adres, Konum..." /></div>
          <div className="col-span-1"><label htmlFor="passengers" className="block text-xs font-medium text-gray-300">Yolcu Sayısı</label><input type="number" id="passengers" min="1" defaultValue="1" className="mt-1 block w-full bg-transparent text-white border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-brand-gold transition" /></div>
          <div className="col-span-1"><button type="submit" className="w-full bg-brand-gold text-black font-bold py-3 px-4 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-gold transition shadow-lg">Araç Bul</button></div>
        </form>
      </div>
    </div>
  );
};

const HeroSection = () => (
  <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-black z-10">
      <video className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 opacity-50" src="/videos/luxury-car-driving.mp4" autoPlay loop muted />
    </div>
    <div className="relative z-20 px-4 animate-fade-in">
      <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-white">Ulaşımın Sanatı, Konforun Zirvesi</h1>
      <p className="font-sans text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-300">Dolce Vita VIP Service ile her yolculuk, size özel tasarlanmış birinci sınıf bir deneyimdir.</p>
    </div>
    <div className="relative z-20 mt-12 w-full px-4"><SearchForm /></div>
  </section>
);

// --- Ana Uygulama (Görünüm Katmanı) ---

function App() {
  const { booking, bookingStatus } = useContext(BookingContext);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Modal state'i

  if (bookingStatus === 'success') {
    return <Success />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      <main>
        <HeroSection />
        
        {booking.searchPerformed && (
          <section id="fleet" className="bg-gray-900 py-20">
            <div className="container mx-auto text-center">
              <h2 className="font-serif text-4xl font-bold">Filomuz</h2>
              <p className="font-sans text-lg text-gray-400 mt-2 mb-12">İhtiyaçlarınıza en uygun aracı seçin.</p>
              <VehicleList vehicles={vehiclesData} />
            </div>
          </section>
        )}

        {booking.vehicle && (
           <section id="passenger-details" className="py-20">
              <PassengerDetailsForm />
           </section>
        )}
      </main>
    </div>
  );
}

export default App;
