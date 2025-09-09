import React from 'react';

const ImageSlider = ({ images }) => {
  return (
    <div className="relative">
      <img src={images[0]} alt="Vehicle" className="w-full h-64 object-cover" loading="lazy" />
    </div>
  );
};

export default ImageSlider;
