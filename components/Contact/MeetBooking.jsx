// "use client";

// import { useState } from "react";
// import { format, addDays } from "date-fns";

// const MeetBooking = () => {
//   // State to manage selected date, time, and confirmation details
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [confirmation, setConfirmation] = useState(null);

//   // Sample time slots for booking
//   const timeSlots = [
//     "9:30 AM",
//     "10:00 AM",
//     "10:30 AM",
//     "11:00 AM",
//     "11:30 AM",
//     "12:00 PM",
//     "12:30 PM",
//     "1:00 PM",
//     "1:30 PM",
//     "2:00 PM",
//     "2:30 PM",
//     "3:00 PM",
//     "3:30 PM",
//     "4:00 PM",
//     "4:30 PM",
//     "5:00 PM",
//     "5:30 PM",
//     "6:00 PM",
//   ];

//   // Generate available dates (e.g., next 7 days)
//   const availableDates = Array.from({ length: 7 }).map((_, index) =>
//     addDays(new Date(), index)
//   );

//   // Form submission handler
//   const handleBooking = (e) => {
//     e.preventDefault();

//     const meetingLink = "https://meet.google.com/rhc-hprh-tpu";

//     // Set confirmation details
//     setConfirmation({
//       date: selectedDate,
//       time: selectedTime,
//       link: meetingLink,
//     });

//     // Prepare email payload
//     const emailDetails = {
//       to: "shabbirtanbir@gmail.com",
//       subject: "New Appointment Booking",
//       body: `A new appointment has been booked:
//         - Date: ${selectedDate}
//         - Time: ${selectedTime}
//         - Meeting Link: ${meetingLink}`,
//     };

//     // Simulate sending email (add actual email sending logic here)
//     sendEmail(emailDetails);
//   };

//   // Simulate sending email
//   const sendEmail = ({ to, subject, body }) => {
//     console.log("Email sent to:", to);
//     console.log("Subject:", subject);
//     console.log("Body:", body);
//     alert("Appointment details have been sent to your email.");
//   };

//   return (
//     <div className="min-h-screen py-12 px-6">
//       <h1 className="text-center text-3xl font-bold mb-8">Book an Appointment</h1>

//       {/* Calendar Section */}
//       <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
//         {/* Left: Calendar */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
//           <div className="grid grid-cols-4 gap-4">
//             {availableDates.map((date, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedDate(format(date, "yyyy-MM-dd"))}
//                 className={`p-4 border rounded-lg ${
//                   selectedDate === format(date, "yyyy-MM-dd")
//                     ? "bg-blue-600 text-white"
//                     : "bg-white text-gray-600"
//                 } hover:bg-blue-100`}
//               >
//                 {format(date, "EEE, MMM d")}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right: Time Slots */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Select a Time</h2>
//           <div className="grid grid-cols-3 gap-4">
//             {timeSlots.map((time, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedTime(time)}
//                 className={`p-4 border rounded-lg ${
//                   selectedTime === time
//                     ? "bg-blue-600 text-white"
//                     : "bg-white text-gray-600"
//                 } hover:bg-blue-100`}
//               >
//                 {time}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Booking Form */}
//       <div className="max-w-md mx-auto mt-12">
//         <h2 className="text-xl font-semibold mb-4">Confirm Your Details</h2>
//         <form onSubmit={handleBooking} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               required
//               className="mt-1 block w-full rounded-xl pl-[10px] py-[5px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="mt-1 block w-full pl-[10px] py-[5px] rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={!selectedDate || !selectedTime}
//             className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow ${
//               !selectedDate || !selectedTime ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//             }`}
//           >
//             Confirm Booking
//           </button>
//         </form>
//       </div>

//       {/* Confirmation Message */}
//       {confirmation && (
//         <div className="mt-12 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold mb-4">Booking Confirmed!</h3>
//           <p>
//             <strong>Date:</strong> {confirmation.date}
//           </p>
//           <p>
//             <strong>Time:</strong> {confirmation.time}
//           </p>
//           <p>
//             <strong>Meeting Link:</strong>{" "}
//             <a
//               href={confirmation.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               {confirmation.link}
//             </a>
//           </p>
//           <p className="mt-2 text-gray-600">Click the link above to join the meeting. Copy the link if needed.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MeetBooking;
"use client";

import { useState } from "react";
import { format, addDays, setHours, setMinutes, addMinutes } from "date-fns";

const MeetBooking = () => {
  // State to manage selected date, time, and confirmation details
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  // Generate time slots with 30-minute intervals (9:30 AM to 6:00 PM)
  const generateTimeSlots = () => {
    const start = setHours(setMinutes(new Date(), 30), 9); // 9:30 AM
    const end = setHours(setMinutes(new Date(), 0), 18); // 6:00 PM
    const slots = [];
    let current = start;

    while (current <= end) {
      slots.push(format(current, "hh:mm a"));
      current = addMinutes(current, 30);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Generate available dates excluding Fridays
  const availableDates = Array.from({ length: 14 }) // 2 weeks for more options
    .map((_, index) => addDays(new Date(), index))
    .filter((date) => format(date, "EEEE") !== "Friday");

  // Form submission handler
  const handleBooking = (e) => {
    e.preventDefault();

    const meetingLink = "https://meet.google.com/rhc-hprh-tpu";

    // Set confirmation details
    setConfirmation({
      date: selectedDate,
      time: selectedTime,
      link: meetingLink,
    });

    // Prepare email payload
    const emailDetails = {
      to: "shabbirtanbir@gmail.com",
      subject: "New Appointment Booking",
      body: `A new appointment has been booked:
        - Date: ${selectedDate}
        - Time: ${selectedTime}
        - Meeting Link: ${meetingLink}`,
    };

    // Simulate sending email (add actual email sending logic here)
    sendEmail(emailDetails);
  };

  // Simulate sending email
  const sendEmail = ({ to, subject, body }) => {
    console.log("Email sent to:", to);
    console.log("Subject:", subject);
    console.log("Body:", body);
    alert("Appointment details have been sent to your email.");
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
          <div className="grid grid-cols-3 gap-4">
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
            disabled={!selectedDate || !selectedTime}
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow ${
              !selectedDate || !selectedTime ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            Confirm Booking
          </button>
        </form>
      </div>

      {/* Confirmation Message */}
      {confirmation && (
        <div className="mt-12 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Booking Confirmed!</h3>
          <p>
            <strong>Date:</strong> {confirmation.date}
          </p>
          <p>
            <strong>Time:</strong> {confirmation.time}
          </p>
          <p>
            <strong>Meeting Link:</strong>{" "}
            <a
              href={confirmation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {confirmation.link}
            </a>
          </p>
          <p className="mt-2 text-gray-600">Click the link above to join the meeting. Copy the link if needed.</p>
        </div>
      )}
    </div>
  );
};

export default MeetBooking;
