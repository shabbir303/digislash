import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
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
        <div className='my-[50px]'>
            <h1 className='text-center mx-auto my-[20px] text-[25px] font-semibold'>How can we assist you by our services?
            </h1>

            <div className="w-[1148px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 justify-center items-center">
        {assist.map((card, index) => (
          <Card key={index} className="w-[265px] h-[433px] mx-auto rounded-xl shadow-lg">
            <CardHeader>
              <Image
                src={card.img}
                alt={card.name}
                width={50}
                height={50}
                className="w-[100px] h-[100px] mx-auto"
              />
              <CardTitle className="text-center py-6">{card.name}</CardTitle>
              <CardDescription className="text-center mt-4">
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
        </div>
    );
};

export default Assist;