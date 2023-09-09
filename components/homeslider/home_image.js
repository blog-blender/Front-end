import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
    'https://www.foodandwine.com/thmb/O2ZjV3L_cNcz258bkrDgrYPanD0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/What-Is-Chaos-Cooking-TikToks-Latest-Obsession-FT-BLOG0723-be130eb8cffe400eb13ccfbe47de733a.jpg',
    'https://www.verywellhealth.com/thmb/T_OlMhFfEYWW0Igl4A_VvDKZ4gY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-makeup-brands-562443-primary-recirc-b8cf5ac52391436ba4114a6355aac323.jpg',
    'https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001-b5fb3d8d8469ab744d9e97706fa67bc5c0e4fa40.jpg',
    'https://www.rd.com/wp-content/uploads/2019/09/shutterstock_editorial_5884766b-e1569251332374.jpg',


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
      <div className="relative">
      <div className="w-full overflow-hidden" style={{ width: '100%', height: '500px' }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-full transition-transform duration-600 ease-in-out motion-reduce:transition-none ${
              index === currentIndex ? '' : 'hidden'
            }`}
          >
            <img src={image} className="block" alt={`Image ${index}`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-600 ease-in-out motion-reduce:transition-none"></div>
      </div>
    </div>
      );
};

export default Carousel;
 