import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react";

const Navbar = () => {
  const [user, setUser] = useState(false)
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  const showTool = () => {
    console.log("Clicked");
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <Link to="/">
        <h1>ProjectPeak</h1>
      </Link>

      {user ? (
        <div className="flex items-center gap-4 md:gap-5">
          <p className="hidden md:block">Hi, {user.name}</p>
          <div 
            onClick={showTool} 
            onMouseEnter={() => setMenuVisible(true)}
            onMouseLeave={() => setMenuVisible(false)}
            className="relative cursor-pointer"
          >
            <User className="w-8 h-8 text-white border p-1.5 rounded-full" />

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
                  // onClick={logout}
                  className="text-sm px-7 py-2 bg-white rounded pr-10 hover:opacity-70 transition-all duration-300"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4 md:gap-10">
          {/* Pricing */}
          <p
            onClick={() => navigate("/pricing")}
            className="text-sm md:text-[1rem] cursor-pointer"
          >
            Pricing
          </p>

          {/* Joining */}
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