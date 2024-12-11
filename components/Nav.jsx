"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathName = usePathname();
    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About us",
            path: "/aboutUs"
        },
        {
            name: "Pricing",
            path: "/pricing"
        },
        {
            name:"Our Team",
            path: "/ourTeam"
        },
        {
            name:"Services",
            path: "/services"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name:"Online Meeting",
            path:"/meeting"
        },
        {
            name:"Dashboard",
            path:"/dashboard"
        }
    ]
    return (
        <nav className="flex gap-4  text-[#303360] text-[16px] font-light">
            {links.map((link, index) => {
                return <Link 
                href={link.path} 
                key={index}
                className={`${link.path === pathName && "text-cyan-500 border-b-2 border-white"}  font-[16px] hover:text-cyan-500 `}
                >
                    {link.name}
                </Link>
            })}
        </nav>
    );
};

export default Nav;