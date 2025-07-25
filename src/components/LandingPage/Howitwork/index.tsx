import Image from "next/image";
import Link from "next/link";

const HowItWork = () => {
    return (
            <div className="lg:w-[65%] lg:mt-[80px] mt-[40px] lg:mb-[80px] mb-[40px] mx-auto">
                <div className="lg:flex lg:px-0 px-[20px]">
                    <div className="lg:text-start text-center">
                        <div className="mb-[16px] lg:mx-0 mx-auto flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#DCEDFE]"><Image alt="" src="/how-it-work/icon-1.svg" width={24} height={24} className="w-[24px] h-[24px] mx-auto" /></div>
                        <h4 className="text-[#403F3F] text-[42px] mb-[16px] font-bold-Rebond-Grotesque">How it works</h4>
                        <p className="text-[#635B5B] text-[16px] lg:w-[60%] w-full">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                    </div>
                    <div className="mt-auto ms-auto ">
                        <Link href="" className="text-[16px] block lg:w-fit text-center mt-[16px] px-[20px] py-[13px] rounded-[8px] bg-[#403F3F]" >Get Started</Link>
                    </div>
                </div>
                <div className="lg:flex gap-[10px] mt-[40px] lg:px-0 px-[20px]">
                    <div className="w-full bg-gradient-to-r rounded-[12px] flex p-[.5px] from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC] lg:mb-0 mb-[20px]">
                        <div className="bg-white rounded-[12px] p-[16px] w-full flex relative">
                            <span className="bg-[#DCEDFE] rounded-[5px] px-[8px] py-[4px] text-[12px] text-[#3CA8FF] absolute right-[-10px] top-[-10px]">Step 1</span>
                            <div className="pt-1">
                                <Image alt="" src="/how-it-work/icons/icon-1.svg" width={25} height={25} />
                            </div>
                            <div className="ms-[8px]">
                                <h5 className="text-[#373737] text-[16px] mb-[8xp]">Connectez votre compte</h5>
                                <p className="mb-0 text-[#635B5B]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-gradient-to-r rounded-[12px] flex p-[.5px] from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC] lg:mb-0 mb-[20px]">
                        <div className="bg-white rounded-[12px] p-[16px] w-full flex relative">
                        <span className="bg-[#DCEDFE] rounded-[5px] px-[8px] py-[4px] text-[12px] text-[#3CA8FF] absolute right-[-10px] top-[-10px]">Step 2</span>
                            <div className="pt-1">
                                <Image alt="" src="/how-it-work/icons/icon-2.svg" width={25} height={25} />
                            </div>
                            <div className="ms-[8px]">
                                <h5 className="text-[#373737] text-[16px] mb-[8xp]">Configurez des cibles</h5>
                                <p className="mb-0 text-[#635B5B]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-gradient-to-r rounded-[12px] flex p-[.5px] from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC]">
                        <div className="bg-white rounded-[12px] p-[16px] w-full flex relative">
                        <span className="bg-[#DCEDFE] rounded-[5px] px-[8px] py-[4px] text-[12px] text-[#3CA8FF] absolute right-[-10px] top-[-10px]">Step 3</span>
                            <div className="pt-1">
                                <Image alt="" src="/how-it-work/icons/icon-3.svg" width={25} height={25} />
                            </div>
                            <div className="ms-[8px]">
                                <h5 className="text-[#373737] text-[16px] mb-[8xp]">Analysez vos Stats</h5>
                                <p className="mb-0 text-[#635B5B]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HowItWork;