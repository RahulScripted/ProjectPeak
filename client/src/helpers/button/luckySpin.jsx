import React from 'react';

const ButtonLuckySpin = ({ onClick }) => {
  return (
    <button
      className="relative h-[50px] px-[30px] border-2 border-white bg-black select-none whitespace-nowrap transition-all duration-100 font-inherit text-white hover:cursor-crosshair active:scale-95 font-semibold text-[15px] z-3"
      onClick={onClick}
    >
      <div className="absolute w-[calc(100%+6px)] h-[calc(100%-16px)] top-2 left-[-3px] bg-black transition-all duration-200 hover:h-[calc(100%-32px)] hover:top-4"></div>
      
      <div className="absolute w-[calc(100%-16px)] h-[calc(100%+6px)] top-[-3px] left-2 bg-black transition-all duration-200 hover:w-[calc(100%-32px)] hover:left-4"></div>
      
      <span className="relative z-10 font-semibold">
        Draw Spin
      </span>
    </button>
  );
};

export default ButtonLuckySpin;