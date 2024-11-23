import AppointmentPage from '@/components/Contact/Appoitment';
import { Calendar } from '@/components/ui/calendar';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* <h1 className='text-3xl font-bold text-center mt-[100px]'>Book Online Meeting.</h1> */}
            <div className='w-[1200px] h-[800px] border-[2px]  mt-[150px] mb-[100px] mx-auto'>
            {/* <Calendar/> */}
            <AppointmentPage/>
        </div>
        </div>
    );
};

export default page;