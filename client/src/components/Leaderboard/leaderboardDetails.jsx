import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'
import LeaderboardTable from './leaderboardTable'

const LeaderboardDetails = () => {
  return (
     <div className="flex flex-col items-center justify-center gap-8 md:gap-16 w-full">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center gap-3 w-full">
            <div className='flex flex-col items-center'>
            <motion.h1
                className="text-3xl md:text-4xl xl:text-6xl font-semibold text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
            Top 5 Achievers
            </motion.h1>
            <img src={assets.mainText} alt="mainText" className='-mt-1' />
            </div>
            
            {/* Paragraph */}
            <p className="text-sm md:text-base text-gray-300 w-full md:w-[900px]">
                Celebrate the best performers of our Full Stack Internship Program! These top 10 achievers have shown exceptional skill, dedication, and creativity throughout their journey.
                <span className="hidden md:inline">
                    {' '}
                    See what it takes to reach the top of the leaderboard.
                </span>
            </p>
        </div>

        <div className='w-full md:w-[70%]'>
            <LeaderboardTable />
        </div>
    </div>
  )
}

export default LeaderboardDetails
