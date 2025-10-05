import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'

const PricingPlan = () => {
  return (
    <div className="relative flex flex-col gap-8 md:gap-16 items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center text-center gap-3 w-full">

        {/* Heading */}
        <div className='flex flex-col items-center'>
          <motion.h1
            className="text-3xl md:text-4xl xl:text-6xl font-semibold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Claim Your Spot
          </motion.h1>
          <img src={assets.mainText} alt="mainText" className='-mt-1' />
        </div>
      </div>
    </div>
  )
}

export default PricingPlan