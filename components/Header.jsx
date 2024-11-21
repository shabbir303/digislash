
"use clinet"
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
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
                                        src="/digiIcon.png"
                                        alt="logo"
                                        height={150}
                                        width={150}
                                        priority={true} />
                                </div>
                            </Link>
                        </div>
                        {/* desktop nav */}
                        <div className="hidden xl:flex mx-auto gap-8 items-center ml-[100px]">
                            <Nav />
                            <Link href="/contact">
                                {/* <Button className="bg-accent rounded-xl text-black">
              Book Now
            </Button> */}
                            </Link>
                        </div>
                        {/* mobile nav */}
                        {/* <div className="xl:hidden w-[30px]">
          <MobileNav />
        </div> */}
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;