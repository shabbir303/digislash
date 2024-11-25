// import AppointmentPage from '@/components/Contact/Appoitment';
import GoogleCalendar from '@/components/Contact/GoogleCalendar';
// import { Calendar } from '@/components/ui/calendar';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* <h1 className='text-3xl font-bold text-center mt-[100px]'>Book Online Meeting.</h1> */}
            <div className='w-[1400px]    mt-[150px] mb-[100px] mx-auto'>
            {/* <Calendar/> */}
            {/* <AppointmentPage/> */}
            <GoogleCalendar/>
        </div>
        </div>
    );
};

export default page;