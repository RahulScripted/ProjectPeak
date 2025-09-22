
import { motion } from 'framer-motion';
import Accordian from './accordian';

const Faq = () => {
  
  type FaqType = {
    id: number;
    question: string;
    answer: string | string[];
  };

  const faqsData: FaqType[] = [
    {
        id: 1,
        question: "Do I need prior coding experience to join?",
        answer: "For the basic package, only knowledge of HTML, CSS, and JavaScript is required. Familiarity with React is helpful, but you'll learn and practice through projects step by step. For the expert package, you will need to master backend development, frontend development, databases, API calls, and other advanced topics, which are covered progressively in that package."
    },
    {
        id: 2,
        question: "How is my performance evaluated?",
        answer: "Every project is graded out of 100 points based on design, functionality, and code quality. You must score at least 225 points across any 3 projects to qualify for the Completion Certificate."
    },
    {
        id: 3,
        question: "How do I submit my projects?",
        answer: [
        "A GitHub repository link.",
        "A Live preview/deployment link.",
        "A LinkedIn post link to showcase your progress."
        ]
    },
    {
        id: 4,
        question: "Is there a fee for joining?",
        answer: "Yes, there is a one-time fee of ₹149 for the core program, which gives you access to all project details, resources, and evaluations for the Beginner to Advanced levels. The Expert Full-Stack package comes separately and has its own pricing."
    },
    {
        id: 5,
        question: "What makes the Expert package different?",
        answer: "The Expert package is a standalone upgrade that includes a complete full-stack project. It covers responsive frontend, backend APIs, authentication, database integration, and deployment."
    },
    {
        id: 6,
        question: "What do I get after completing the program?",
        answer: "You'll receive a Completion Certificate, a stronger GitHub portfolio, and tips on showcasing your projects on LinkedIn."
    }
  ];

  return (
    <motion.div
      className="flex flex-col gap-7 md:gap-10 items-center justify-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >

      <motion.h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold text-center">
        Frequently Asked Questions
      </motion.h1>

      <div className="flex flex-col">
        {faqsData.map((faq, idx) => (
          <Accordian
            key={idx}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>

      <p className="text-slate-200 flex items-center gap-1 text-sm md:text-xl">
        Still have questions? Click{' '}
        <span
          className="text-violet-600 hover:text-violet-700 transition-all duration-150 cursor-pointer"
        >
          Contact us
        </span>
      </p>
    </motion.div>
  );
};

export default Faq;