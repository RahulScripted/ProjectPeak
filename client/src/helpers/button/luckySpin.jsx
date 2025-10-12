import React from 'react';

const ButtonLuckySpin = ({ onClick }) => {
  return (
    <button
      className='text-sm bg-[#fff] text-black border border-[#fff] rounded-md cursor-pointer px-12 py-2 shadow-[0_6px_0_#ccc] active:shadow-[0_2px_0_#ccc] active:relative active:top-[2px] transition-all duration-100 font-semibold'
      onClick={onClick}
    >
      Draw Spin
    </button>
  );
};

export default ButtonLuckySpin;
