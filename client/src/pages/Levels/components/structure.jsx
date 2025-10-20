import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../../assets/assets';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonLuckySpin from '../../../helpers/button/luckySpin';
import LevelCard from './levelCard';

const Structure = () => {
  const { level } = useParams();
  const levelName = level?.charAt(0).toUpperCase() + level?.slice(1);
  const [spinTrigger, setSpinTrigger] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSpin = () => {
    setSpinTrigger(prev => !prev);
  };

  const handleNavigation = () => {
    navigate('/');
  }

  return (
    <div className='flex flex-col items-center justify-center relative gap-10 w-full'>
      <div className='flex flex-col items-center'>
        <motion.h1
          className='text-3xl md:text-4xl xl:text-6xl font-semibold text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className='bg-gradient-to-b from-white via-gray-300 to-violet-600 text-transparent bg-clip-text'>
            {levelName} Level
          </span>
        </motion.h1>
        <img src={assets.mainText} alt='mainText' className='-mt-1' />
      </div>

      <motion.p
        className='text-center w-full lg:max-w-[70%] text-gray-200 text-xs md:text-sm lg:text-base -mt-8'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to the {levelName} Level! This stage marks an exciting step forward in your journey, thoughtfully crafted to introduce you to the fundamental concepts, core mechanics, and key challenges that lie ahead.
      </motion.p>

      <LevelCard spinTrigger={spinTrigger} />

      <div className='fixed bottom-3 md:bottom-5 flex items-center justify-center w-full'>
        <ButtonLuckySpin onClick={handleSpin} />
      </div>

      <button className='absolute rounded-full top-0 left-0 cursor-pointer' onClick={handleNavigation}>
        Back
      </button>
    </div>
  );
};

export default Structure;