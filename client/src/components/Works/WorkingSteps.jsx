import { motion } from 'framer-motion';
import { assets, stepsData } from '../../assets/assets';

const WorkingStep = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-4 md:gap-8'>
        <div className='flex flex-col items-center'>
          <motion.h1
            className="text-3xl md:text-4xl xl:text-6xl font-semibold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How It Works? 
          </motion.h1>
          <img src={assets.mainText} alt="mainText" className='-mt-1' />
        </div>
        
        <div className='w-full md:w-[70%]'>
          <div className='relative'>
            <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/50 via-white/30 to-white/50'></div>
            
            {stepsData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className='relative flex items-start gap-6 mb-8 last:mb-0'
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className='flex-shrink-0 w-12 h-12 rounded-full bg-[#111] border-2 border-white flex items-center justify-center relative z-10 shadow-lg shadow-white/20'
                >
                  <img src={item.icon} alt={`${item.title} icon`} className='w-5 h-5' />
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className='flex-1 bg-white/5 border border-white/30 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300'
                >
                  <h3 className='font-medium text-xl text-white mb-2'>{item.title}</h3>
                  <p className='text-sm font-light text-white/80'>{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default WorkingStep;