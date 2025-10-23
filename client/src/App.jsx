import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from "./pages/Home/home"
import LevelsCard from "./pages/Levels"
import PricingPlan from "./components/Pricing_Plan/PricingPlan"
import Dashboard from "./pages/Dashboard/Dashboard"
import Footer from "./common/Footer/Footer"
import Navbar from "./common/Header/Navbar"
import { useEffect, useState } from "react"
import PreviewLoader from "./common/Loader/PreviewLoader"
import MazeEscapeGame from "./common/Offline/OfflineGame"
import Offline from "./common/Offline/Offline"


function App() {

  const [loading,setLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const[isOffline,setIsOffline] = useState(!navigator.onLine)

  // Change text on tab switch
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibility = () => {
      if(document.hidden){
        document.title = "😭 Miss you!"
      } else{
        document.title = originalTitle;
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    }
  },[])

  // Toggle between online/offline
  useEffect(() => {
    const handleOffline = () => {
      localStorage.setItem("lastPage", location.pathname)
      setIsOffline(true)
      toast.error("You're offline! Some features may not work.")
    }
  
    const handleOnLine = () => {
      setIsOffline(false)
      toast.success("You're back online!")
      
      const lastPage = localStorage.getItem("lastPage") || "/"
      navigate(lastPage)
    }
  
    window.addEventListener("offline", handleOffline)
    window.addEventListener("online", handleOnLine)
  
    return () => {
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("online", handleOnLine)
    }
  }, [location])

  // Preview Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [location.pathname])


  return (
    <div className="relative w-full min-h-screen flex flex-col gap-10 md:gap-24 bg-black text-white p-5 md:px-10 ">

      {loading && <PreviewLoader />}

      {isOffline ? (
        <>
          <Routes>
            <Route path="*" element={<Offline />} />
            <Route path="/can-you-escape" element={<MazeEscapeGame />} />
          </Routes>
        </>
      ) : (
        <div className={loading ? "invisible" : "visible"}>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/:level" element={<LevelsCard />} />
            <Route path="/pricing" element={<PricingPlan />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      )}
      
      <ToastContainer position="bottom-right" toastStyle={{backgroundColor: "#000"}} />
    </div>
  )
}

export default App
