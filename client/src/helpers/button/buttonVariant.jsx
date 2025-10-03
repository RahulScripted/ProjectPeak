import React from 'react'

const ButtonVariant = ({ text }) => {
  return (
    <button
      className="text-sm bg-[#fff] text-black border border-[#fff] rounded-md cursor-pointer px-6 py-2 shadow-[0_6px_0_#ccc] active:shadow-[0_2px_0_#ccc] active:relative active:top-[2px] transition-all duration-100"
    >
      {text}
    </button>
  )
}

export default ButtonVariant
