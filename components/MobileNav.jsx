"use client"
import { Button } from "./ui/button";
import { CiMenuFries } from "react-icons/ci";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNav = () => {

    const pathName = usePathname();
    const links = [
        {
            name: "home",
            path: "/"
        },
        {
            name: "about us",
            path: "/aboutUs"
        },
        {
            name: "pricing",
            path: "/pricing"
        },
        {
            name: "our team",
            path: "/ourTeam"
        },
        {
            name: "services",
            path: "/services"
        },
        {
            name: "contact",
            path: "/contact"
        },
        {
            name: "Online Meeting",
            path: "/meeting"
        }
    ]
    return (

        <Sheet className="text-white">
            <SheetTrigger className="" asChild>
                <button className="border-[2px]"><CiMenuFries className=" text-[35px] p-[7px] font-black text-cyan-500" /></button>
            </SheetTrigger>
            <SheetContent
                side="left"
                className="bg-[#222] border-none">
                <nav className="flex flex-col gap-4  items-center mt-[100px] text-white  ">
                    {links.map((link, index) => {
                        return <SheetClose asChild key={index}>
                            <Link
                                href={link.path}
                                className={`${link.path === pathName && "text-[#FE7146] "
                                    } uppercase font-medium hover:text-[#FE7146] transition-all border-b-[1px] border-[#333] w-full`}
                            >
                                {link.name}
                            </Link>
                        </SheetClose>
                    })}
                </nav>


            </SheetContent>
        </Sheet>

    );
};

export default MobileNav;