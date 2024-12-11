import Image from 'next/image';
import React from 'react';

const Top = () => {
    return (
        <div className='container flex flex-col-reverse md:flex-row items-center justify-center gap-[50px]'>
            <div className='md:w-[561px]'>
                <h1 className='text-[18px] uppercase text-[#2EA2F4] font-medium'>Our Professional</h1>
                <h1 className='text-[38px] font-bold leading-[35px] my-[20px]'>We will help you You know you wan it</h1>
                <p className='text-[16px] font-light text-[#555]'>We're not just another agency; we're your strategic allies, your creative collaborators, your data-driven guides. We'll help you unlock exclusive insights, craft compelling narratives, and connect with your audience on a deeper level.</p>
            </div>

            <div>
                <Image src="/team.gif" alt="team" width={700} height={700} />
            </div>
        </div>
    );
};

export default Top;