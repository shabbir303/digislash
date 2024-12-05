import Image from "next/image";

const Growth = () => {
    return (
        <div className="container  flex flex-col md:flex-row items-center justify-center md:gap-[200px] mt-[200px]">
            <div>
                <h1 className="text-[#88AAB8] text-[20px] font-medium">DATA-DRIVEN GROWTH</h1>
                <h1 className="text-[42px] font-semibold">From Strategy to Success</h1>
                <p className="md:w-[460px] text-[16px] font-light text-[#5B5755] leading-6 ">At our agency, we simplify the complex world of digital marketing to deliver tailored solutions that drive growth. From insightful planning to seamless execution, we’re here to make your business thrive.</p>
                <div className="border-[1px] my-[60px]"/>
                <div className="grid grid-cols-1 text-[#2B323D] gap-3">
                    <div className="flex items-center gap-5 ">
                        <Image src="/sign.svg" alt="growth" width={10} height={10}/><h1 className="text-[20px]">5+ Years of Industry Expertise</h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <Image src="/sign.svg" alt="growth" width={10} height={10}/><h1 className="text-[20px]">Customized Marketing Strategies</h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <Image src="/sign.svg" alt="growth" width={10} height={10}/><h1 className="text-[20px]">Data-Driven Insights & Analytics</h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <Image src="/sign.svg" alt="growth" width={10} height={10}/><h1 className="text-[20px]">24/7 Support for Your Business Growth</h1>
                    </div>
                </div>
            </div>
            <div>
                <Image src="/dataAnalyst.jpg" alt="growth" width={900} height={750}/>
            </div>
        </div>
    );
};

export default Growth;