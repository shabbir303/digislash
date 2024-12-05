import { Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger, } from "../ui/accordion";


const Que = () => {
    return (
        <div className="container my-[200px]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-[100px]">
                <div className="leading-[40px]">
                    <h1 className="text-[42px]">You Ask, We Answer</h1>
                    <p className="text-[20px] text-[#5B5755] font-light">Get answers to common questions about our services and how we can help your business thrive.</p>
                </div>

                <Accordion type="single" collapsible className="w-full md:w-[500px]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[20px] text-slate-600 font-bold">
                        What platforms do you manage ads on?</AccordionTrigger>
                        <AccordionContent className="text-[16px] text-[#6A6A6A]">
                        We manage Google Ads, Meta Ads (Facebook & Instagram), YouTube Ads, and TikTok Ads.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-[20px] text-slate-600 font-bold">
                        What is included in Web Analytics setup?</AccordionTrigger>
                        <AccordionContent className="text-[16px] text-[#6A6A6A]">
                        Google Tag Manager, GA4, heatmaps, conversion tracking, server-side tracking, and reporting via Looker Studio.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-[20px] text-slate-600 font-bold">What types of content do you create?</AccordionTrigger>
                        <AccordionContent className="text-[16px] text-[#6A6A6A]">
                        We provide written content, copywriting, visuals, motion ads, reels, and video ads tailored to your brand.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-[20px] text-slate-600 font-bold">
                        What is included in CRO services?</AccordionTrigger>
                        <AccordionContent className="text-[16px] text-[#6A6A6A]">
                        Website audits, A/B testing, multivariate testing, landing page, and mobile optimization.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Que;