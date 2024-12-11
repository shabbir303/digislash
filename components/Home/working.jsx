import React from 'react';


const Working = () => {
    const steps = [
        { title: "Consultation & Strategy", icon: "/image.svg" },
        { title: "Data-Driven Planning", icon: "/image (1).svg" },
        { title: "Plan Execution", icon: "/image (2).svg" },
        { title: "Continuous Monitoring & Optimization", icon: "image (3).svg" },
        { title: "Reporting & Insights", icon: "/image (4).svg" },
        { title: "Cross digital media channel attribution", icon: "/image (5).svg" },
        { title: "KPI development & measurement planning", icon: "/image (6).svg" },
        { title: "Account-Based Marketing", icon: "/image (7).svg" },
    ];
    return (
        <div className='mt-[30px]'>
            <h1 className='text-center text-[27px] font-semibold'>WORKING PROCESS
            </h1>
            <div className=' md:bg-[url("/background-line.gif")] md:bg-cover  flex items-center mx-auto mt-8 md:w-[1178px] md:h-[395px]'>
                    <div className='container'>
                    <div className="flex flex-col md:flex-row items-center gap-[30px] ">
                        {steps.map((step, index) => (
                            <div className="w-[220px]  hover:shadow-inner hover:shadow-[#039BE5] rounded-xl  h-[192px] p-[10px] shadow-xl bg-white border-[1px] border-[#55555]" key={index}>
                                <div className="flex justify-center items-center"><img src={step.icon} alt="box" width={70} height={70} /> </div>
                                <div className="text-[13px] text-[#0C0C0C] leading-[15px] mt-3" >{step.title}</div>
                            </div>
                        ))}
                    </div>
                    {/* <button className="appointment-button">Book an appointment</button> */}
                    </div>
            </div>
            <button className='flex items-center text-white mx-auto my-5 bg-[#039BE5] px-[14px] py-[8px] rounded-2xl'>
                Book an appointment
            </button>
        </div>
    );
};

export default Working;