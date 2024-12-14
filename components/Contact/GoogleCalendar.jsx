// const GoogleCalendar = () => {
//     return (
//       <div style={{ width: '100%', height: '600px' }}>
//         <iframe
//           src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3IHHb2kVQNz6tpRJvX5pMX6NOZMIe6KjIWnWu3407gCc-YZgs_Hdnwr38Ao9rXjnVMgDIgGdW3?gv=true" 
//           style={{ border: 0 }}
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           allowFullScreen
//         />
//       </div>
//     );
//   };
  
//   export default GoogleCalendar;
"use client"

import { useState, useEffect } from "react";

const GoogleCalendarPreloaded = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion when the iframe is loaded
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        {/* Loader */}
        {isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              zIndex: 10,
            }}
          >
            {/* Loader animation */}
            <div
              style={{
                width: "50px",
                height: "50px",
                border: "5px solid #ccc",
                borderTop: "5px solid #4285F4", // Google Blue
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            ></div>
          </div>
        )}

        {/* Calendar iframe */}
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3IHHb2kVQNz6tpRJvX5pMX6NOZMIe6KjIWnWu3407gCc-YZgs_Hdnwr38Ao9rXjnVMgDIgGdW3?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          onLoad={handleIframeLoad} // Triggers loader hide
        />
      </div>

      {/* CSS for loader animation */}
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default GoogleCalendarPreloaded;
