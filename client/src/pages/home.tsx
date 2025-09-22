"use client";

import FaqAccordion from "../components/faqs/faqs";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen gap-24 md:gap-16">
      <FaqAccordion />
    </div>
  )
}

export default Home