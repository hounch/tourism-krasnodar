"use client";

import Image from "next/image";
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Header() {
	return (
		<>
			<div className="mx-auto flex py-[0.94rem] px-[7.5rem] bg-[#767676] w-full h-[4.38rem] z-10">
				<Image src="/Emblem.png" width={272} height={40} alt="Emblem" />
				<div className="contact-links ml-auto mt-[0.63rem] flex items-center">
					<a href="tel:+78612189777" className="text-white text-[0.88rem] mr-[2rem]">
						+7 (861) 218-97-77
					</a>
					<a href="mailto:tic@krd.ru" className="text-white text-[0.88rem] mr-[2rem]">
						tic@krd.ru
					</a>
					<LanguageSwitcher />
				</div>
			</div>
		</>
	);
}






