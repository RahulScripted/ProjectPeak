import React from 'react'
import ReviewSection from '../../components/Testimonial/reviewSection'
import Subscription from '../../components/Subscription/Subscription'

const Home = () => {
  return (
    <div className='flex flex-col w-full min-h-screen bg-black text-white p-5 md:p-10 gap-28'>
      <ReviewSection />
      <Subscription />
    </div>
  )
}

export default Home