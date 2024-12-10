import Image from "next/image";
import Slider from "./Slider";


const Happy = () => {
    return (
        <div className="mt-[80px]">
            <div className="container flex items-center justify-center gap-[180px]">
                <div>
                    <Image src="/about.png" alt="about" width={650} height={400} />
                </div>
                <div>
                <h1 className='text-[16px] text-[#2EA2F4] font-medium uppercase'>Testiomonials</h1>
                <h1 className='text-[40px] text-[#00092C] font-bold mt-[15px] mb-[20px]'>Our Happy Customers</h1>
                   <Slider/>
                </div>
            </div>

        </div>
    );
};

export default Happy;