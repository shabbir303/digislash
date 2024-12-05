import Link from 'next/link';
import React from 'react';

const Free = () => {
    return (
        <div className='container bg-[#F2FCFE]'>
            <div className='text-center'>
                <h1 className='text-[52px] md:w-[840px] mx-auto leading-[50px] pt-[90px]'>Ready to Elevate Your Business? Get a Free Consultation Now!</h1>

                <h1 className='text-[16px] text-[#5B5755] w-[504px] leading-[30px] font-light mx-auto mt-[30px]'>Take your business to the next level with our expert services in Digital Advertising, Web Analytics, Content Creation, and Conversion Rate Optimization (CRO).</h1>
            </div>
            <Link href="/meeting" className='flex justify-center items-center pt-[80px] pb-[90px]'><button className='text-[18px] text-white bg-[#2EA2F4] hover:bg-white hover:text-[#2EA2F4] shadow-xl border-[1px] border-[#2EA2F4] text-center  rounded-xl '><h1 className='px-[35px] py-[10px]'>Get A Free Consultation</h1> </button></Link> 
        </div>
    );
};

export default Free;