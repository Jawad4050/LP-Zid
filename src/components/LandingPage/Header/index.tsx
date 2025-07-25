"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <div className="relative bg-white">
      <div className="lg:flex items-center justify-between mx-auto lg:w-[85%] px-[23px] lg:py-[12px] py-4">
        <div className="flex items-center">
          <div>
            <Image src="../logo.svg" alt="Logo" width={110} height={24} />
          </div>
          <div className="ms-auto lg:hidden block">
            <Image
              src={`${navMenu ? "../close.svg" : "../menu.svg"}`}
              alt="Menu"
              width={24}
              height={16}
              onClick={() => setNavMenu((prev) => !prev)}
            />
          </div>
        </div>

        <div className={`w-full lg:flex ${navMenu ? "" : "hidden"} lg:mt-0 mt-5`}>
          <div className="lg:flex block items-center gap-[40px] text-[15.25px] font-[200] mx-auto">
            <Link href="/" className="block lg:pb-0 pb-[18px] text-[#3D3D3D]">navlink</Link>
            <Link href="/" className="block lg:pb-0 pb-[18px] text-[#3D3D3D]">navlink</Link>
            <Link href="/" className="block lg:pb-0 pb-[18px] text-[#3D3D3D]">navlink</Link>
            <Link href="/" className="block lg:pb-0 pb-[18px] text-[#3D3D3D]">navlink</Link>
          </div>
          <div className="d-flex align-items-center">
            <button className="text-[14px] px-[10px] text-[black] py-[10px] font-[500] rounded-full border-[1px] border-[rgb(251,251,251,20%)] bg-transparent curser-pointer lg:w-fit w-full">
            Log In
            </button>
            <button className="text-[14px] p-[1px] font-[500] bg-gradient-to-r rounded-[8px] from-[#30A5FF] via-[#FCAD19] to-[#E06E58] border-4 border-transparent bg-clip-padding bg-transparent curser-pointer lg:w-fit w-full">
              <span className="block px-[20px] text-[black] py-[10px] bg-white w-full rounded-[3px] h-full">Get Started</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
