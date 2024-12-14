"use client";

import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
import { PiPhoneCallThin } from "react-icons/pi";
import MobileNav from "./MobileNav";


const Header = () => {
    // const { theme, setTheme } = useTheme();

    return (
        <>
            <div>
                

                <header className="fixed top-0 left-0 w-full z-50 bg-white py-8 xl:py-12  ">
                    <div className="container  flex justify-between items-center">
                        <div>
                            <Link href="/">
                                <div className="flex items-center gap-[2px]">

                                    <Image
                                        src="/favicon.ico"
                                        alt="logo"
                                        height={40}
                                        width={40}
                                        priority={true}
                                    />
                                    <Image
                                        src="/ds-logo-15050.png"
                                        alt="logo"
                                        height={150}
                                        width={150}
                                        priority={true}
                                    />
                                </div>
                            </Link>
                        </div>
                        {/* desktop nav */}
                        <div className="hidden xl:flex justify-between   gap-8 items-center ">
                            <div>
                            <Nav />
                            </div>

                            {/* <SelectDasboard/> */}
                            <div>
                                <Link href="/contact">
                                    <button className="bg-[#2EA2F4] text-white mr-[100px] flex items-center justify-center mx-auto w-[200px] h-[66px] gap-3 rounded-full ">
                                        <PiPhoneCallThin style={{ fontSize: "40px", color: "white" }} />
                                        <h1 className="text-[16px]">Book Now</h1>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* mobile nav */}
                        <div className="xl:hidden w-[30px]">
                            <MobileNav />
                        </div>
                    </div>
                </header>
                {/* <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black  py-5 px-7">
                    <div className="mx-auto flex justify-center items-center">
                        <div>
                            <Link href="/">
                                <div className="flex items-center gap-[2px]">
                                    
                                    <Image
                                        src="/favicon.ico"
                                        alt="logo"
                                        height={40}
                                        width={40}
                                        priority={true}
                                    />
                                    <Image
                                        src="/ds-logo-15050.png"
                                        alt="logo"
                                        height={150}
                                        width={150}
                                        priority={true}
                                    />
                                </div>
                            </Link>
                        </div>
                        
                        <div className="hidden xl:flex mx-auto justify-center ml-[100px]">
                            <Nav />
                        </div>
                        
                        <div className="flex items-center gap-8">
                            <div>
                                
                                <DarkModeToggle/>
                            </div>
                            <div>
                                <Link href="/contact">
                                    <button className="bg-cyan-400 text-white mr-[100px] flex items-center justify-center mx-auto w-[200px] h-[66px] gap-3 rounded-full">
                                        <PiPhoneCallThin style={{ fontSize: "40px", color: "white" }} />
                                        <h1 className="text-[16px]">Book Now</h1>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header> */}
            </div>
        </>
    );
};

export default Header;