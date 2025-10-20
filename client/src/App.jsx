import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/home"
import LevelsCard from "./pages/Levels"
import Footer from "./common/Footer/footer"
import PricingPlan from "./components/Pricing_Plan/PricingPlan"
import Dashboard from "./pages/Dashboard/Dashboard"


function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10 md:gap-24 bg-black text-white p-5 md:p-10 ">
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
