import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/home"
import LevelsCard from "./pages/Levels"
import Footer from "./common/Footer/footer"


function App() {

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10 md:gap-24 bg-black text-white p-5 md:p-10 ">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:level" element={<LevelsCard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
