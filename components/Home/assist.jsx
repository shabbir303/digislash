import React from 'react';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';
const Assist = () => {

    const assist = [
        {
            img: "/creative-writing.png",
            name: "Content Creation",
            des:"Engage your audience with high-quality, tailored content across blogs, social media, and videos—boosting SEO, brand presence & growth, drive traffic, and customer loyalty.",
            links:""
        },
        {
            img: "/montage.png",
            name: "Video Editing",
            des:"Unleash the power of stunning visuals! Our video editing service creates captivating, engaging content that drives conversions and maximizes your marketing ROI.",
            links:""
        },
        {
            img: "/ads.png",
            name: "Paid Marketing",
            des:"Maximize your reach and drive targeted results with our paid marketing services. We optimize campaigns to deliver maximum ROI and grow your business faster.",
            links:""
        },
        {
            img: "/analysis.png",
            name: "Web Analytics",
            des:"Gain valuable insights with our web analytics service. We track and analyze user behavior to optimize performance, improve conversions, and drive business growth.",
            links:""
        },
        
    ]
    return (
        <div className='container my-[50px]'>
            <h1 className='text-center mx-auto my-[20px] text-[25px] font-semibold'>How can we assist you by our services?
            </h1>

            <div className=" md:w-[1148px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] justify-center items-center">
        {assist.map((card, index) => (
          <Card key={index} className=" md:h-[500px] mx-auto rounded-xl shadow-lg hover:shadow-inner hover:shadow-cyan-400">
            <CardHeader>
              <Image
                src={card.img}
                alt={card.name}
                width={50}
                height={50}
                className="w-[100px] h-[100px] mx-auto"
              />
              <CardTitle className="text-center py-6">{card.name}</CardTitle>
              <CardDescription className="text-center mt-4 text-[#555] text-[16px]">
                {card.des}
              </CardDescription>
            </CardHeader>
            {/* <CardContent>
              <p className="text-center mt-4">Explore more about {card.name}</p>
            </CardContent> */}
            <CardFooter className="text-center">
              <a
                href={card.links}
                className="text-blue-500 underline hover:text-blue-700"
              >
                <button>

                </button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Link href="/meeting" className='flex justify-center items-center pt-[80px] pb-[90px]'><button className='text-[18px] text-white bg-[#2EA2F4] hover:bg-white hover:text-[#2EA2F4] shadow-xl border-[1px] border-[#2EA2F4] text-center  rounded-xl '><h1 className='px-[35px] py-[10px]'>Get A Free Consultation</h1> </button></Link> 
        </div>
    );
};

export default Assist;