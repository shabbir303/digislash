"use client"
import { motion } from "framer-motion";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";

const marketing = {
    img: "/marketing.svg",
    title: "Marketing Strategy",
    des: "We create data driven marketing strategies that achieve measurable results. From market anlayst to campaign execution, we help you to reach out target audience and achieve your business goals.",
    
}
const video = {
    img: "/videoEditing.png",
    title: "Video Editing",
    des: "We bring your vision to life through expert video editing. We transform raw footage into polished, engaging videos that captivate your audience and deliver your message with impact.",
}
const graphic = {
    img: "/graphic.svg",
    title: "Graphic Design",
    des: "Our team of talented graphic designers combines creativity and expertise to deliver execptional visual solutions. We'll help you stand out form the competition with unique and memorable designs.",
    
}
const research = {
    img: "/research.svg",
    title: "Marketing Research",
    des: "We provide in-depth market research that uncovers valuable insights about our target audience, competitors and industry trends. Our findings inform your marketing strategy and drive better business decisions",
    
}
const web = {
    img: "/analytc.svg",
    title: "Web Anlaytics",
    des: "Increase website traffic, improve conversions rate, and enhance user engagement with our comprehensive web anlytics services. We provide in-depth analysis and reporting that helps you make data driven decisions to achieve online success",
    
}
const content = {
    img: "/content.svg",
    title: "Content Creations",
    des: "We craft high quality content that engages your audience, builds your brand, and drives results. From craptivating blog post to stunning visuals, we bring your stories to life and help you to connect with your customers on a deeper",
    
}


