import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'

const AboutUs = () => {

  // Facts data array
  const facts = [
    { number: '3K+', text: 'Registered Users' },
    { number: '4.7★', text: 'Average Rating' },
    { number: '100+', text: 'LinkedIn Community' },
  ]

  return (
    <div className='flex flex-col'>
      
      {/* Upper Part */}
      <div className="flex flex-col items-center justify-center text-center gap-3 w-full">
        <motion.h1
          className="text-4xl xl:text-6xl font-semibold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <img src={assets.mainText} alt="mainText" className='-mt-5 md:-mt-1' />
      </div>

      {/* Lower Part */}
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-between gap-10 md:gap-24'>

        {/* Left Part */}
        <div className='w-full md:w-1/2 flex flex-col gap-3'>
        <p className="text-gray-200">
          At <b className='font-bold text-2xl'>Project Peak</b>, we are more than just a learning platform — we are a community of creators, innovators, and lifelong learners. 
          Our goal is to make project creation accessible, enjoyable, and deeply rewarding for everyone, whether you're a complete beginner exploring the world of design and development or someone looking to sharpen your technical and creative skills. 
          We provide structured guidance, real-world examples, and hands-on projects that help learners build confidence and master the skills needed for today’s dynamic digital landscape.
          
          <span className="hidden sm:inline">
            Project Peak is dedicated to empowering learners by combining practical experience with mentorship and support. 
            We believe that practical knowledge is the true key to growth, and our programs are designed to bridge the gap between theory and real-world application. 
            Here, every challenge is an opportunity to learn, every project is a milestone, and every step helps you climb higher with clarity and confidence. 
            By engaging in our projects, learners not only gain technical expertise but also develop creativity, problem-solving abilities, and a mindset geared toward continuous improvement.
          </span>
        </p>

          {/* Some Interesting Facts */}
          <div className='w-full flex space-x-15 gap-10 flex-wrap mt-5 md:mt-10'>
            {facts.map((fact, index) => (
              <div key={index} className='flex flex-col'>
                <span className='text-3xl md:text-4xl font-bold'>{fact.number}</span>
                <span className='text-base text-gray-300'>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Part */}
        <div className='w-full md:w-1/3 flex items-center justify-center'>
          <img src={assets.Abouts} alt="Abouts" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
