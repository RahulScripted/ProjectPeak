import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Heart, User } from "lucide-react";
import { AppContext } from "../../context/AppContext";
import Introduction from "../../components/Introduction/Introduction";

const Navbar = () => {
  const { user, setShowLogin, logout, live } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation(); // to get current path
  const [menuVisible, setMenuVisible] = useState(false);

  const showTool = () => {
    setMenuVisible((prev) => !prev);
  };

  const isDashboard = location.pathname === "/dashboard" && window.innerWidth >= 768;

  return (
    <div className="w-full flex items-center justify-between mb-10">
      <Link to="/" className="flex items-center justify-center">
        ProjectPeak
      </Link>

      {user ? (
        <div className="flex items-center justify-center gap-4 md:gap-5">
          <button
            onClick={() => navigate("/pricing")}
            className="flex gap-2 items-center bg-[#111] px-4 py-1.5 md:py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <span className="text-sm md:text-base lg:text-xl flex items-center gap-2">
              {live}
              <Heart className="w-5 h-5 text-red-500" />
            </span>
          </button>

          <div
            onClick={showTool}
            onMouseEnter={() => setMenuVisible(true)}
            onMouseLeave={() => setMenuVisible(false)}
            className="relative cursor-pointer text-center flex items-center justify-center"
          >
            {/* Conditional rendering */}
            {isDashboard ? (
              <div className="hidden md:block px-4 py-1.5 md:py-2">
                <Introduction />
              </div>
            ) : (
              <User className="w-8 h-8 text-white border p-1.5 rounded-full" />
            )}

            {isDashboard === false &&(
              <div
                className={`absolute top-0 right-0 z-10 text-black rounded pt-12 ${
                  menuVisible ? "" : "hidden"
                }`}
              >
                <ul className="list-none">
                  <li
                    onClick={() => navigate("/dashboard")}
                    className="text-sm px-7 py-2 bg-white rounded pr-10 hover:opacity-70 transition-all duration-300 mb-1"
                  >
                    Dashboard
                  </li>
                  <li
                    onClick={logout}
                    className="text-sm px-7 py-2 bg-white rounded pr-10 hover:opacity-70 transition-all duration-300"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4 md:gap-10">
          <p
            onClick={() => navigate("/pricing")}
            className="text-sm md:text-[1rem] cursor-pointer"
          >
            Pricing
          </p>

          <button
            className="text-sm bg-violet-600 px-7 md:px-12 py-2 rounded-full shadow-gray-400 shadow-md cursor-pointer hover:bg-violet-800 transition-all duration-400"
            onClick={() => setShowLogin(true)}
          >
            Join Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
