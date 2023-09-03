import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
    'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
    'https://mdbcdn.b-cdn.net/img/new/slides/044.webp',
    'https://mdbcdn.b-cdn.net/img/new/slides/045.webp',
    'https://mdbcdn.b-cdn.net/img/new/slides/047.webp',
    // 'https://mdbcdn.b-cdn.net/img/new/slides/050.webp',
    // 'https://mdbcdn.b-cdn.net/img/new/slides/014.webp',

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to switch to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); 

    return () => clearInterval(interval); 
  }, []);

    return (
        <div className="relative" >
          <div className="w-full overflow-hidden" style={{ width: '100%', height: '500px' }}> 
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative w-full transition-transform duration-600 ease-in-out motion-reduce:transition-none ${
                  index === currentIndex ? '' : 'hidden'
                }`}
              >
                <img src={image} className="block " alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        </div>
      );
};

export default Carousel;


