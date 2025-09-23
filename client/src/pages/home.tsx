"use client";

import FaqAccordion from "../components/faqs/faqs";
import Projects from "../components/projects/Projects";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen gap-24">
      <Projects />
      <FaqAccordion />
    </div>
  )
}

export default Home