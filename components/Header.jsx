
"use clinet"
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { TbPhoneCall } from "react-icons/tb";
import { PiPhoneCallThin } from "react-icons/pi";

const Header = () => {
    return (
        <>
            <div>
                <header className="py-8 xl:py-12 px-7  ">
                    <div className="mx-auto flex justify-center  items-center">
                        <div>
                            <Link href="/">
                                <div>
                                    <Image
                                        src="/favicon.ico"
                                        alt="logo"
                                        height={150}
                                        width={150}
                                        priority={true} />
                                </div>
                            </Link>
                        </div>
                        {/* desktop nav */}
                        <div className="hidden xl:flex mx-auto just items-center ml-[100px]">
                            <Nav />

                        </div>
                        {/* mobile nav */}
                        {/* <div className="xl:hidden w-[30px]">
          <MobileNav />
        </div> */}
                        <Link href="/contact">
                            <button className="bg-cyan-400  text-white mr-[100px] flex items-center justify-center mx-auto w-[200px] h-[66px] gap-3 rounded-full">
                            <PiPhoneCallThin style={{ fontSize: "40px", color: "white" }} />

                                <h1 className="text-[16px]">Book Now</h1>
                            </button>
                        </Link>
                    </div>

                </header>
            </div>
        </>
    );
};

export default Header;