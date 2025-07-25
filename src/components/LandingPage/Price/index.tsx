"use client";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";



const Price = () => {

  return (
    <div className="bg-[url('/price-bg.png')] bg-center bg-cover lg:py-[80px] py-[40px] lg:px-0 p-[20px]">
      <div className="lg:w-[65%] mx-auto">
        <div className="mx-auto mb-[16px] flex items-center justify-center w-[45px] h-[45px] rounded-[8px] bg-[#FCF6DE]"><Image alt="" src="/dollar.svg" width={24} height={24} className="w-[24px] h-[24px] mx-auto" /></div>
        <h4 className="text-[#403F3F] text-center lg:text-[42px] text-[32px] mb-[16px] font-bold-Rebond-Grotesque">Our Pricing</h4>
        <p className="text-[#635B5B] text-center text-[16px] lg:w-[40%] mx-auto w-full">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <div className="lg:flex items-center gap-[8px] mt-[40px]">
          <div className="w-full lg:mb-0 mb-[15px] bg-white bg-gradient-to-r rounded-[12px] flex p-[.5px] from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC]">
            <div className="bg-white w-full rounded-[12px]">
              <div className="p-[24px] pb-0">
                <h5 className="mb-[10px] text-[#000000] text-[20px] font-bold-Rebond-Grotesque tracking-[1px]">Basic</h5>
                <p className="text-[#242429] text-[13px]">
                Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem in dolor est lorem
                </p>
              </div>
              <div className="p-[24px] pt-[10px]">
                <span className="text-[32px] text-[#242429]  font-bold-Rebond-Grotesque tracking-[1px] tracking-[-0.5px] leading-[52.9px] ">
                124.99€
                </span>
                <span className="text-[#242429] text-[13px]"> / mois</span>
                <div className="mt-[24px]">
                  <ul>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                      </span>
                      1 Compte Instagram
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                      </span>
                      25000 actions / jour
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Mass vues de stories
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Mass likes de stories
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Interactions avec les sondages
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Ciblage avec IA
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Rapports journaliers
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                    <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Conseiller dédié sur whatsapp
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[400] text-[13px]'>
                      <span className='block w-[16px] h-[16px] text-black text-[14px] flex items-center justify-center rounded-full me-2'>
                        <IoMdClose />
                      </span>
                      Follow / Unfollow
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[400] text-[13px]'>
                      <span className='block w-[16px] h-[16px] text-black text-[14px] flex items-center justify-center rounded-full me-2'>
                        <IoMdClose />
                      </span>
                      Welcome DM
                    </li>
                  </ul>
                </div>
                <button className="text-[14px] p-[1px] font-[500] bg-gradient-to-r rounded-[8px] from-[#30A5FF] via-[#FCAD19] to-[#E06E58] border-4 border-transparent bg-clip-padding bg-transparent curser-pointer lg:w-full w-full">
                  <span className="block px-[20px] text-[black] py-[10px] bg-white w-full rounded-[3px] h-full">Get Started</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full bg-white bg-gradient-to-r relative rounded-[12px] flex p-[1.5px] from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC]">
            <div className="bg-white w-full rounded-[12px] relative z-10">
              <div className="p-[24px] pb-0">
                <h5 className="mb-[10px] text-[#000000] text-[20px]  font-bold-Rebond-Grotesque tracking-[1px]">Expert</h5>
                <p className="text-[#242429] text-[13px]">
                Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem in dolor est lorem
                </p>
              </div>
              <div className="p-[24px] pt-[10px]">
                <span className="text-[32px] text-[#242429]  font-bold-Rebond-Grotesque tracking-[1px] tracking-[-0.5px] leading-[52.9px] ">
                124.99€
                </span>
                <span className="text-[#242429] text-[13px]"> / mois</span>
                <div className="mt-[24px]">
                  <ul>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      1 Compte Instagram
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      25000 actions / jour
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Mass vues de stories
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Mass likes de stories
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Interactions avec les sondages
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Ciblage avec IA
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Rapports journaliers
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                      <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Conseiller dédié sur whatsapp
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[400] text-[13px]'>
                      <span className='block w-[16px] h-[16px] text-black text-[14px] flex items-center justify-center rounded-full me-2'>
                        <IoMdClose />
                      </span>
                      Follow / Unfollow
                    </li>
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[400] text-[13px]'>
                      <span className='block w-[16px] h-[16px] text-black text-[14px] flex items-center justify-center rounded-full me-2'>
                        <IoMdClose />
                      </span>
                      Welcome DM
                    </li>
                  </ul>
                </div>
                <button className="rounded-[12px] w-full py-[12px] mt-[24px] flex items-center justify-center text-center bg-black text-white">
                  Get Started <FaArrowRightLong className="ms-2" />
                </button>
              </div>
            </div>
            <span className="absolute inset-0 bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC] z-1 blur-2xl opacity-[25%]"></span>
          </div>
        </div>
        <div className="bg-gradient-to-r rounded-[12px] mt-[8px] flex p-[1.5px] from-[#30A5FF] via-[#FCAD19] via-[#E06E58] to-[#BA4EFC]">
          <div className="bg-white w-full rounded-[12px] p-[24px]">
            <span className="text-[20px] block mb-[8px] text-[#000000]  font-AeonikProMedium font-[500] tracking-[-0.5px]">Consulting & Campaigns</span>
            <p className="text-[16px] text-[#635B5B] mb-[8px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem in dolor est lorem</p>
            <div className="lg:flex">
              <div>
                <div className="lg:flex items-center mt-[12px]">
                    <li className='text-[#181818] font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                        <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                          <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                        </span>
                        Offres multi comptes
                    </li>
                    <li className='text-[#181818] lg:ms-2 font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                        <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                          <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                        </span>
                        Stratégies virales
                    </li>
                    <li className='text-[#181818] lg:ms-2 font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                        <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                          <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                        </span>
                        Mediace : mass dm
                    </li>
                </div>
                <div className="lg:flex items-center">
                    <li className='text-[#181818] font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                        <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                          <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                        </span>
                        Mediace : mother / slave
                    </li>
                    <li className='text-[#181818] lg:ms-2 font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                        <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                          <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                        </span>
                        Mediace : scraping
                    </li>
                    <li className='text-[#181818] lg:ms-2 font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                        <span className='block bg-gradient-to-r from-[#30A5FF] via-[#FCAD19] p-[1px] to-[#E06E58] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                          <span className="block bg-white w-full h-full rounded-full text-black flex items-center justify-center"><FaCheck /></span>
                        </span>
                        Chatbot
                    </li>
                </div>
              </div>
              <div className="mt-auto ms-auto">
                <button className="text-[14px] p-[1px] font-[500] bg-gradient-to-r rounded-[8px] from-[#30A5FF] via-[#FCAD19] to-[#E06E58] border-4 border-transparent bg-clip-padding bg-transparent curser-pointer lg:w-fit w-full">
                  <span className="block px-[20px] text-[black] py-[10px] bg-white w-full rounded-[3px] h-full">Book a Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
