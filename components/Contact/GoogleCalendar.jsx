const GoogleCalendar = () => {
    return (
      <div style={{ width: '100%', height: '600px' }}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3IHHb2kVQNz6tpRJvX5pMX6NOZMIe6KjIWnWu3407gCc-YZgs_Hdnwr38Ao9rXjnVMgDIgGdW3?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  };
  
  export default GoogleCalendar;
  