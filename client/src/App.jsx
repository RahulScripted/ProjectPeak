import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/home"
import LevelsCard from "./pages/Levels"


function App() {

  return (
    <div className=" w-full min-h-screen bg-black text-white p-5 md:p-10 ">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:level" element={<LevelsCard />} />
      </Routes>
    </div>
  )
}

export default App
