
import GoogleCalendarPreloaded from '@/components/Contact/GoogleCalendar';
// import MeetBooking from '@/components/Contact/MeetBooking';
import React from 'react';


const page = () => {
    return (
        <div>
            <div className='mt-[150px] mb-[100px] mx-auto'>
            {/* <MeetBooking/> */}
            {/* <GoogleCalendar/> */}
            <GoogleCalendarPreloaded/>
        </div>
        </div>
    );
};

export default page;