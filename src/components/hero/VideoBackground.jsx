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
        <p className="text-xl mt-4">Elysian VIP Transfer</p>
      </div>
    </div>
  );
};

export default VideoBackground;
