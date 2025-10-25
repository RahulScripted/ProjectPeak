import { BarChart, EyeIcon, ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";

const OverAllDetails = () => {
  const [customer, setCustomer] = useState(0);
  const [views, setViews] = useState(0);
  const [orders, setOrders] = useState(0);
  const [growth, setGrowth] = useState(0);


  const overAllData = [
    {
      description: "Customers",
      value: customer,
      icon: User,
    },
    {
      description: "Website Views",
      value: views,
      icon: EyeIcon,
    },
    {
      description: "Orders",
      value: orders,
      icon: ShoppingCart,
    },
    {
      description: "Growth",
      value: growth,
      icon: BarChart,
    },
  ];

  return (
    <div className="w-full h-full bg-[#111] p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
      {overAllData.map((data, idx) => (
        <div
          key={idx}
          className={`${idx === 0 || idx === 3 ? 'bg-violet-600' : 'bg-black'} w-full flex flex-col justify-between rounded-md p-3 gap-5 cursor-pointer hover:opacity-90 hover:scale-95 transition-all duration-300`}
        >
          <p className="text-sm text-gray-200">{data.description}</p>

          <div className="relative flex items-center justify-between w-full">
            {data.description === "Growth" ? 
              <h2 className="text-2xl lg:text-5xl font-bold">{data.value}%</h2> 
              : 
              <h2 className="text-2xl lg:text-5xl font-bold">{data.value}</h2>
            }

            <div className="absolute bottom-1 right-1">
              <data.icon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverAllDetails;