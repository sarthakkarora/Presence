"use client";
import { useState } from 'react';
import Calendar from 'react-calendar'; // You can use a library like this for the calendar

export default function HistoryPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Fetch check-in/out times for the selected date
  };

  return (
    <div>
      <h2>Attendance History</h2>
      <Calendar onChange={handleDateChange} />
      {selectedDate && (
        <div>
          <h3>Check-ins/Check-outs for {selectedDate.toDateString()}</h3>
          {/* Display times for the selected date */}
        </div>
      )}
    </div>
  );
}