const Business = () => {

    return (
        <div>
            <div className="text-center">
                <h1 className="text-[16px] uppercase text-[#2EA2F4] font-medium">What we do</h1>
                <p className="text-[40px] font-bold w-[500px] mx-auto leading-[50px] mt-[20px]">We provide wide range of business services</p>
            </div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0 bg-[url('/bgService.png')] bg-cover bg-center bg-indigo-950 md:w-[1480px] md:mx-auto rounded-2xl my-[50px]"
        >
            <div className="container mx-auto flex flex-col xl:flex-row justify-center items-center gap-[60px]  ">
                <Tabs
                    defaultValue="Marketing"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList  className="border-[1px] shadow-xl flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 p-[30px] rounded-2xl">
                        <TabsTrigger value="Marketing" className="bg-[#FAEEED] text-[20px] text-[#00092C] font-semibold px-[20px] py-[6px] rounded-xl hover:bg-[#2EA2F4] hover:text-white">Marketing Strategy</TabsTrigger>
                        <TabsTrigger value="video" className="bg-[#FAEEED] text-[20px] text-[#00092C] font-semibold py-[6px] rounded-xl hover:bg-[#2EA2F4] hover:text-white">Video Editing</TabsTrigger>
                        <TabsTrigger value="graphic" className="bg-[#FAEEED] text-[20px] text-[#00092C] font-semibold py-[6px] rounded-xl hover:bg-[#2EA2F4] hover:text-white">Graphic Design</TabsTrigger>
                        <TabsTrigger value="research" className="bg-[#FAEEED] text-[20px] text-[#00092C] font-semibold py-[6px] rounded-xl hover:bg-[#2EA2F4] hover:text-white">Marketing Research</TabsTrigger>
                        <TabsTrigger value="web" className="bg-[#FAEEED] text-[20px] text-[#00092C] font-semibold py-[6px] rounded-xl hover:bg-[#2EA2F4] hover:text-white">Web Analytics</TabsTrigger>
                        <TabsTrigger value="content" className="bg-[#FAEEED] text-[20px] text-[#00092C] font-semibold py-[6px] rounded-xl hover:bg-[#2EA2F4] hover:text-white">Content Creation</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full flex justify-center items-center">
                        {/* <TabsContent value="education" className="w-full">
                            content
                        </TabsContent>

                        <TabsContent value="skills" className="w-full">
                            skills
                        </TabsContent> */}

                        <TabsContent value="Marketing" className="md:w-[800px] ">
                           <div className="flex items-center justify-center gap-6">
                           <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h1 className="text-[18px] text-[#2EA2F4] uppercase">Creative</h1>
                                <h3 className="text-4xl text-white font-bold">{marketing.title}</h3>
                                <p className="max-w-[600px] text-white mx-auto xl:mx-0 font-light">{marketing.des} </p>
                                <button className="text-[16px] font-medium text-white p-[15px] rounded-xl bg-[#2EA2F4]">View Detail →</button>
                            </div>
                            <div>
                                <Image src={marketing.img} alt="marketing" width={400} height={400}/>
                            </div>
                           </div>
                        </TabsContent>
                        <TabsContent value="video" className="md:w-[800px] ">
                           <div className="flex items-center justify-center gap-6">
                           <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h1 className="text-[18px] text-[#2EA2F4] uppercase">Creative</h1>
                                <h3 className="text-4xl font-bold text-white">{video.title}</h3>
                                <p className="max-w-[600px] text-white mx-auto xl:mx-0 font-light">{video.des} </p>
                                <button className="text-[16px] font-medium text-white p-[15px] rounded-xl bg-[#2EA2F4]">View Detail →</button>
                            </div>
                            <div>
                                <Image src={video.img} alt="marketing" width={400} height={400}/>
                            </div>
                           </div>
                        </TabsContent>
                        <TabsContent value="graphic" className="md:w-[800px] ">
                           <div className="flex items-center justify-center gap-6">
                           <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h1 className="text-[18px] text-[#2EA2F4] uppercase">Creative</h1>
                                <h3 className="text-4xl font-bold text-white">{graphic.title}</h3>
                                <p className="max-w-[600px] text-white mx-auto xl:mx-0 font-light">{graphic.des} </p>
                                <button className="text-[16px] font-medium text-white p-[15px] rounded-xl bg-[#2EA2F4]">View Detail →</button>
                            </div>
                            <div>
                                <Image src={graphic.img} alt="marketing" width={400} height={400}/>
                            </div>
                           </div>
                        </TabsContent>
                        <TabsContent value="research" className="md:w-[800px] ">
                           <div className="flex items-center justify-center gap-6">
                           <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h1 className="text-[18px] text-[#2EA2F4] uppercase">Creative</h1>
                                <h3 className="text-4xl font-bold text-white">{research.title}</h3>
                                <p className="max-w-[600px] text-white mx-auto xl:mx-0 font-light">{research.des} </p>
                                <button className="text-[16px] font-medium text-white p-[15px] rounded-xl bg-[#2EA2F4]">View Detail →</button>
                            </div>
                            <div>
                                <Image src={research.img} alt="marketing" width={400} height={400}/>
                            </div>
                           </div>
                        </TabsContent>
                        <TabsContent value="web" className="md:w-[800px] ">
                           <div className="flex items-center justify-center gap-6">
                           <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h1 className="text-[18px] text-[#2EA2F4] uppercase">Creative</h1>
                                <h3 className="text-4xl font-bold text-white">{web.title}</h3>
                                <p className="max-w-[600px] text-white mx-auto xl:mx-0 font-light">{web.des} </p>
                                <button className="text-[16px] font-medium text-white p-[15px] rounded-xl bg-[#2EA2F4]">View Detail →</button>
                            </div>
                            <div>
                                <Image src={web.img} alt="marketing" width={400} height={400}/>
                            </div>
                           </div>
                        </TabsContent>
                        <TabsContent value="content" className="md:w-[800px] ">
                           <div className="flex items-center justify-center gap-6">
                           <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h1 className="text-[18px] text-[#2EA2F4] uppercase">Creative</h1>
                                <h3 className="text-4xl font-bold text-white">{content.title}</h3>
                                <p className="max-w-[600px] text-white mx-auto xl:mx-0 font-light">{content.des} </p>
                                <button className="text-[16px] font-medium text-white p-[15px] rounded-xl bg-[#2EA2F4]">View Detail →</button>
                            </div>
                            <div>
                                <Image src={content.img} alt="marketing" width={400} height={400}/>
                            </div>
                           </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
        </div>
    );
};

export default Business;