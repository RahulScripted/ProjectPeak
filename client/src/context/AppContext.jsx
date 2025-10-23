import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [live, setLive] = useState(0);
  const [passwordResetStep, setPasswordResetStep] = useState("email");
//   const [resetEmail, setResetEmail] = useState("");
//   const [resetToken, setResetToken] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [completedLevels, setCompletedLevels] = useState({
    easy: false,
    medium: false,
    hard: false
  });
//   const navigate = useNavigate();

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    // backendUrl,
    token,
    setToken,
    live,
    setLive,
    purchase,
    setPurchase,
    // loadCreditsData,
    // logout,
    showForgotPassword,
    setShowForgotPassword,
    passwordResetStep,
    setPasswordResetStep,
    // handleForgotPassword,
    // handleVerifyOtp,
    // handleResetPassword,
    // resetPasswordFlow,
    showPopUp,
    setShowPopUp,
    completedLevels,
    setCompletedLevels,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;