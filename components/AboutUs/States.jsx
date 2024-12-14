"use client"

import CountUp from "react-countup";
import { AiOutlineGlobal } from "react-icons/ai";
import { PiHandshake } from "react-icons/pi";
import { FcCustomerSupport } from "react-icons/fc";
// import { LuChartNoAxesCombined } from "react-icons/lu";
import { GiChart } from "react-icons/gi";



const Stats = () => {
    const stats = [
        {
            number: 12,
            title: "Countries we served",
            img: <AiOutlineGlobal />

        },
        {
            number: 75,
            title: "Happy Clients",
            img: <PiHandshake />

        },
        {
            number: 15,
            title: "Experts",
            img: <FcCustomerSupport />

        },
        {
            number: 200,
            title: "Project Completed",
            img: <GiChart />


        },
    ]
    return (
        <section className="container md:w-[1440px]   my-[100px]">
            {/* <div className="container mx-auto">
                <div className="flex flex-wrap justify-center items-center gap-6   ">
                    {stats.map((item, index)=>
                     <div key={index} className="border-[1px] rounded-2xl md:w-[350px] md:h-[288px] gap-4 items-center justify-center mx-auto">
                        <CountUp
                        end={item.number}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-bold flex justify-center items-center mx-auto "
                        />
                        <p className="flex justify-center items-center mx-auto">{item.title}</p>
                     </div>
                    )}
                </div>
            </div> */}
            <div className="  grid grid-cols-2 md:grid-cols-4  gap-6 md:gap-[100px]">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="border-[1px] rounded-2xl md:w-[350px] md:h-[288px] flex flex-col items-center justify-center shadow-xl hover:bg-[#2EA2F4] hover:text-white"
                    >
                        <h1 className="text-[46px] text-[#2EA2F4] hover:text-white">{item.img} </h1>
                        <CountUp
                            end={item.number}
                            duration={5}
                            delay={2}
                            suffix="+"
                            className="text-[36px]  font-bold"
                        />
                        <p className="text-center font-light">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;