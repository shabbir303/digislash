

const Color = () => {
    const goals = [
        {
            title:"Share Your Goals",
            des:"Tell us about your business needs and challenges.",
        },
        {
            title:"We Build the Strategy",
            des:"Develop a tailored plan with Digital Media Buying, Web Analytics, Content Creation, and CRO.",
        },
        {
            title:"Watch Your Business Thrive",
            des:"Execute, analyze, and optimize for measurable growth and success!",
        },
    ]
    return (
        <div className="container bg-[#F2FCFE] py-[120px]">
            <div className="md:ml-[100px]">
            <h1 className="text-[#88AAB8] text-[20px] font-medium ">GET EXCITED TO GROW!</h1>
            <h1 className="text-[42px] font-semibold">The Process Is Simple!</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:ml-[100px] mt-[100px] md:gap-7">
                {
                  goals.map((gaol, index)=>{
                    return(<div >
                        <div className="text-[28px] font-normal w-[100px] h-[100px] p-[20px] relative flex justify-center items-center rounded-xl border-[1px] border-slate-400 shadow-xl">{index + 1} </div>
                        <h1 className="text-[26px] my-[20px]" >{gaol.title} </h1>
                        <h1 className="text-[16px] text-[#5B5755] font-light" >{gaol.des} </h1>
                    </div> )
                  })
                }
            </div>
        </div>
    );
};

export default Color;