"use client";

import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TbPhoneCall } from "react-icons/tb";
import { PiPhoneCallThin } from "react-icons/pi";
import { Moon, Sun } from "lucide-react";
// import { useTheme } from "@nextui-org/react";
// import { useTheme } from "next-themes";

import { useTheme } from "next-themes";
import DarkModeToggle from "./DarkTheme/darkthemeToggle";


const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <div>
                <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black  py-5 px-7">
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
                        {/* desktop nav */}
                        <div className="hidden xl:flex mx-auto justify-center ml-[100px]">
                            <Nav />
                        </div>
                        {/* mobile nav */}
                        <div className="flex items-center gap-8">
                            <div>
                                {/* <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Sun className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${theme === 'dark' ? 'dark:-rotate-90 dark:scale-0' : ''}`} />
                                            <Moon className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${theme === 'light' ? 'dark:rotate-0 dark:scale-100' : ''}`} />
                                            <span className="sr-only">Toggle theme</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => setTheme("light")}>
                                            Light
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                                            Dark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("system")}>
                                            System
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu> */}
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
                </header>
            </div>
        </>
    );
};

export default Header;