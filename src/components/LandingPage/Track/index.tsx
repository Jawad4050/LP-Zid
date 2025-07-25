
import Image from "next/image";

const Track = () => {
    return (
        <div className="lg:w-[65%] mx-auto">
            <h4 className="text-[#403F3F] text-center lg:text-[42px] text-[32px] mb-[16px] font-bold-Rebond-Grotesque">Setup and Track <br/>your Instagram Growth</h4>
            <p className="text-[#635B5B] text-center text-[16px] lg:w-[40%] w-full">Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
            <div className="lg:flex items-center gap-[8px] mt-[40px] lg:px-0 px-[20px]">
                <div className="w-full bg-gradient-to-r rounded-[12px] flex p-[.5px] from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC] lg:mb-0 mb-[8px]">
                    <div className="bg-white rounded-[12px]">
                        <Image alt="" src="/track/img-1.svg" width={455} height={200} className="w-full" />
                        <div className="p-[24px]">
                            <h5 className="mb-[8px] flex items-center text-[16px] text-[#373737]">
                                <span className="me-[8px]"><Image alt="" src="/track/icon/icon-1.svg" width={15} height={15} /></span>Ciblez des comptes
                            </h5>
                            <p className="mb-0 text-[16px] text-[#635B5B]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gradient-to-r rounded-[12px] flex p-[.5px] from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC]">
                    <div className="bg-white rounded-[12px]">
                        <Image alt="" src="/track/img-2.svg" width={455} height={200} className="w-full" />
                        <div className="p-[24px]">
                            <h5 className="mb-[8px] flex items-center text-[16px] text-[#373737]">
                                <span className="me-[8px]"><Image alt="" src="/track/icon/icon-2.svg" width={15} height={15} /></span>Gérez les actions
                            </h5>
                            <p className="mb-0 text-[16px] text-[#635B5B]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[8px] lg:px-0 px-[20px]">
                <div className="w-full bg-gradient-to-r rounded-[12px] flex p-[.5px] from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC]">
                    <div className="bg-white rounded-[12px] p-[12px]">
                        <Image alt="" src="/track/img-3.svg" width={455} height={200} className="w-full" />
                        <div className="py-[24px] px-[18px]">
                            <h5 className="mb-[8px] flex items-center text-[16px] text-[#373737]">
                                <span className="me-[8px]"><Image alt="" src="/track/icon/icon-3.svg" width={15} height={15} /></span>Trackez vos statistiques en live
                            </h5>
                            <p className="mb-0 text-[16px] text-[#635B5B]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Track;