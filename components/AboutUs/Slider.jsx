"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './Swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {
    return (
        <div>
            <Swiper pagination={{
                    clickable: true,
                }}  modules={[Pagination]} className="mySwiper md:w-[700px] md:h-[500px]">
        <SwiperSlide>
           <p className='text-[24px] text-[#555] font-light leading-[40px]'>“I will be pet I will be pet then I will hiss sit in box get scared by doggo also cucumerro yet the best things in the call universe is a cardboard box.” </p>
           <div className='mt-[120px] flex items-center gap-4'>
             <Image src="/avatar-3.png" alt="donald" width={80} height={80}/>
             <div>
                <h1 className='text-[18px] font-bold'>Donald Salvor</h1>
                <h1 className='text-[16px] font-light'>CTO/CO-Founder</h1>
             </div>
           </div>
       </SwiperSlide>
        <SwiperSlide>
           <p className='text-[24px] text-[#555] font-light leading-[40px]'>“I will be pet I will be pet then I will hiss sit in box get scared by doggo also cucumerro yet the best things in the call universe is a cardboard box.” </p>
           <div className='mt-[120px] flex items-center gap-4'>
             <Image src="/avatar-2.png" alt="donald" width={80} height={80}/>
             <div>
                <h1 className='text-[18px] font-bold'>Donald Salvor</h1>
                <h1 className='text-[16px] font-light'>CTO/CO-Founder</h1>
             </div>
           </div>
       </SwiperSlide>
        <SwiperSlide>
           <p className='text-[24px] text-[#555] font-light leading-[40px]'>“I will be pet I will be pet then I will hiss sit in box get scared by doggo also cucumerro yet the best things in the call universe is a cardboard box.” </p>
           <div className='mt-[120px] flex items-center gap-4'>
             <Image src="/avatar-1.png" alt="donald" width={80} height={80}/>
             <div>
                <h1 className='text-[18px] font-bold'>Donald Salvor</h1>
                <h1 className='text-[16px] font-light'>CTO/CO-Founder</h1>
             </div>
           </div>
       </SwiperSlide>
        <SwiperSlide>
           <p className='text-[24px] text-[#555] font-light leading-[40px]'>“I will be pet I will be pet then I will hiss sit in box get scared by doggo also cucumerro yet the best things in the call universe is a cardboard box.” </p>
           <div className='mt-[120px] flex items-center gap-4'>
             <Image src="/avatar-3.png" alt="donald" width={80} height={80}/>
             <div>
                <h1 className='text-[18px] font-bold'>Donald Salvor</h1>
                <h1 className='text-[16px] font-light'>CTO/CO-Founder</h1>
             </div>
           </div>
       </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;