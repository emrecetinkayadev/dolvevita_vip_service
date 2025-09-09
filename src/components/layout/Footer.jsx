import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dolce Vita VIP Service</h3>
            <p className="text-gray-400">
              Ulaşımın sanatı, konforun zirvesi.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Erişim</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-white">Hakkımızda</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Filomuz</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Hizmet Koşulları</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Gizlilik Politikası</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Telefon: +90 555 555 55 55</li>
              <li className="mb-2">E-posta: info@dolcevita.com</li>
              <li className="mb-2">Adres: İstanbul, Türkiye</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
