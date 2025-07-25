import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
    return (
        <div className="lg:w-[65%] w-[90%] mx-auto">
            <div className="bg-gradient-to-r relative rounded-[16px_16px_0px_0px] mb-[-5px] flex p-[5px] from-[#E1F0FB] via-[#FCF1D8] via-[#FFEBE7] to-[#F6E9FE]">
                <div className="w-full relative z-10 rounded-[14px_14px_0px_0px] bg-white bg-[url('/call-to-action-bg.svg')] bg-center bg-cover lg:p-[73px] p-5 overflow-hidden">
                    <div className="block mb-[40px] text-center">
                        <div>
                            <div className="mb-[16px] flex mx-auto items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#EBE2FD]"><Image alt="" src="/call-to-action-icon.svg" width={24} height={24} className="w-[24px] h-[24px] mx-auto" /></div>
                            <h4 className="text-[#403F3F] text-[42px] mb-[16px] font-bold-Rebond-Grotesque">Call to Action</h4>
                            <p className="text-[#635B5B] text-[16px] lg:w-[40%] mx-auto w-full">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                        </div>
                        <div >
                            <Link href="" className="text-[16px] mx-auto text-center block w-fit mt-[16px] px-[20px] py-[13px] rounded-[8px] bg-[#403F3F]" >Get Started</Link>
                        </div>
                    </div>
                </div>

                <span className="absolute inset-0 bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC] z-1 blur-2xl opacity-[25%]"></span>
            </div>
        </div>
    );
};

export default CallToAction;