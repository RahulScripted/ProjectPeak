import React from 'react'

const ButtonCardText = ({ text, disabled }) => {
  return (
    <button
      className={`w-full mt-5 mb-3 text-sm bg-[#8522f5] border border-[#8522f5] rounded-md px-6 py-2 shadow-[0_6px_0_#5904ba] active:shadow-[0_2px_0_#5904ba] active:relative active:top-[2px] transition-all duration-100 ${disabled === true ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-35" }`}
    >
      {text}
    </button>
  )
}

export default ButtonCardText
