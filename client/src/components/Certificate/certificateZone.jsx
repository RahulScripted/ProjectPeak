import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'

const CertificateZone = () => {
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
            Get Certified
            </motion.h1>
            <img src={assets.mainText} alt="mainText" className='-mt-1' />
            </div>
            
            {/* Paragraph */}
            <p className="text-sm md:text-base text-gray-300 w-full md:w-[900px]">
                You've reached the finish line of a truly rewarding journey. From mastering responsive designs to building a full-stack project, every step has shaped your developer story.
                <span className="hidden md:inline">
                    {' '}
                    Now, claim your <strong className="text-white">Certificate of Completion</strong>
                </span>
            </p>
        </div>
        <div className='w-full md:w-[800px] h-[200px] md:h-[400px] flex items-center justify-center'>
            <div className='w-full h-full rounded-md bg-violet-700'></div>
        </div>
    </div>
  )
}

export default CertificateZone