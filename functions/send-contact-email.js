const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Sadece POST isteklerini kabul et
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, subject, message } = JSON.parse(event.body);

  // --- E-POSTA GÖNDERİM KISMI ---
  // GERÇEK KULLANIM İÇİN BU BİLGİLERİ KENDİ BİLGİLERİNİZLE VE ORTAM DEĞİŞKENLERİ (ENVIRONMENT VARIABLES) İLE DOLDURUN.
  // Örnek: process.env.EMAIL_USER, process.env.EMAIL_PASS, process.env.RECIPIENT_EMAIL
  
  /*
  // 1. Transporter'ı oluşturun (örn: SendGrid, Gmail)
  const transporter = nodemailer.createTransport({
    service: 'SendGrid', // veya 'gmail'
    auth: {
      user: 'apikey', // SendGrid için kullanıcı adı 'apikey'dir
      pass: process.env.SENDGRID_API_KEY, // API anahtarınızı ortam değişkeninden alın
    },
  });

  // 2. E-posta seçeneklerini ayarlayın
  const mailOptions = {
    from: `"${name}" <form@dolcevita.com>",
    to: 'SİZİN_EMAİL_ADRESİNİZ@example.com', // Buraya kendi e-posta adresinizi yazın
    replyTo: email,
    subject: `Yeni İletişim Formu Mesajı: ${subject}`,
    html: `
      <p><strong>Gönderen:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <hr>
      <p><strong>Mesaj:</strong></p>
      <p>${message}</p>
    `,
  };

  // 3. E-postayı gönderin
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Mesaj başarıyla gönderildi.' }),
    };
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'E-posta gönderilirken bir hata oluştu.' }),
    };
  }
  */

  // --- SİMÜLASYON KISMI ---
  // Yukarıdaki gerçek gönderim kısmı aktif edildiğinde bu bölümü silebilirsiniz.
  console.log('Alınan form verisi:', { name, email, subject, message });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Mesaj başarıyla gönderildi (Simülasyon).' }),
  };
};
