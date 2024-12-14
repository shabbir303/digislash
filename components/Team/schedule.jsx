"use client"

import { IoLocationOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";



const Schedule = () => {
    const stats = [
        {
            title: "Physical Address",
            des:"Dhaka Mohammadpur 1207",
            img: <IoLocationOutline />


        },
        {
            title: "Work Hours",
            des: `Monday to Friday: 7am - 7pm
Weekend: Friday.`,
            img: <LuClock />


        },
        {
            
            title: "Email Address",
            des:"digislashagency@gmail.com",
            img: <MdOutlineEmail />


        },
        {
            title: "Phone Number",
            des:"01782-989118",
            img: <PiPhoneCallLight />


            
        },
    ]
    return (
        <section className="container pt-8 pb-12  mt-[100px] bg-slate-200">
            <div className="  flex flex-col md:flex-row justify-center items-center gap-6">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="border-[1px] rounded-2xl md:w-[350px] md:h-[288px] flex flex-col items-center justify-center shadow-xl p-[20px] md:p-0 hover:bg-[#2EA2F4] hover:border-none hover:text-white bg-white"
                    >
                        <h1 className="text-[46px] text-[#2EA2F4] hover:text-white">{item.img} </h1>
                        <p className="text-center font-semibold text-[24px] leading-[30px] md:leading-0 mt-[20px]">{item.title}</p>
                        <p className="text-center font-light text-[16px] text-[#555] leading-[20px] md:leading-0 mt-[20px]">{item.des} </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Schedule;