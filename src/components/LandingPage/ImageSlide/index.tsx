'use client';
import Image from 'next/image';
import React from 'react';
import { IoStar } from "react-icons/io5";

interface CustomerItemProps {
  item: {
    id: number;
    followers: string;
    description: string;
    name: string;
    title: string;
    imageSrc?: string;
    stars: number;
  };
}

// Single Customer Item Component
const CustomerItem: React.FC<CustomerItemProps> = ({ item }) => (
  <div key={item.id} className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[0px] w-[300px] px-[31px] py-[24px]">
    <div className="flex items-center gap-[1px] mb-1 text-[16px]">
        {Array.from({ length: item.stars }).map((_, index) => (
        <IoStar key={index} className="text-[#FCAD19]" />
        ))}
    </div>
    <span className="block text-[24px] my-[16px] text-black font-bold-GilroySemiBold">{item.followers}</span>
    <p className="text-[#999999] text-[16px] mb-[16px]">{item.description}</p>
    <div className="flex">
        <div>
            <Image
                src={item.imageSrc || '/default-image.jpg'} // Fallback to a default image if imageSrc is undefined
                alt="Profile Image"
                width={54}
                height={54}
                className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
            />
        </div>
        <div className="ms-[8px]">
            <span className="text-[16px] block text-black">{item.name}</span>
            <span className="text-[16px] block text-[#999999]">{item.title}</span>
        </div>
    </div>
  </div>
);

// Define the types for the `data` prop of ImageSlide
interface ImageSlideProps {
  data: {
    id: number;
    followers: string;
    description: string;
    name: string;
    title: string;
    imageSrc?: string;
    stars: number;
  }[];
  animation: boolean;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ data, animation }) => {
  return (
    <div className="relative overflow-hidden">
      <div className={`${animation ? "marquee" : "marqueefast"} flex space-x-2 w-max py-0 py-1`}>
        {data.map((item, index) => (
          <CustomerItem key={index} item={item} />
        ))}

        {data.map((item, index) => (
          <CustomerItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
