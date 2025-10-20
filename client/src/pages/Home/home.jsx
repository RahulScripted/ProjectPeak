import ReviewSection from '../../components/Testimonial/reviewSection'
import Subscription from '../../components/Subscription/Subscription'
import ProjectsData from '../../components/Projects/ProjectsData'
import Faq from '../../components/Faqs/faqs'
import CertificateZone from '../../components/Certificate/certificateZone'
import LeaderboardDetails from '../../components/Leaderboard/leaderboardDetails'
import WorkingSteps from '../../components/Works/WorkingSteps'
import PricingPlan from '../../components/Pricing_Plan/PricingPlan'
import AboutUs from '../../components/Abouts/AboutUs'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='flex flex-col overflow-x-hidden w-full min-h-screen gap-28'>
      <AboutUs />
      <WorkingSteps />
      <ProjectsData />
      <LeaderboardDetails />
      <CertificateZone />
      <PricingPlan />
      <ReviewSection />
      <Faq />
      <Subscription />
    </div>
  )
}

export default Home