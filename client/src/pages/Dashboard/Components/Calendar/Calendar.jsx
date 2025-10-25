import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Get current year and month
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  // Get number of days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Get the day of the week of the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  // Create array of day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Create array of month names
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  // Function to go to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };
  
  // Function to go to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };
  
  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 md:h-10 w-full"></div>);
    }
    
    // Add cells for each day of the month
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      
      days.push(
        <div
          key={`day-${day}`}
          className={`h-8 md:h-10 w-8 md:w-10 flex items-center justify-center rounded-full mx-auto
            ${isToday ? 'bg-violet-600 text-white' : 'hover:bg-gray-600'} 
            cursor-pointer text-sm md:text-base`}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className="bg-[#111] text-gray-100 p-3 md:p-6 rounded-md w-full">
      {/* Calendar header */}
      <div className="flex justify-between items-center mb-4">
        {/* Previous Button */}
        <button
          onClick={prevMonth}
          className="text-gray-400 hover:text-gray-100 cursor-pointer text-xl p-2"
          aria-label="Previous month"
        >
          &lt;
        </button>
        
        {/* Show Current Month & Year */}
        <h2 className="text-lg md:text-xl font-semibold">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        
        {/* Next Button */}
        <button
          onClick={nextMonth}
          className="text-gray-400 hover:text-gray-100 cursor-pointer text-xl p-2"
          aria-label="Next month"
        >
          &gt;
        </button>
      </div>
      
      {/* Day names header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-xs md:text-sm font-medium text-gray-400">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {generateCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;