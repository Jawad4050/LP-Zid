
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const Growth = () => {
    return (
        <div className="lg:w-[65%] mx-auto pt-[180px]">
            <div className="mx-auto mb-[16px] flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#FCF6DE]"><Image alt="" src="/growth-icon.svg" width={24} height={24} className="w-[24px] h-[24px] mx-auto" /></div>
            <h4 className="text-[#403F3F] text-center lg:text-[42px] text-[32px] mb-[16px] font-bold-Rebond-Grotesque">Your Instagram Account<br/>is not Growing...</h4>
            <p className="text-[#635B5B] text-center text-[16px] lg:w-[40%] w-full">Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
            <div className="lg:flex gap-[10px] lg:mt-[40px] mt-[20px] lg:px-0 px-[20px]">
                <div className="bg-[#FCF7F5] lg:mb-0 mb-[20px] border boder-[#EADED6] p-[16px] rounded-[8px] flex ">
                    <div className="pt-1">
                         <IoClose className="text-[#E06E58]" />
                    </div>
                    <div className="ms-[8px]">
                        <h5 className="text-[#373737] text-[16px] mb-[8xp]">Posts qui font pas de stats</h5>
                        <p className="mb-0 text-[#635B5B]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem  inr= reo</p>
                    </div>
                </div>
                <div className="bg-[#FCF7F5] lg:mb-0 mb-[20px] border boder-[#EADED6] p-[16px] rounded-[8px] flex ">
                    <div className="pt-1">
                         <IoClose className="text-[#E06E58]" />
                    </div>
                    <div className="ms-[8px]">
                        <h5 className="text-[#373737] text-[16px] mb-[8xp]">Posts qui font pas de stats</h5>
                        <p className="mb-0 text-[#635B5B]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem  inr= reo</p>
                    </div>
                </div>
                <div className="bg-[#FCF7F5] border boder-[#EADED6] p-[16px] rounded-[8px] flex ">
                    <div className="pt-1">
                         <IoClose className="text-[#E06E58]" />
                    </div>
                    <div className="ms-[8px]">
                        <h5 className="text-[#373737] text-[16px] mb-[8xp]">Posts qui font pas de stats</h5>
                        <p className="mb-0 text-[#635B5B]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem  inr= reo</p>
                    </div>
                </div>
            </div>
            <div className="lg:px-0 px-[20px]">
                <Image alt="" src="/growth-design.svg" width={470} height={204} className="w-100 mx-auto" />
            </div>
        </div>
    );
};

export default Growth;