import React from 'react';

const VideoBackground = () => {
  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://assets.mixkit.co/videos/preview/mixkit-a-luxury-black-car-in-the-road-4139-large.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold">Ulaşımın Sanatı. Konforun Zirvesi.</h1>
        return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        src="/videos/luxury-car-driving.mp4" // Bu videonun public klasöründe olduğunu varsayıyoruz
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight animate-fade-in-down">
          Zirvedeki Yolculuk Deneyiminiz
        </h1>
        <p className="font-sans text-lg md:text-xl mt-4 max-w-2xl animate-fade-in-up">
          Dolce Vita VIP Service ile lüksün, konforun ve güvenliğin keyfini çıkarın. Her yolculuk, unutulmaz bir anıya dönüşsün.
        </p>
      </div>
    </div>
  );
      </div>
    </div>
  );
};

export default VideoBackground;
