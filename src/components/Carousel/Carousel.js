import { useState } from 'react';
import Next from '../ArrowKeys/Next';
import { Previous } from '../ArrowKeys/Previous';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/carousel-1.png',
    '/carousel-2.jpg',
    '/carousel-3.jpg',
    '/carousel-4.jpg',

  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative w-full">
      <div className="relative h-52 overflow-hidden rounded-xl md:h-[500px] shadow-xl shadow-gray-400">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${currentSlide === index ? 'block' : 'hidden'
              }  duration-700 ease-in-out absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
              
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            aria-current={currentSlide === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group "
        onClick={prevSlide}
      >
        <Previous/>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group "
        onClick={nextSlide}
      >
       <Next />
      </button>
    </div>
  );
};

export default Carousel;
