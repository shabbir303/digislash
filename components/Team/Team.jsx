
import { TbSettingsCode } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { PiHeadCircuitLight } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";

const Team = () => {
    const team=[
        {
            img:"/avatar-3-2.png",
            icon:<TbSettingsCode />,
            title:"Professionally trained",
            des:"We deliver exceptional results with expertise and care."
        },
        {
            img:"/avatar2-1.png",
            icon:<FaRegCalendarCheck />,
            title:"Team is available 7 days a week",
            des:"We deliver exceptional results with expertise and care."
        },
        {
            img:"/avatar3-1.png",
            icon:<PiHeadCircuitLight />,
            title:"Focused on achieving results",
            des:"Results-driven. Goal-oriented. We deliver marketing that makes a difference"
        },
        {
            img:"/avatar4-1.png",
            icon:<AiOutlineLike />,
            title:"Exceeds our client’s expectations",
            des:"Client satisfaction is at the heart of everything we do."
        },
    ]
    return (
        <div className="container mt-[80px] md:w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[50px]">
            {
              team.map((tea, index)=>{
                return(
                <div 
                key={index}>
                    <div 
                      style={{
                        backgroundImage:`url(${tea.img})`,
                        backgroundSize:"cover",
                        backgroundPosition: "center",
                      }}
                    className="bg-cover bg-center rounded-lg p-[30px] flex flex-col items-center text-center text-[50px] w-[100px] h-[100px] text-[#FE7146]">
                        <h1> {tea.icon} </h1>
                    </div>
                    <h1 className="text-[#6EC1E4] text-[24px] font-semibold leading-[30px] my-[25px]"> {tea.title} </h1>
                    <h1 className="text-[16px] text-[#7A7A7A] font-light leading-[30px]">{tea.des} </h1>
                </div>)
              })
            }
        </div>
    );
};

export default Team;