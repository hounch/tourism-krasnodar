"use client";

import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="container mx-auto flex py-[0.94rem] px-[7.5rem] bg-[#767676] w-full h-[4.38rem] z-10">
        <Image src="/Emblem.png" width={272} height={40} />
        <div className="contact-links ml-auto mt-[0.63rem]">
          <a href="#" className="text-white font-[0.88rem] mr-[2rem]">
            +7 (861) 218-97-77
          </a>
          <a href="#" className="text-white font-[0.88rem] mr-[2rem]">
            tic@krd.ru
          </a>
          <a href="#" className="text-white font-[0.88rem]">
            RU/ENG
          </a>
        </div>
      </div>
    </>
  );
}
