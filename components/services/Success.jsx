import Image from "next/image";


const Success = () => {
    const story = [
        {
            name:"Pappu",
            title:"newcity bedding",
            img:"/TestimonialsPic1.png",
            des:"“My move was way less stressful than expected! Movely packed everything, stored it for a week, and moved it all to my new home just as promised!”"
        },
        {
            name:"Umma Habiba",
            title:"RDH Makeover salon",
            img:"/TestimonialsPic2.jpg",
            des:"“Movely provided a very professional service when we moved offices last month. They were easy to work with and moved everything on time.”"
        },
        {
            name:"Emanuel Sadler",
            title:"SavvyMarket",
            img:"/emuel.jpeg",
            des:"“Best experience ever! I desperately needed a mover to help with a last minute relocation, and Movely was so helpful in making it a seamless process!”"
        },
    ]
    return (
        <div className="container mt-[100px]">
            <div className="text-center leading-[50px] py-[100px]">
                <h1 className="text-[#88AAB8] text-[20px] font-medium">OUR SUCCESS STORIES</h1>
                <p className="text-[42px] font-semibold">We’ve Helped Brands Achieve Their Goals</p>
                <p className="md:w-[560px] text-[16px] font-light text-[#5B5755] mx-auto leading-7">Through expert digital marketing strategies, data-driven insights, and creative solutions, we’ve empowered businesses to grow, connect, and succeed. Let us help your brand achieve its full potential.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  story.map((story, index)=>{
                    return(<div key={index} className="border-[1px] p-[40px] rounded-xl">
                            <div className="flex items-center gap-[20px]">
                                <div>
                                <Image src={story.img} alt="client" width={70} height={70} className="rounded-xl" />
                                 <h1 className="mt-[10px] text-yellow-500">★★★★★</h1>
                                </div>
                                <div>
                                    <h1 className="text-[20px] text-[#2B323D] font-normal">{story.name} </h1>
                                    <h1 className="text-[15px] text-[#848484] font-light">{story.title} </h1>
                                </div>
                            </div>
                            <p className="text-[16px] text-[#5B5755] font-light mt-[20px] leading-[20px]">{story.des}</p>
                    </div>
                    )
                  })
                }
            </div>
        </div>
    );
};

export default Success;