import React from 'react';
import Image from 'next/image';
const Working = () => {
    return (
        <div className='mt-[30px]'>
            <h1 className='text-center text-[27px] font-semibold'>WORKING PROCESS
            </h1>
            <div className=' relative flex items-center mx-auto mt-8 w-[1148px] h-[385px]'>
            <Image src="/background-line.gif" alt="line_bg"  priority quality={100} fill className='object-contain'/>
            </div>
            <button className='flex items-center mx-auto my-5 bg-[#039BE5] px-[14px] py-[8px] rounded-2xl'>
            Book an appointment
            </button>
        </div>
    );
};

export default Working;