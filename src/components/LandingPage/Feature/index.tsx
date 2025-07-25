import Image from "next/image";
const Feature = () => {
    return (
        
        <div className="lg:px-0 px-[20px] bg-[url('/features/bg.svg')] bg-center bg-cover lg:py-[80px] py-[40px] lg:mt-[80px] mt-[40px] lg:w-[85%] rounded-[8px] mx-auto ">
            <div className="lg:px-[140px] px-[0px] mx-auto">
                <h4 className="lg:text-[42px] text-[38px] font-bold-Rebond-Grotesque tracking-[-0.5px] lg:leading-[52.9px] text-center text-white">All our Features</h4>
                <p className="text-[16px] text-white text-center mt-[16px] font-[500] lg:w-[40%] mx-auto w-full">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                <div className="lg:flex gap-[8px] mb-[8px] mt-[40px]">
                    <div className="w-full  bg-[#3E404C] lg:mb-0 mb-[24px] rounded-[16px] overflow-hidden border border-[#4E5160]">
                        <Image alt="" src="../features/img-1.svg" width={433} height={187} className="w-full"/>
                        <div className="p-[24px]">
                            <h5 className="mb-[7px] text-white text-[18px]">Story Views</h5>
                            <p className="mb-0 text-[14px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        </div>
                    </div>
                    <div className="w-full  bg-[#3E404C] lg:mb-0 mb-[24px] rounded-[16px] overflow-hidden border border-[#4E5160]">
                        <Image alt="" src="/features/img-2.png" width={433} height={187} className="w-full"/>
                        <div className="p-[24px]">
                            <h5 className="mb-[7px] text-white text-[18px]">Story Likes & Reactions</h5>
                            <p className="mb-0 text-[14px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        </div>
                    </div>
                    <div className="w-full  bg-[#3E404C] lg:mb-0 mb-[24px] rounded-[16px] overflow-hidden border border-[#4E5160]">
                        <Image alt="" src="../features/img-3.svg" width={433} height={187} className="w-full"/>
                        <div className="p-[24px]">
                            <h5 className="mb-[7px] text-white text-[18px]">Poll interactions</h5>
                            <p className="mb-0 text-[14px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex gap-[8px] mb-[8px]">
                    <div className="w-full  bg-[#3E404C] lg:mb-0 mb-[24px] rounded-[16px] overflow-hidden border border-[#4E5160]">
                        <Image alt="" src="../features/img-4.svg" width={433} height={187} className="w-full"/>
                        <div className="p-[24px]">
                            <h5 className="mb-[7px] text-white text-[18px]">DM Flows</h5>
                            <p className="mb-0 text-[14px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        </div>
                    </div>
                    <div className="w-full  bg-[#3E404C] lg:mb-0 mb-[24px] rounded-[16px] overflow-hidden border border-[#4E5160]">
                        <Image alt="" src="../features/img-5.svg" width={433} height={187} className="w-full"/>
                        <div className="p-[24px]">
                            <h5 className="mb-[7px] text-white text-[18px]">Follow / Unfollow</h5>
                            <p className="mb-0 text-[14px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;