// import AppointmentPage from '@/components/Contact/Appoitment';
// import GoogleCalendar from '@/components/Contact/GoogleCalendar';
// import { Calendar } from '@/components/ui/calendar';
import MeetBooking from '@/components/Contact/MeetBooking';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* <h1 className='text-3xl font-bold text-center mt-[100px]'>Book Online Meeting.</h1> */}
            <div className='    mt-[150px] mb-[100px] mx-auto'>
            {/* <Calendar/> */}
            {/* <AppointmentPage/> */}
            {/* <GoogleCalendar/> */}
            <MeetBooking/>
        </div>
        </div>
    );
};

export default page;