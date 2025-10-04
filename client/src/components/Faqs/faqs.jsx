import { motion, useMotionValue } from 'framer-motion';
import Accordian from './accordian';
import { assets, faqData } from '../../assets/assets';

const Faq = () => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="flex flex-col items-center justify-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >

      <div className="flex flex-col items-center mb-5 md:mb-10">
        <motion.h1
          className="text-3xl md:text-4xl xl:text-6xl font-semibold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          FAQ's
        </motion.h1>
        <img src={assets.mainText} alt="mainText" />
      </div>

      <div className="w-full md:w-[75%] flex flex-col">
        {faqData.map((faq, idx) => (
          <Accordian
            key={idx}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;