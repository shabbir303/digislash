import Image from 'next/image';
import React from 'react';

const Text = () => {
    return (
        <div className='container flex items-center justify-center mb-[30px] md:mb-0'>
            {/* <h1 className='text-[#88AAB8] text-[20px] font-medium'>END-TO-END</h1>
            <h1 className='text-[42px] md:w-[700px] mx-auto leading-[50px] mt-[20px] font-semibold'>Empowering Brands with Result-Driven Marketing Services</h1>
            <p className='text-[16px] md:w-[500px] font-light mx-auto leading-[30px] mt-[20px] text-[#5B5755]'>Drive success with our services: Digital Media Buying, Web Analytics, Content Creation, and CRO to optimize performance.</p> */}
            <Image src="/serviceHead.png" alt="service" width={800} height={800}/>
        </div>
    );
};

export default Text;