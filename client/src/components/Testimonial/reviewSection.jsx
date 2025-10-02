import React from 'react'
import Marquee from 'react-fast-marquee'
import ButtonText from '../../helpers/button/ButtonText'

const testimonials = [
  {
    id: 1,
    name: 'Aarav Sharma',
    job: 'IIT Delhi',
    feedback:
      'This website guided me step by step to create impactful projects. It made the whole process structured and easy to follow.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Verma',
    job: 'BITS Pilani',
    feedback:
      'The platform helped me transform my ideas into valuable projects. Each level made me more confident and skilled.',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Rohan Gupta',
    job: 'IIM Bangalore',
    feedback:
      'Building projects here felt like a guided journey. Every stage added real value to my learning experience.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Ananya Iyer',
    job: 'NIT Trichy',
    feedback:
      'The structured levels kept me motivated throughout. I was able to build meaningful projects that I can showcase proudly.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Karan Patel',
    job: 'VIT Vellore',
    feedback:
      'This platform is a game-changer! It makes project building systematic, and the step-by-step levels are super helpful.',
    rating: 4.5,
  },
  {
    id: 6,
    name: 'Sneha Reddy',
    job: 'Anna University',
    feedback:
      'The website turned my rough ideas into well-structured projects. Each level felt like a milestone achieved.',
    rating: 5,
  },
]

const getInitials = (name) => {
  const parts = name.trim().split(' ')
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return parts[0][0].toUpperCase() + parts[parts.length - 1][0].toUpperCase()
}

const renderStars = (rating) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 mr-1 drop-shadow-[0_0_2px_rgba(255,255,0,0.6)]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.538 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.783.57-1.838-.197-1.538-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.03 9.377c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.95z" />
        </svg>
      )
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 mr-1 drop-shadow-[0_0_2px_rgba(255,255,0,0.6)]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.5 12.545 1 8.91l6.061-.91L10 2l2.939 6l6.061.91l-4.5 3.636l1.378 5.545z" />
          <path
            d="M10 2v13.09l5.878 3.09L14.5 12.545L19 8.91l-6.061-.91L10 2z"
            fill="currentColor"
          />
        </svg>
      )
    } else {
      stars.push(
        <svg
          key={i}
          className="w-5 h-5 text-gray-600 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.538 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.783.57-1.838-.197-1.538-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.03 9.377c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.95z" />
        </svg>
      )
    }
  }
  return stars
}

const ReviewSection = () => {
  return (
    <div className="relative flex flex-col gap-8 md:gap-16 items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center text-center gap-3 w-full">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold">What Our Users Say</h1>

        {/* Paragraph */}
        <p className="text-sm md:text-base text-gray-300 w-full md:w-[900px]">
          We take pride in delivering innovative solutions powered by AI.
          <span className="hidden md:inline">
            {' '}
            From seamless automation to user-friendly experiences, our platform
            has helped users achieve more with less effort. Here's what they
            have to say about their journey with us!
          </span>
        </p>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 blur-sm" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 blur-sm" />

      {/* Marquee */}
      <Marquee direction="right" pauseOnHover gradient={false}>
        {testimonials.map(({ id, name, job, feedback, rating }) => (
          <div
            key={id}
            className="flex flex-col p-6 bg-[#101010] rounded-md w-full sm:w-[350px] h-[225px] cursor-pointer mr-5 md:mr-10 hover:shadow-gray-300 hover:scale-95 transition-all duration-200 relative"
          >
            <div className="flex items-start gap-5">
              <div className='w-14 h-14 rounded-full border border-violet-600  font-bold p-1 mb-5'>
                <div className="w-full h-full rounded-full bg-violet-700 flex items-center justify-center">
                    {getInitials(name)}
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-medium">{name}</h1>
                <p className="text-xs md:text-sm text-gray-300">{job}</p>
              </div>
            </div>

            <p className="text-sm text-gray-400">{feedback}</p>
            <div className="flex w-full items-center justify-center mt-3">{renderStars(rating)}</div>
          </div>
        ))}
      </Marquee>

      {/* Buttons */}
      <ButtonText text={"Add Your Review"} />
    </div>
  )
}

export default ReviewSection
