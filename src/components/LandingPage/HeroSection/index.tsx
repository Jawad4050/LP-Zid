import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

const HeroHeader = () => {
    return (
      <div className=" lg:w-[85%] w-[90%] mx-auto bg-[url('/bg-hero.svg')] bg-center bg-cover rounded-[12px_12px_12px_12px]">
        <div className="relative">
          <div className="pt-[80px] pb-[0px] lg:px-0 px-[20px] text-center mx-auto ">
            <div className="flex items-center justify-center">
              <span className="block text-white bg-[#FF9923] text-[9px] rounded-full px-[8px] py-[3px]">NEW</span>
              <span className="block text-[rgb(0,0,0,64%)] ms-[8px] text-[13px]">20% OFF for 3 days</span>
            </div>
            <h1 className="lg:text-[66px] text-[32px] mb-0 font-bold-Rebond-Grotesque text-[#403F3F] tracking-[-2%] lg:leading-[80px] leading-[32px]">Obtenez <span className="text-[#BB5DF9]">15x</span> plus de<br/><span className="text-[#30A5FF]">vrais</span> abonnes <span className="text-[#E06E58]">Instagram</span></h1>
            <p className="lg:text-[18px] text-[14px] font-[300] font-[400] mt-[16px] text-[#635B5B]">Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
            <Link href="" className="text-[16px] block w-fit mx-auto mt-[16px] px-[20px] py-[13px] rounded-[8px] bg-[#403F3F]" >Get Started</Link>
            <div className="mx-auto flex items-center justify-center my-[15px]">
              <div className='flex items-center'>
                <Image src="/Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] border-[2px] border-white rounded-full object-cover' />
                <Image src="/Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] border-[2px] border-white rounded-full object-cover ms-[-14px]' />
                <Image src="/Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] border-[2px] border-white rounded-full object-cover ms-[-14px]' />
                <Image src="/Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] border-[2px] border-white rounded-full object-cover ms-[-14px]' />
                <Image src="/Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] border-[2px] border-white rounded-full object-cover ms-[-14px]' />
              </div>
              <div className="ms-4">
                <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                  <IoStar className="text-[#FCAD19]" />
                  <IoStar className="text-[#FCAD19]" />
                  <IoStar className="text-[#FCAD19]" />
                  <IoStar className="text-[#FCAD19]" />
                  <IoStar className="text-[#FCAD19]" />
                </div>
                <span className='text-[16px] font-[500] text-[#635B5B] block text-start'>+25’000 users</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:w-[65%] mx-auto mb-[-120px] p-[24px] ">
            <div className="lg:h-[540px] h-[250px] relative bg-gradient-to-r rounded-[12px] flex p-[5px] from-[#E1F0FB] via-[#FCF1D8] via-[#FFEBE7] to-[#F6E9FE] w-full bg-[#424242]">
              <div className="bg-white w-full h-full rounded-[9px] relative z-10"></div>
              <span className="absolute inset-0 bg-gradient-to-r from-[#E1F0FB] via-[#FCF1D8] via-[#FFEBE7] to-[#F6E9FE] z-1 blur-2xl opacity-[100%]"></span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroHeader;