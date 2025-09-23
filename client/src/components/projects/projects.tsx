"use client";
import { motion } from 'framer-motion';

const Projects = () => {
  const levels = [
    {
        id: 1,
        title: "Responsive UI Essentials",
        description: `Master the art of building web interfaces that look stunning on any device.`,
        difficulty: "Easy",
        color: "text-green-500",
        borderColor: "border-green-500"
    },
    {
        id: 2,
        title: "Logic Building Fundamentals",
        description: `Sharpen your problem-solving and coding skills with projects that strengthen logical thinking.`,
        difficulty: "Medium",
        color: "text-yellow-400",
        borderColor: "border-yellow-400"
    },
    {
        id: 3,
        title: "Performance Mastery",
        description: `Take your development skills to the next level by focusing on performance, optimization, and advanced concepts.`,
        difficulty: "Hard",
        color: "text-red-500",
        borderColor: "border-red-500"
    }
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center gap-5 md:gap-10 ">
        <motion.h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold text-center">
          Projects Structure
        </motion.h1>

        <div className='w-full flex items-center justify-center gap-10 flex-wrap relative'>
            {levels.map((level, idx) => (
                <div key={idx} className='w-full md:w-[400px] h-auto md:h-[300px] p-5 rounded-md border bg-[#11111184] flex flex-col relative cursor-pointer'>
                    <div className={`absolute top-3 right-3 px-4 py-1 border ${level.borderColor} ${level.color} rounded-full font-semibold text-sm`}>
                        {level.difficulty}
                    </div>
                    <div className='flex flex-col mt-6'>
                        <h2 className='text-xl md:text-2xl font-semibold mb-3'>{level.title}</h2>
                        <p className='text-sm'>{level.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects;
