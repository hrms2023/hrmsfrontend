import { useState } from 'react';
import { Previous } from '../ArrowKeys/Previous';
import Next from '../ArrowKeys/Next';
import Stars from '../Stars/Stars';
import { EyeIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

const CollectionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', // Add more images as needed
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  ];

  const itemsPerSlide = 6; // Number of items to display per slide
  const totalSlides = Math.ceil(slides.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const renderSlide = (slideIndex) => {
    const startIndex = slideIndex * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return slides.slice(startIndex, endIndex).map((slide, index) => (
      <div
        key={startIndex + index}
        className="w-full px-8"
      >
        <div className="h-full" >
          <div className='px-3  justify-end'>
            <div className='w-32'>
              <img className='rounded-lg' src={slide} alt={`Slide ${startIndex + index + 1}`} />
            </div>
            <div className='mt-2'>
              <a className='text-gray-900 text-[13px] font-semibold'>Gate over</a>
              <div className='mt-1'>
                <Stars />
              </div>
              <div className='flex flex-row text-center items-center mt-2'>
                <a className='text-gray-900 text-[12px] font-normal underline'>Somnath Sarkar,</a>
                <a className='text-gray-500 text-[12px] font-normal ml-1'>India</a>
              </div>
              <div className='flex flex-col'>
                <a className='text-gray-500 text-[12px] font-normal mt-1'>Prints, Lithography</a>
                <a className='text-gray-500 text-[12px] font-normal mt-1'>50.8 × 66.04 cm</a>
                <a className='text-[13px] font-semibold text-[#ce3434] mt-1'>₹36,400</a>
              </div>
              <div className='flex flex-row mt-2'>
                <div className='items-center justify-center text-center flex flex-row bg-[#ce3434] p-2 w-full'>
                  <EyeIcon className='h-3 w-3 text-white' />
                  <p className='font-roboto text-white ml-1 text-[10px] hover:cursor-pointer'>Product</p>
                </div>
                <div className='items-center justify-center text-center flex flex-row bg-black p-2 w-full'>
                  <ShoppingBagIcon className='h-3 w-3 text-white' />
                  <p className='font-roboto  text-white ml-1 text-[10px] hover:cursor-pointer'>Bag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };



  return (
    <div className="relative w-full overflow-hidden">
      <div className="h-96 overflow-hidden">
        <div
          className="duration-700 ease-in-out absolute flex transition-transform transform"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${(currentSlide / totalSlides) * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }, (_, index) => (
            <div
              key={index}
              className="flex px-10 -mr-4"
              style={{
                width: `${(1 / totalSlides) * 100}%`,
              }}
            >
              {renderSlide(index)}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="absolute top-14 px-4 left-0 cursor-pointer"
        onClick={prevSlide}
      >
        <Previous />
      </button>
      <button
        type="button"
        className="absolute top-14 px-4  right-0 cursor-pointer "
        onClick={nextSlide}
      >
        <Next />
      </button>
    </div>
  );
};

export default CollectionCarousel;
