import Image from 'next/image';
import React from 'react';
import { SiYoutubekids } from 'react-icons/si';

const GifMobile = () => {
    return (
        <div>
            <div className=" mt-[100px] mb-10 flex-col  items-center justify-between ">
                <div className="">
                    <div className="flex items-center gap-3">
                        <div className="w-[50px] h-1  bg-[#ff6900]"></div>
                        <h1 className="text-[30px] uppercase">We Are</h1>
                    </div>
                    <p className="text-[40px] font-bold uppercase">
                        Performance marketing agency{" "}
                    </p>
                    <p>
                        We specilized end to end data driven digital marketing. We leverage
                        data and analytics at every stage-from strategy development to
                        execution and optimization-to create targated, personolized
                        campaigns.
                    </p>
                    <div className="mt-[50px] flex items-center gap-[50px]  ">
                        <button className="bg-blue-400 w-[150px] h-[50px] rounded-3xl ">
                            Book now
                        </button>
                        <a
                            href="https://www.youtube.com/watch?v=wOrn4151WSQ"
                            target="_blank"
                            className="w-[50px] h-[50px] flex justify-center items-center border-[0.25px] border-slate-500 rounded-full"
                        >
                            <SiYoutubekids className="text-[30px] text-blue-400 rounded-full" />
                        </a>
                    </div>
                </div>
                <div>
                <Image
                    src="/digiGif.gif"
                    alt="Gif_image"
                    width={700}
                    height={600}
                    className=" "
                />
                </div>
                
            </div>
            
        </div>
    );
};

export default GifMobile;