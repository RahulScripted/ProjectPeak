import { useState } from 'react';
import { motion } from 'framer-motion';

const Accordian = ({ question, answer }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const handleClick = () => {
    setAccordianOpen(!accordianOpen);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } }
  };

  return (
    <motion.div
      className="py-3"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <button
        onClick={handleClick}
        className="flex justify-between w-full cursor-pointer"
      >
        <h1 className="text-[1rem] md:text-xl text-left font-semibold">{question}</h1>
        <svg className="fill-gray-300 shrink-0 ml-8" width="16" height="16">
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordianOpen && '!rotate-180'
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordianOpen && '!rotate-180'
            }`}
          />
        </svg>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out mt-3 text-sm md:text-[1rem] ${
          accordianOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-neutral-300">{answer}</div>
      </div>
    </motion.div>
  );
};

export default Accordian;