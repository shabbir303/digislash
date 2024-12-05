import React from 'react';

const Scard = () => {
    const service = [
        {
        name:"Digital Media Buying",
        description: "Maximize your reach with targeted digital media buying across Google, Meta, YouTube, and more.",
        link:"#"
    },
        {
        name:"Web Analytics",
        description: "Track, analyze, and optimize your website’s performance with powerful web analytics for better results.",
        link:"#"
    },
        {
        name:"Content Creation",
        description: "Crafting engaging content that resonates with your audience and drives meaningful connections and results.",
        link:"#"
    },
        {
        name:"CRO",
        description: "Optimize your website to convert visitors into customers with proven Conversion Rate Optimization strategies.",
        link:"#"
    },
]
    return (
        <div className='container md:mt-[200px] md:mb-[50px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {service.map((card, index)=>{
                    return(<div className=' relative  border-[1px] rounded-xl text-center px-[20px] hover:bg-blue-100 group' key={index}>
                            <h1 className='text-[#2B323D] text-[28px] mt-[25px] font-medium'> {card.name} </h1>
                            <p className='mt-[20px] font-light leading-[20px] text-[#5B5755]'> {card.description} </p>
                            <button className='mt-[50px] mb-[20px]'> <a href={card.link}>Get Start→</a> </button>
                            <div className='absolute w-full transparent h-[13px] group-hover:bg-[#0396C2] bottom-0 left-0 rounded-b-xl'></div>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Scard;