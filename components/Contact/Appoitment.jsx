"use client"

import { useState } from "react";
import { format, addDays, getDay, startOfWeek } from "date-fns";

const AppointmentPage = () => {
  // State to manage selected date and time
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // State to keep track of current day of week
  const [currentDay, setCurrentDay] = useState(format(new Date(), "cccc"));

  // Modified time slots starting at 9:30 AM in 30-minute intervals
  const timeSlots = [
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ];

  // Generate available dates (e.g., next 7 days)
  const availableDates = Array.from({ length: 7 }).map((_, index) =>
    addDays(new Date(), index)
  );

  // Form submission handler
  const handleBooking = (e) => {
    e.preventDefault();
    if (currentDay !== "Friday") {
      alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
    } else {
      alert("Sorry, Fridays are closed for bookings.");
    }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <h1 className="text-center text-3xl font-bold mb-8">Book an Appointment</h1>

      {/* Calendar Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Left: Calendar */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
          <div className="grid grid-cols-4 gap-4">
            {availableDates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(format(date, "yyyy-MM-dd"))}
                className={`p-4 border rounded-lg ${
                  selectedDate === format(date, "yyyy-MM-dd")
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600"
                } hover:bg-blue-100`}
              >
                {format(date, "EEE, MMM d")}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Time Slots */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Select a Time</h2>
          <div className="grid grid-cols-5 gap-4">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`p-4 border rounded-lg ${
                  selectedTime === time
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600"
                } hover:bg-blue-100`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-md mx-auto mt-12">
        <h2 className="text-xl font-semibold mb-4">Confirm Your Details</h2>
        <form onSubmit={handleBooking} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-xl pl-[10px] py-[5px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full pl-[10px] py-[5px] rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            disabled={currentDay === "Friday" || !selectedDate || !selectedTime}
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow ${
              currentDay === "Friday" ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;
