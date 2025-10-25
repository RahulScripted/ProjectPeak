import { useState, useEffect } from "react";

const Introduction = () => {
  const [greeting, setGreeting] = useState("");
  const name = "Rahul Goswami";

  // Find out Time Zone
  useEffect(() => {
    const getCurrentGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        return "Good Morning";
      } else if (hour >= 12 && hour < 17) {
        return "Good Afternoon";
      } else if (hour >= 17 && hour < 22) {
        return "Good Evening";
      } else {
        return "Late Night";
      }
    };

    setGreeting(getCurrentGreeting());

    // Update greeting every minute
    const intervalId = setInterval(() => {
      setGreeting(getCurrentGreeting());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center text-center">
      {/* Name */}
      <h1 className="pl-2 md:pl-0 text-lg font-bold text-white mb-2">
        {greeting}, {name}❤️
      </h1>
    </div>
  );
};
export default Introduction;