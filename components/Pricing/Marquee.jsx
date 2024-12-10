import Image from "next/image";
import Marquee from "react-fast-marquee";

const Marquees = () => {
    return (
        <div className="container my-[100px]">
            <Marquee className="">
                <Image src="/Hommies.jpg" alt="hommies" width={200} height={200} className="md:mr-[80px]"/>
                <Image src="/gloworiousSkin.jpg" alt="hommies" width={200} height={200} className="md:mr-[80px]"/>
                <Image src="/Medinova.jpg" alt="hommies" width={200} height={200} className="md:mr-[80px]"/>
                <Image src="/pc.jpg" alt="hommies" width={200} height={200} className="md:mr-[80px]"/>
                <Image src="/abid.jpg" alt="hommies" width={200} height={200} className="md:mr-[80px]"/>
            </Marquee>
        </div>
    );
};

export default Marquees;