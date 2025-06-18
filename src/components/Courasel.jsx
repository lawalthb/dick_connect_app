import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Carousel = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < items.length - 1) setIndex(index + 1);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative overflow-hidden">
        <div
          {...swipeHandlers}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="min-w-full flex-shrink-0 p-4 flex justify-center items-center"
            >
              <div className="w-full h-60 bg-white rounded-xl shadow-md flex items-center justify-center text-xl font-bold text-gray-700">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between mt-4 px-4">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={index === items.length - 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
