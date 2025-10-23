import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/home"
import LevelsCard from "./pages/Levels"
import PricingPlan from "./components/Pricing_Plan/PricingPlan"
import Dashboard from "./pages/Dashboard/Dashboard"
import Footer from "./common/Footer/Footer"
import Navbar from "./common/Header/Navbar"


function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10 md:gap-24 bg-black text-white px-5 py-3 md:py-5 md:px-10 ">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:level" element={<LevelsCard />} />
        <Route path="/pricing" element={<PricingPlan />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
