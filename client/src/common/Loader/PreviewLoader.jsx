import React from 'react'
import {motion} from 'framer-motion'
import './PreviewLoader.css'

const PreviewLoader = () => {

  //  Loading Animation
  const loaderAnimation = {
    initial: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" }
  };
  
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black"
      initial={loaderAnimation.initial}
      exit={loaderAnimation.exit}
      transition={loaderAnimation.transition}
    >
      <div className="container">
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
      </div>
      <p className="mt-8 text-gray-400 text-xl">Loading your experience...</p>
    </motion.div>
  )
}

export default PreviewLoader