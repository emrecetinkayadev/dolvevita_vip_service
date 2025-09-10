import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, message: null, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: null, error: false });

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Bir hata oluştu.');
      }

      setStatus({ submitting: false, message: data.message, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Formu temizle
    } catch (error) {
      setStatus({ submitting: false, message: error.message, error: true });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 animate-fade-in">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-2xl relative border border-gray-700">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">&times;</button>
        <h2 className="font-serif text-3xl font-bold mb-6 text-white">Bize Ulaşın</h2>
        
        {status.message ? (
          <div className={`text-center p-4 rounded-md ${status.error ? 'bg-red-900 text-red-200' : 'bg-green-900 text-green-200'}`}>
            {status.message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Adınız Soyadınız" required className="bg-gray-700 border-gray-600 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold" onChange={handleChange} value={formData.name} />
              <input type="email" name="email" placeholder="E-posta Adresiniz" required className="bg-gray-700 border-gray-600 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold" onChange={handleChange} value={formData.email} />
            </div>
            <input type="text" name="subject" placeholder="Konu" required className="w-full bg-gray-700 border-gray-600 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold" onChange={handleChange} value={formData.subject} />
            <textarea name="message" placeholder="Mesajınız..." rows="5" required className="w-full bg-gray-700 border-gray-600 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold" onChange={handleChange} value={formData.message}></textarea>
            <button type="submit" disabled={status.submitting} className="w-full bg-brand-gold text-black font-bold py-3 rounded-md hover:bg-opacity-90 transition shadow-lg disabled:bg-gray-500">
              {status.submitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
