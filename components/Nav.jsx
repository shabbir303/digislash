"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
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
            name:"our team",
            path: "/ourTeam"
        },
        {
            name:"services",
            path: "/services"
        },
        {
            name: "contact",
            path: "/contact"
        },
        {
            name:"Online Meeting",
            path:"/meeting"
        }
    ]
    return (
        <nav className="flex gap-8 text-black dark:text-white">
            {links.map((link, index) => {
                return <Link 
                href={link.path} 
                key={index}
                className={`${link.path === pathName && "text-cyan-500 border-b-2 border-white"} uppercase font-[16px] hover:text-cyan-500 `}
                >
                    {link.name}
                </Link>
            })}
        </nav>
    );
};

export default Nav;