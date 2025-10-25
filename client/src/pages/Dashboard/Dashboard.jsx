import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import OverAllDetails from "./Components/OverAll/OverAllDetails";
import Calendar from "./Components/Calendar/Calendar";

const Dashboard = () => {
  const overallRef = useRef(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    // GSAP animation sequence
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from(overallRef.current, {
        y: 100,
        opacity: 0,
      })
      .from(calendarRef.current, {
        y: 100,
        opacity: 0,
      })

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full min-h-screen grid grid-cols-1 gap-10 overflow-hidden">

      {/* 2nd Phase */}
      <div className="w-full min-h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Over all details */}
        <div ref={overallRef} className="col-span-1 lg:col-span-2">
          <OverAllDetails />
        </div>

        {/* Calendar Details */}
        <div ref={calendarRef} className="md:col-span-1">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;