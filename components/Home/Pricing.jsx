






import React from "react";

const Pricing = () => {
    return (
        <div className="md:bg-[#cecbcb55] ">
            <section className="bg-[#2EA2F4] bg-cover bg-center  relative z-10 overflow-hidden pb-12 pt-[50px] lg:pb-[90px] lg:pt-[120px]">
                <div className="container mx-auto md:w-[1440px]">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center ">
                                <span className="mb-2 block text-lg font-semibold text-white">
                                    Pricing Table
                                </span>
                                <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-white  sm:text-4xl md:text-[40px]">
                                    Our Pricing Plan
                                </h2>
                                <p className="text-base text-white text-body-color ">
                                Our premium packages fuel growth with targeted ads, captivating content, and end-to-end marketing solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="-mx-4 flex flex-wrap">
                            <PricingCard
                                type="Media Buying"
                                price="$200"
                                subscription="month"
                                description={<span className="text-[16px] text-[#555] font-light">Our Media Buying Package optimizes ad spend with targeted campaigns, advanced tracking, and in-depth analytics—designed to amplify reach and maximize results</span>}
                                buttonText="Get Started"
                            >
                                {/* <div className="border-[1px] w-full border-gray-400"></div> */}
                                <ul className="space-y-2 mt-4">
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Media Buying <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Facebook Ads <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Google Ads <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Web Analytics <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        GTM Setup <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        GA4 Setup <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Heatmaps Setup <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Server Setup <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    FB Pixel & SS Tracking <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    GADS Conversion Tracking <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        TikTok Tracking <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                        Content Creation <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                        Business Consultation <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                        Monthly Meeting <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Business Growth Plan <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Marketing Plan <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Marketing Budget Plan <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                </ul>
                            </PricingCard>
                            <PricingCard
                                type="Content Creation"
                                price="$300"
                                subscription="month"
                                description={<span className="text-[16px] text-[#555] font-light">Our Content Creation Package fuels performance with impactful visuals and persuasive copy, from graphics and reels to video editing and ad writing—designed to drive results.</span>}
                                buttonText="Get Started"
                            >
                                {/* <div className="border-[1px] w-full border-gray-400"></div> */}
                                <ul className="space-y-2 mt-4">
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Content Creation <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Graphics design <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Motion Graphics Ads <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Reels Ads <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Video Editing<span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Srcipt Writing <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Ad Copy Writing<span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Media Buying <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Facebook Ads <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Google Ads <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Web Analytics <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    GA4 Setup <span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Business Consultation<span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Monthly Meeting<span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Business Growth Plan<span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Marketing Plan<span className="ml-auto text-red-500">✘</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#7d7d7d] font-light">
                                    Marketing Budget Plan<span className="ml-auto text-red-500">✘</span>
                                    </li>
                                </ul>
                            </PricingCard>
                            <PricingCard
                                type="Entrepreneur"
                                price="$1000"
                                subscription="month"
                                description={<span className="text-[16px] text-[#555] font-light">Our Entrepreneur Package offers a full suite for digital growth: targeted ads, analytics, tracking, content creation, and expert consultation to drive success.</span>}
                                buttonText="Get Started"
                            >
                                {/* <div className="border-[1px] w-full border-gray-400"></div> */}
                                <ul className="space-y-2 mt-4">
                                <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Media Buying <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Facebook Ads <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Google Ads <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Web Analytics <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        GTM Setup <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        GA4 Setup <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Heatmaps Setup <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Server Setup <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    FB Pixel & SS Tracking <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    GADS Conversion Tracking <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        TikTok Tracking <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Content Creation <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Business Consultation <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                        Monthly Meeting <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Business Growth Plan <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Marketing Plan <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                    <li className="flex items-center text-[18px] text-[#00092C] font-light">
                                    Marketing Budget Plan <span className="ml-auto text-green-500">✔</span>
                                    </li>
                                </ul>
                            </PricingCard>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;

const PricingCard = ({
    children,
    description,
    price,
    type,
    subscription,
    buttonText,
    active,
}) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
                    <span className="mb-3 block text-lg font-semibold text-primary">
                        {type}
                    </span>
                    <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                        {price}
                        <span className="text-base font-medium text-body-color dark:text-dark-6">
                            / {subscription}
                        </span>
                    </h2>
                    <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
                        {description}
                    </p>
                    <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
                    <a
                        href="/#"
                        className={` ${active
                                ? "block w-[100px] rounded-md border border-primary bg-[#2EA2F4] p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                                : "block w-[200px] mx-auto rounded-xl border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-none hover:bg-[#2EA2F4] hover:text-white dark:border-dark-3"
                            } `}
                    >
                        {buttonText}
                    </a>
                    <div>
                        <span className="absolute right-0 top-7 z-[-1]">
                            <svg
                                width={77}
                                height={172}
                                viewBox="0 0 77 172"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1={86}
                                        y1={0}
                                        x2={86}
                                        y2={172}
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#3056D3" stopOpacity="0.09" />
                                        <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="absolute right-4 top-4 z-[-1]">
                            <svg
                                width={41}
                                height={89}
                                viewBox="0 0 41 89"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="38.9138"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 87.4849)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 74.9871)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 62.4892)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 38.3457)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 13.634)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 50.2754)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 26.1319)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="1.42021"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 1.42021)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 87.4849)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 74.9871)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 62.4892)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 38.3457)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 13.634)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 50.2754)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 26.1319)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="1.4202"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 1.4202)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 87.4849)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 74.9871)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 62.4892)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 38.3457)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 13.634)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 50.2754)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 26.1319)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="1.42019"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 1.42019)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 87.4849)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 74.9871)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 62.4892)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 38.3457)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 13.634)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 50.2754)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 26.1319)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="1.4202"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 1.4202)"
                                    fill="#3056D3"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

const List = ({ children }) => {
    return (
        <p className="text-base text-body-color dark:text-dark-6">{children}</p>
    );
};
