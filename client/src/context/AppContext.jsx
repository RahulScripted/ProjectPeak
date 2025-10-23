import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [live, setLive] = useState(false);
  const [passwordResetStep, setPasswordResetStep] = useState("email");
//   const [resetEmail, setResetEmail] = useState("");
//   const [resetToken, setResetToken] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
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
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;