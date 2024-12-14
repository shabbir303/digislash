import Image from "next/image";


const About = () => {
    return (
        <div className="container flex flex-col md:flex-row justify-center items-center gap-[150px] mb-[100px]">
            <div>
                <h1 className="uppercase text-[#2EA2F4] text-[16px]">about us</h1>
                <p className="text-[40px] md:w-[560px] font-medium leading-[45px] my-[30px]">We are a dynamic team of creative people of inovation & marketing</p>
                <p className="text-[16px] font-light md:w-[560px] text-[#555] mb-[35px]">As Bangladesh's top data-driven digital marketing agency, we blend creativity with data to deliver exceptional results. We analyze every step of your customer's journey to craft personalized campaigns that drive conversions and boost your bottom line</p>
                <div className="md:w-[560px] flex items-center gap-6">
                    <div>
                        <h1 className="mb-[10px] text-[24px] font-medium">Boost Your Business</h1>
                        <p className="text-[16px] text-[#555] leading-[25px]">Boost your business with data-driven strategies that deliver measurable results.</p>
                    </div>
                    <div>
                        <h1 className="mb-[10px] text-[24px] font-medium">Filtering Business Data</h1>
                        <p className="text-[16px] text-[#555] leading-[25px]">From data collection to analysis and visualization, we provide end-to-end data filtering solutions.</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src="/About-Us.gif" alt="about" width={612} height={408}/>
            </div>
        </div>
    );
};

export default About;