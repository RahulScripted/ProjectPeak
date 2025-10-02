import React from 'react'

const ButtonText = ({ text }) => {
  return (
    <button
      className="text-sm bg-[#8522f5] border border-[#8522f5] rounded-md cursor-pointer px-6 py-2 shadow-[0_6px_0_#5904ba] active:shadow-[0_2px_0_#5904ba] active:relative active:top-[2px] transition-all duration-100"
    >
      {text}
    </button>
  )
}

export default ButtonText
