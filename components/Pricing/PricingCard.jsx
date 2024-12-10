import Image from 'next/image';
import React from 'react';
import { PiPhoneCallLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const PricingCard = () => {
    return (
        <div className='container mt-[150px]'>
            <div className=' md:w-[1400px] rounded-2xl gap-[100px] container flex flex-col-reverse md:flex-row items-center  bg-[url("/bg-svg-1.svg")] pb-[20px] md:pb-0'>
                <div>
                    <h1 className='text-[16px] text-[#28A2F3] font-medium'>WE OFFER BEST SOLUTIONS</h1>
                    <h2 className='text-[36px] font-semibold text-white mt-[15px] leading-[40px]'>For more information about our prcing & plans</h2>
                    <h1 className='text-[16px] mt-[40px] text-white font-semibold'>Get In Touch</h1>
                    <div className='flex flex-col md:flex-row items-center mt-[20px] gap-[30px]'>
                        <div className='flex items-center gap-[20px]'>
                            <div className='text-white bg-[#28A2F3] text-[30px] p-[10px] rounded-full'>
                                <PiPhoneCallLight />
                            </div>

                            <h1 className='text-white text-[16px] font-light'>+8801782989118
                            </h1>

                        </div>
                        <div className='flex items-center gap-[20px]'>
                            <div className='text-white bg-[#28A2F3] text-[30px] p-[10px] rounded-full'>
                            <TfiEmail />

                            </div>

                            <h1 className='text-white text-[16px] font-light'>digislashagency@gmail.com

                            </h1>

                        </div>
                    </div>
                </div>
                <div className='py-[20px]'>
                    <Image src="/pric-svg-1.svg" alt="price" width={500} height={500} />
                </div>
            </div>
        </div>
    );
};

export default PricingCard;