"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAndAnswers: FAQItem[] = [
    {
      question: "Question 1",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 2",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 3",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 4",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 5",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 6",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
  ];

  return (
    <div className="lg:w-[65%] mx-auto py-[80px] lg:px-0 px-[20px]">
      <div className="lg:flex mb-[40px]">
          <div className=" lg:text-start text-center">
              <div className="mb-[16px] flex items-center justify-center lg:mx-0 mx-auto w-[45px] h-[45px] rounded-[8px] bg-[#DCEDFE]"><Image alt="" src="/faq-icon.svg" width={24} height={24} className="w-[24px] h-[24px] mx-auto" /></div>
              <h4 className="text-[#403F3F] lg:text-[42px] text-[38px] mb-[16px] font-bold-Rebond-Grotesque">Frequently Asked Questions</h4>
              <p className="text-[#635B5B] text-[16px] lg:w-[40%] lg:mx-0 mx-auto w-full">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
          </div>
          <div className="mt-auto ms-auto">
              <Link href="" className="text-[16px] block lg:w-fit text-center mt-[16px] px-[20px] py-[13px] rounded-[8px] bg-[#403F3F]" >Get Started</Link>
          </div>
      </div>
      <div>
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="bg-gradient-to-r rounded-[16px] flex p-[.5px] from-[rgba(48,165,255,0.5)] via-[rgba(252,173,25,0.5)] to-[rgba(186,78,252,0.5)] mb-[8px]">
            <div className="bg-white text-[#020816] rounded-[16px] w-full px-[24px] py-[16px] text-[15.25px]">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(index)}>
                <span className="block font-[400]">{item.question}</span>
                <span className="block text-[20px]">{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="mt-5">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
