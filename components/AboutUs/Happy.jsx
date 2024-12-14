import Image from "next/image";
import Slider from "./Slider";


const Happy = () => {
    return (
        <div className="mt-[80px] bg-[#f5f4f4] pt-[40px]">
            <div className="container flex flex-col md:flex-row items-center justify-center gap-[180px]">
                <div>
                    <Image src="/about.png" alt="about" width={650} height={400} />
                </div>
                <div className="hidden md:block ">
                
                   <Slider/>
                </div>
            </div>

        </div>
    );
};

export default Happy;