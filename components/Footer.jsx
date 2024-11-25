import React from 'react';
import { PiPhoneCallThin } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Separator } from "@/components/ui/separator"
import { IoMdTime } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


// import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div>


            <footer className="container bg-[#303360]  text-white">
                <div className="mx-auto w-full max-w-screen-2xl flex flex-col md:flex-row items-center ">
                    <div className="ml-12 flex flex-col md:flex-row md:items-center md:justify-center gap-[50px] md:gap-[200px] my-[80px]">
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">Head Office</h2>
                            <ul className="text-white  font-medium">
                                <li className="mb-4 flex items-center gap-2">
                                <IoLocationOutline className='text-2xl text-cyan-500'/><a href="#" className=" hover:text-cyan-500  gap-3">
                                    mohammadpur 1207</a>
                                </li>
                                <li className="mb-4 flex items-center gap-2">
                                <MdOutlineEmail className='text-2xl text-cyan-500'/>
                                <a href="#" className="hover:text-cyan-500 ">digislashagency@gmail.com</a>
                                </li>
                                <li className="mb-4 flex items-center gap-2">
                                <IoMdTime className='text-2xl text-cyan-500'/>
                                <a href="#" className="hover:hover:text-cyan-500">Monday to Saturday: 9.00am to 16.pm</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">About</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:hover:text-cyan-500">About Us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:hover:text-cyan-500">Our Team</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:hover:text-cyan-500">Contact us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:hover:text-cyan-500">Our FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-white uppercase ">Useful Links</h2>
                            <ul className="text-white  font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:hover:text-cyan-500">Latest News</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:hover:text-cyan-500">Pricing Table</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:hover:text-cyan-500">Our Services</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:hover:text-cyan-500">Our Portfolio</a>
                                </li>
                            </ul>


                        </div>

                        <div>

                            <ul className="text-white  font-medium ">
                                <li className="mb-4">
                                    <div className='flex justify-center items-center gap-4 mb-6'>
                                    <PiPhoneCallThin
                                    style={{ fontSize: "30px", color: "#49adf4" }} />
                                        <div>
                                            <h1>Call for support</h1>
                                            <h1 className='text-[#49adf4] text-xl'>+8801782989118</h1>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-4'>
                                        <TfiHeadphoneAlt 
                                        style={{ fontSize: "30px", color: "#49adf4" }} />
                                        <div>
                                            <h1>Have Any Questions?</h1>
                                            <h1 className='text-[#49adf4] text-xl'>+8801782989118</h1>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="mb-4 flex items-center gap-2 mt-6">
                                    <button className='w-[45px] h-[45px] items-center mx-auto flex justify-center hover:bg-cyan-500 rounded-full border-[0.25px] border-slate-500'><FaFacebookF
                                    className='text-xl'/>
                                    </button>
                                    <button className='w-[45px] h-[45px] items-center mx-auto flex justify-center hover:bg-cyan-500 rounded-full border-[1px] border-slate-500'><FaYoutube
                                    className='text-xl'/>
                                    </button>
                                    <button className='w-[45px] h-[45px] items-center mx-auto flex justify-center hover:bg-cyan-500 rounded-full border-[1px] border-slate-500'><FaInstagram
                                    className='text-xl'/>
                                    </button>
                                    <button className='w-[45px] h-[45px] items-center mx-auto flex justify-center hover:bg-cyan-500 rounded-full border-[1px] border-slate-500'><FaTwitter
                                    className='text-xl'/>
                                    </button>
                                </li>

                            </ul>


                        </div>
                    </div>
                    
                </div>
                <div className='w-full h-[0.5px] bg-slate-400'></div>
                <div className="md:px-4 py-8  mx-auto w-full max-w-screen-2xl flex flex-col md:flex-row items-center justify-between ">
                        <span className="text-sm text-gray-500 dark:text-gray-300 text-center">Copyright © 2024. All Rights Reserved.
                        </span>

                        <div className='flex items-center gap-5 md:gap-4 md:mr-[100px] mt-3 md:mt-0'>
                            <h1>Privacy Policy</h1>
                            <h1>Cookie Policy</h1>
                        </div>
                    </div>
            </footer>

        </div>
    );
};

export default Footer;