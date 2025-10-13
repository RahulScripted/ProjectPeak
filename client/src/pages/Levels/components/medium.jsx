import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Medium = ({ spinTrigger }) => {
  const totalBoxes = 12;
  const [highlightedBox, setHighlightedBox] = useState(null);
  const [selectedBox, setSelectedBox] = useState(null);

  useEffect(() => {
    if (!spinTrigger) return;

    setSelectedBox(null);
    let spinCount = 0;
    let currentIndex = 0;
    const spinDuration = 5000;
    const intervalTime = 150;

    const interval = setInterval(() => {
      setHighlightedBox(currentIndex);
      currentIndex = (currentIndex + 1) % totalBoxes;
      spinCount += intervalTime;
      if (spinCount >= spinDuration) {
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * totalBoxes);
        setSelectedBox(finalIndex);
        setHighlightedBox(finalIndex);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [spinTrigger]);

  const boxes = Array.from({ length: totalBoxes });
  const displayedBoxes =
    selectedBox !== null
      ? [boxes[selectedBox], ...boxes.filter((_, i) => i !== selectedBox)]
      : boxes;

  return (
    <div className="w-full flex items-center justify-center gap-5 md:gap-10 flex-wrap">
      {displayedBoxes.map((_, index) => {
        const realIndex =
          selectedBox !== null
            ? index === 0
              ? selectedBox
              : boxes.findIndex((_, i) => i !== selectedBox && i === index - 1 + (selectedBox < index ? 1 : 0))
            : index;

        const isSelected = selectedBox === realIndex;
        const isHighlighted = highlightedBox === realIndex && selectedBox === null;

        return (
          <motion.div
            key={realIndex}
            layout
            initial={false}
            animate={
              isHighlighted || isSelected
                ? {
                    borderColor: ['#fff', '#8b5cf6', '#fff'],
                    scale: [1, 1.05, 1],
                    borderRadius: ['8px', '20px', '8px'],
                    transition: { duration: 0.5, repeat: isSelected ? 0 : Infinity },
                  }
                : {}
            }
            className={`
              w-full sm:w-[300px] lg:w-[400px] h-60 border border-white rounded-md
              ${selectedBox !== null && !isSelected ? 'pointer-events-none opacity-50 bg-[#11111150]' : 'bg-[#11111192] cursor-pointer'}
            `}
          ></motion.div>
        );
      })}
    </div>
  );
};

export default Medium;
