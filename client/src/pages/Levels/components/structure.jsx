import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../../assets/assets';
import { useLocation, useParams } from 'react-router-dom';
import ButtonLuckySpin from '../../../helpers/button/luckySpin';
import LevelCard from './levelCard';

const Structure = () => {

  const { level } = useParams();
  const levelName = level?.charAt(0).toUpperCase() + level?.slice(1);

  const [spinTrigger, setSpinTrigger] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSpin = () => {
    setSpinTrigger(prev => !prev);
  };

  return (
    <div className='flex flex-col items-center justify-center relative gap-10'>
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
        className='text-center w-full lg:max-w-[70%] text-gray-200 text-xs md:text-sm -mt-5'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to the {levelName} Level! This stage is designed to introduce you to the
        essential concepts and challenges in a way that is engaging and approachable.
      </motion.p>

      <LevelCard spinTrigger={spinTrigger} />

      <div className='fixed bottom-3 md:bottom-10 flex items-center justify-center w-full'>
        <ButtonLuckySpin onClick={handleSpin} />
      </div>
    </div>
  );
};

export default Structure;
