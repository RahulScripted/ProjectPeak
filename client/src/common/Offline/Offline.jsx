import React from 'react'
import {useNavigate} from 'react-router-dom'


const Offline = () => {

  // Redirect to game page
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/can-you-escape')
  }


  return (
    <div className='absolute top-0 left-0 overflow-hidden flex flex-col items-center justify-center w-full h-screen text-white bg-black text-center'>
        
        {/* Title */}
        <h1 className='font-bold text-4xl'>You're offline</h1>

        {/* Description */}
        <p className='text-gray-400 mt-2'>
            The internet connection seems lost. <br />
            Please check your network and try again. 🚀
        </p>

        {/* Button */}
        <button onClick={handleClick} className='w-[200px] border border-violet-500 mt-5 px-7 py-3 rounded-full cursor-pointer hover:bg-violet-500 hover:border-white hover:shadow-sm hover:shadow-white transition-all duration-500'>Play a Game</button>
    </div>
  )
}

export default Offline