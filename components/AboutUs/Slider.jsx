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
           <p className='text-[24px] text-[#555] font-light leading-[40px]'>“We partnered with Digislash Agency to run our digital ad campaigns, and the results were phenomenal! Within three months, our revenue increased by 45%, thanks to their expertly crafted Google and Facebook ads. Their team truly understands how to target the right audience and maximize ROI. Highly recommended!” </p>
           <div className='mt-[120px] flex items-center gap-4'>
             <Image src="/avatar-3.png" alt="donald" width={80} height={80}/>
             <div>
                <h1 className='text-[18px] font-bold'>Donald Salvor</h1>
                <h1 className='text-[16px] font-light'>CTO/CO-Founder</h1>
             </div>
           </div>
       </SwiperSlide>
        <SwiperSlide>
           <p className='text-[24px] text-[#555] font-light leading-[40px]'>“"Before working with Digislash Agency, our social media accounts were barely active. Their team revamped our content strategy, and within weeks, our follower count skyrocketed, and engagement increased by 70%. Our brand is now recognized in ways we never thought possible!” </p>
           <div className='mt-[120px] flex items-center gap-4'>
             <Image src="/avatar-2.png" alt="donald" width={80} height={80}/>
             <div>
                <h1 className='text-[18px] font-bold'>James Peter</h1>
                <h1 className='text-[16px] font-light'>Founder</h1>
             </div>
           </div>
       </SwiperSlide>
        <SwiperSlide>
           <p className='text-[24px] text-[#555] font-light leading-[40px]'>“SEO seemed like a mystery to us until we hired Digislash Agency. They optimized our website and built a solid strategy that helped us rank on the first page of Google for our most important keywords. We’ve seen a 60% increase in organic traffic and a steady stream of new customers every month!” </p>
           <div className='mt-[120px] flex items-center gap-4'>
             <Image src="/avatar-1.png" alt="donald" width={80} height={80}/>
             <div>
                <h1 className='text-[18px] font-bold'>Peek Thakul</h1>
                <h1 className='text-[16px] font-light'>Founder</h1>
             </div>
           </div>
       </SwiperSlide>
        <SwiperSlide>
           <p className='text-[24px] text-[#555] font-light leading-[40px]'>“We approached Digislash Agency for help with our product launch, and they went above and beyond. Their email marketing and launch campaign brought in over 1,000 pre-orders within the first week! Their creative ideas and professional execution made all the difference.” </p>
           <div className='mt-[120px] flex items-center gap-4'>
             <Image src="/avatar-3.png" alt="donald" width={80} height={80}/>
             <div>
                <h1 className='text-[18px] font-bold'>Christian Salvador</h1>
                <h1 className='text-[16px] font-light'>Founder</h1>
             </div>
           </div>
       </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;