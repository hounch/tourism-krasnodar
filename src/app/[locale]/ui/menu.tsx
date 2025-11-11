"use client";

import Link from "next/link";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "../components/LanguageSwitcher";
import Image from "next/image";
import {useState, useRef, useEffect} from 'react';
import { Dropdown, DropdownItem } from 'flowbite-react'; 



export default function Menu() {
	const t = useTranslations('menu');
	const p = useTranslations('mainPage');
	const n = useTranslations('sections.info');

const [isWhatToDoOpen, setIsWhatToDoOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const whatToDoDropdownRef = useRef(null);
  const secondDropdownRef = useRef(null);

  // Закрытие dropdown при клике вне его области
  	useEffect(() => {
    const handleClickOutside = (event) => {
      if (whatToDoDropdownRef.current && !whatToDoDropdownRef.current.contains(event.target)) {
        setIsWhatToDoOpen(false);
      }
      if (secondDropdownRef.current && !secondDropdownRef.current.contains(event.target)) {
        setIsSecondDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleWhatToDoDropdown = () => {
    setIsWhatToDoOpen(!isWhatToDoOpen);
    // Закрываем второе меню при открытии первого
    if (!isWhatToDoOpen) {
      setIsSecondDropdownOpen(false);
    }
  };

  const toggleSecondDropdown = () => {
    setIsSecondDropdownOpen(!isSecondDropdownOpen);
    // Закрываем первое меню при открытии второго
    if (!isSecondDropdownOpen) {
      setIsWhatToDoOpen(false);
    }
  };

	return ( 
		<>
			<nav className="navbar">
				<div className="bg-[#FAFAFA] mx-auto justify-between flex flex-row px-[1rem] py-[0.94rem] max-w-[1440px] md:w-full h-[6.63rem]">
					<a href='/' className="logo my-auto">
						<svg
							width="206"
							height="52"
							viewBox="0 0 206 52"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M29.4703 45.4149L31.7701 46.4258L35.6382 36.5297L33.3384 35.5187L29.4703 45.4149Z"
								fill="#FA4D5C"
							/>
							<path
								d="M30.694 33.027L25.2365 38.8081L26.9947 40.6734L32.4523 34.8923L30.694 33.027Z"
								fill="#FA4D5C"
							/>
							<path
								d="M29.1468 29.6525L16.4663 35.22L17.4228 37.6548L30.1033 32.0873L29.1468 29.6525Z"
								fill="#FA4D5C"
							/>
							<path
								d="M28.9429 25.9072H7V28.5415H28.9429V25.9072Z"
								fill="#FA4D5C"
							/>
							<path
								d="M30.1033 22.3618L17.9784 17.0435L17.0219 19.4783L29.1468 24.7966L30.1033 22.3618Z"
								fill="#FA4D5C"
							/>
							<path
								d="M32.4523 19.5566L20.4611 6.85535L18.7029 8.72067L30.6941 21.4219L32.4523 19.5566Z"
								fill="#FA4D5C"
							/>
							<path
								d="M35.6382 17.9264L29.4141 2L27.1143 3.01098L33.3385 18.9303L35.6382 17.9264Z"
								fill="#FA4D5C"
							/>
							<path
								d="M48.6351 3.27424L46.3354 2.27039L40.2167 17.9263L42.5165 18.9301L48.6351 3.27424Z"
								fill="#FA4D5C"
							/>
							<path
								d="M46.7081 24.7968L53.1081 21.9916L52.1516 19.5568L45.7516 22.3619L46.7081 24.7968Z"
								fill="#FA4D5C"
							/>
							<path
								d="M46.9121 25.9072V28.5415H65.8589V25.9072H46.9121Z"
								fill="#FA4D5C"
							/>
							<path
								d="M45.7516 32.0874L63.7208 39.9758L64.6703 37.5338L46.7081 29.6525L45.7516 32.0874Z"
								fill="#FA4D5C"
							/>
							<path
								d="M39.6892 27.2246L49.4017 16.9298L47.6435 15.0644L39.1688 24.0422V3.85828H36.6861V43.0799H39.1688V30.4071L56.4839 48.7542L58.2422 46.8888L39.6892 27.2246Z"
								fill="#FA4D5C"
							/>
							<path
								d="M40.2167 36.5297L45.4844 49.9998L47.7841 48.996L42.5165 35.5187L40.2167 36.5297Z"
								fill="#FA4D5C"
							/>
							<path
								d="M74.9032 16.3604H78.0892V25.0533L85.2276 16.3604H89.0536L81.6056 24.8967L85.4808 29.7665C86.8522 31.468 88.0408 32.2512 89.3138 31.881V34.6861C86.6202 35.4977 84.5525 33.8246 82.8224 31.468L78.0892 25.2313V34.6861H74.9032V16.3604Z"
								fill="#FA4D5C"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M90.9174 22.9031H93.8853V24.028C94.6097 23.2448 95.9811 22.6183 97.4862 22.6183C100.693 22.6183 102.761 25.1315 102.761 28.6129C102.761 32.2012 100.327 34.9707 96.607 34.9707C95.5732 34.9707 94.5604 34.7927 93.8853 34.394V39.9188H90.9174V22.9031ZM93.8853 26.7263V31.4964C94.687 32.0161 95.3622 32.1727 96.3468 32.1727C98.4145 32.1727 99.6031 30.6563 99.6031 28.6913C99.6031 26.8046 98.52 25.4447 96.5508 25.4447C95.5451 25.4447 94.6097 25.9146 93.8853 26.7263Z"
								fill="#FA4D5C"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M113.029 33.7461C112.255 34.4723 111.116 34.9707 109.822 34.9707C106.327 34.9707 104.104 32.486 104.104 28.7909C104.104 25.3664 106.847 22.6183 110.778 22.6183C112.769 22.6183 114.759 23.2448 116.004 24.028V34.6859H113.029V33.7461ZM113.029 30.941V26.0214C112.333 25.6797 111.58 25.4447 110.75 25.4447C108.479 25.4447 107.283 27.068 107.283 28.9262C107.283 30.998 108.556 32.1727 110.363 32.1727C111.425 32.1727 112.431 31.596 113.029 30.941Z"
								fill="#FA4D5C"
							/>
							<path
								d="M128.987 32.9274C128.002 34.2659 126.244 34.9707 124.352 34.9707C120.582 34.9707 118.044 32.5145 118.044 28.7909C118.044 25.3664 120.526 22.6183 124.071 22.6183C125.984 22.6183 127.665 23.1095 128.755 24.2131L127.355 26.5981C126.476 25.7295 125.52 25.4447 124.458 25.4447C122.805 25.4447 121.229 26.7263 121.229 28.7909C121.229 30.8912 122.833 32.1727 124.591 32.1727C125.857 32.1727 126.842 31.5676 127.587 30.7346L128.987 32.9274Z"
								fill="#FA4D5C"
							/>
							<path
								d="M138.917 30.179H133.818V34.6857H130.85V22.9028H133.818V27.3525H138.917V22.9028H141.892V34.6857H138.917V30.179Z"
								fill="#FA4D5C"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M150.297 22.6183C154.151 22.6183 156.633 25.2596 156.633 28.7909C156.633 32.3293 154.151 34.9707 150.297 34.9707C146.443 34.9707 143.96 32.3293 143.96 28.7909C143.96 25.2596 146.443 22.6183 150.297 22.6183ZM150.297 32.1727C152.132 32.1727 153.476 30.8342 153.476 28.7909C153.476 26.8046 152.104 25.4447 150.297 25.4447C148.538 25.4447 147.139 26.7547 147.139 28.7909C147.139 30.7559 148.489 32.1727 150.297 32.1727Z"
								fill="#FA4D5C"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M157.435 31.8806H158.912C159.735 30.7842 160.382 28.3991 160.537 25.7293L160.72 22.9028H169.307V31.8806H171.248V37.4338H168.456V34.6857H160.206V37.4338H157.435V31.8806ZM162.014 31.8806H166.332V25.7293H163.491L163.406 26.9325C163.174 29.4172 162.527 31.1473 162.014 31.8806Z"
								fill="#FA4D5C"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M181.41 33.7461C180.637 34.4723 179.498 34.9707 178.203 34.9707C174.715 34.9707 172.486 32.486 172.486 28.7909C172.486 25.3664 175.229 22.6183 179.16 22.6183C181.15 22.6183 183.141 23.2448 184.385 24.028V34.6859H181.41V33.7461ZM181.41 30.941V26.0214C180.714 25.6797 179.962 25.4447 179.132 25.4447C176.86 25.4447 175.672 27.068 175.672 28.9262C175.672 30.998 176.938 32.1727 178.745 32.1727C179.807 32.1727 180.813 31.596 181.41 30.941Z"
								fill="#FA4D5C"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M187.149 22.9031H190.124V24.028C190.849 23.2448 192.22 22.6183 193.718 22.6183C196.925 22.6183 199 25.1315 199 28.6129C199 32.2012 196.567 34.9707 192.839 34.9707C191.805 34.9707 190.8 34.7927 190.124 34.394V39.9188H187.149V22.9031ZM190.124 26.7263V31.4964C190.926 32.0161 191.601 32.1727 192.586 32.1727C194.654 32.1727 195.842 30.6563 195.842 28.6913C195.842 26.8046 194.759 25.4447 192.79 25.4447C191.784 25.4447 190.849 25.9146 190.124 26.7263Z"
								fill="#FA4D5C"
							/>
						</svg>
					</a>
					<div className="emblem flex flex-row items-center">
						<Image src="/emblem.png" width={32} height={32} alt="Emblem" className="w-[2rem] h-[2rem] object-cover mr-[0.75rem]"/>
						<p className="text-[0.88rem] max-w-[11.94rem]">{p('ticTitle')}</p>
					</div>
						
					<div className="nav-links flex flex-row items-center">
<div className="relative inline-block" ref={whatToDoDropdownRef}>
              <button
                className="text-black text-[1rem] mr-[2rem] hover:text-[#FA4D5C] transition-colors cursor-pointer flex items-center focus:outline-none"
                type="button"
                onClick={toggleWhatToDoDropdown}
              >
                {t('whatToDo')}
                <svg className={`w-2.5 h-2.5 ms-3 transition-transform duration-200 ${isWhatToDoOpen ? 'rotate-180' : ''}`} 
				width="7" 
				height="4" 
				viewBox="0 0 7 4" 
				fill="none" 
				xmlns="http://www.w3.org/2000/svg">
				<path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
              </button>

              <div 
                className={`absolute top-full left-0 mt-2 z-50 bg-white border border-gray-200 rounded-[0.75rem] shadow-lg w-[13.38rem] transition-all duration-300 ${
                  isWhatToDoOpen 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                <ul className="py-2 text-sm text-black">
                  <li>
                    <a href="#" className="block hover:cursor-pointer hover:text-[#FA4D5C] px-4 py-2 ">{p('excursionsAndGuides')}</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{p('attractionsTitle')}</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{p('cultureAndArt')}</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{p('familyLeisure')}</a>
                  </li>
				  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{p('sportKrasnodar')}</a>
                  </li>
				  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{p('entertainment')}</a>
                  </li>
                </ul>
              </div>
            </div>
						<Link href="/gastronomy" className="text-black text-[1rem] mr-[2rem] hover:text-[#FA4D5C] transition-colors">
							{t('gastronomy')}
						</Link>
						<Link href="/stay" className="text-black text-[1rem] mr-[2rem] hover:text-[#FA4D5C] transition-colors">
							{t('whereToStay')}
						</Link>
						<div className="relative inline-block" ref={secondDropdownRef}>
              <button
                className="text-black text-[1rem] mr-[2rem] hover:text-[#FA4D5C] transition-colors cursor-pointer flex items-center focus:outline-none"
                type="button"
                onClick={toggleSecondDropdown}
              >
                {t('information')}
				<svg className={`w-2.5 h-2.5 ms-3 transition-transform duration-200 ${isWhatToDoOpen ? 'rotate-180' : ''}`} 
				width="7" 
				height="4" 
				viewBox="0 0 7 4" 
				fill="none" 
				xmlns="http://www.w3.org/2000/svg">
				<path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>

              </button>

              <div 
                className={`absolute top-full left-0 mt-2 z-50 bg-white border border-gray-200 rounded-[0.75rem] shadow-lg w-[18.31rem] transition-all duration-300 ${
                  isSecondDropdownOpen 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                <ul className="py-2 text-sm text-black">
                  <li>
                    <a href="#" className="block hover:cursor-pointer hover:text-[#FA4D5C] px-4 py-2 ">{n('about')}</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{n('news')}</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{n('tic')}</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{n('contacts')}</a>
                  </li>
				  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{n('docs')}</a>
                  </li>
				  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{n('professionals')}</a>
                  </li>
				  <li>
                    <a href="#" className="block hover:cursor-pointer px-4 py-2 hover:text-[#FA4D5C]">{n('reviews')}</a>
                  </li>
                </ul>
              </div>
            </div>
					</div>
					<div className="map flex flex-row">
					<Link href="/tourist-map" className="map flex items-center my-auto text-[1rem] hover:opacity-80 transition-opacity">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[0.75rem]">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.22969 7.17049H3.34856C1.50257 7.17049 0 5.56316 0 3.58524V2.98627C0 2.87424 0.035775 2.77512 0.107325 2.68894C0.480815 1.11609 1.80737 0 3.34856 0H8.22969C8.48727 0 8.69331 0.206844 8.69331 0.461086V6.70509C8.69331 6.96364 8.48727 7.17049 8.22969 7.17049ZM0.923004 3.24913V3.58524C0.923004 5.05037 2.01344 6.2397 3.34856 6.2397H7.76601V0.926485H3.34856C2.17228 0.926485 1.16769 1.84865 0.965924 3.11986C0.957338 3.16582 0.943038 3.20891 0.923004 3.24913Z" fill="#303030"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.5363 32H3.63186C1.62703 32 0 30.2548 0 28.1088V3.58524C0 3.32669 0.206041 3.11986 0.459327 3.11986C0.716907 3.11986 0.923004 3.32669 0.923004 3.58524C0.923004 5.05037 2.01344 6.2397 3.34856 6.2397H10.8226C10.9557 6.2397 11.0845 6.30003 11.1747 6.40345C11.2605 6.50687 11.2992 6.64477 11.2777 6.78266C11.2176 7.15038 11.1876 7.51666 11.1876 7.8815C11.1876 11.0789 16.2833 19.805 17.7558 22.2612C19.2283 19.805 24.3241 11.0789 24.3241 7.8815C24.3241 7.51666 24.2927 7.15038 24.2297 6.78266C24.2082 6.64908 24.2469 6.51118 24.3327 6.40345C24.4229 6.30003 24.5516 6.2397 24.689 6.2397H31.5363C31.7896 6.2397 32 6.44654 32 6.70509V31.5346C32 31.7932 31.7896 32 31.5363 32ZM0.923004 6.05871V28.1088C0.923004 29.742 2.13789 31.0692 3.63186 31.0692H31.0727V7.17049H25.217C25.2371 7.40893 25.2471 7.64593 25.2471 7.8815C25.2471 11.8632 18.4384 22.9292 18.1465 23.3989C18.0649 23.5368 17.9147 23.6186 17.7558 23.6186C17.5927 23.6186 17.4468 23.5368 17.3609 23.3989C17.069 22.9292 10.2603 11.8632 10.2603 7.8815C10.2603 7.64593 10.2717 7.40893 10.2946 7.17049H3.34856C2.39551 7.17049 1.5369 6.74387 0.923004 6.05871Z" fill="#303030"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5806 7.17049H14.9267C14.7936 7.17049 14.6691 7.11446 14.5833 7.01535C14.4931 6.91624 14.4502 6.78697 14.4673 6.65769C14.6434 4.96418 16.0558 3.68866 17.7558 3.68866C19.4515 3.68866 20.8639 4.96418 21.0442 6.65769C21.0571 6.78697 21.0142 6.91624 20.9283 7.01535C20.8382 7.11446 20.7137 7.17049 20.5806 7.17049ZM15.4977 6.2397H20.0096C19.6919 5.28737 18.7947 4.61944 17.7558 4.61944C16.7126 4.61944 15.8154 5.28737 15.4977 6.2397Z" fill="#303030"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7558 10.3291C15.9313 10.3291 14.4459 8.83814 14.4459 7.00673C14.4459 6.88895 14.453 6.7726 14.4674 6.65769C14.4888 6.42069 14.6906 6.2397 14.9267 6.2397H20.5806C20.821 6.2397 21.0185 6.42069 21.0443 6.65769C21.0557 6.7726 21.0614 6.88895 21.0614 7.00673C21.0614 8.83814 19.576 10.3291 17.7558 10.3291ZM15.3775 7.17049C15.459 8.41153 16.4937 9.39833 17.7558 9.39833C19.0137 9.39833 20.0483 8.41153 20.1298 7.17049H15.3775Z" fill="#303030"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7559 26.3464C13.1881 26.3464 8.5603 25.394 8.5603 23.5756C8.5603 21.8605 12.6128 20.9556 16.6225 20.822C16.8028 20.8134 16.9531 20.9039 17.039 21.0504C17.3223 21.5373 17.567 21.951 17.7559 22.2612C17.9405 21.951 18.1852 21.5373 18.4685 21.0504C18.5544 20.9039 18.7046 20.8177 18.8849 20.822C22.8989 20.9556 26.9472 21.8605 26.9472 23.5756C26.9472 25.394 22.3236 26.3464 17.7559 26.3464ZM16.3778 21.7614C11.7929 21.9553 9.48755 23.0197 9.48755 23.5756C9.48755 24.2004 12.4068 25.4199 17.7559 25.4199C23.1006 25.4199 26.0199 24.2004 26.0199 23.5756C26.0199 23.0197 23.7189 21.9553 19.1297 21.7614C18.5415 22.7611 18.1508 23.3946 18.1465 23.3989C18.065 23.5368 17.9147 23.6186 17.7559 23.6186C17.5927 23.6186 17.4468 23.5368 17.3609 23.3989C17.3566 23.3946 16.966 22.7611 16.3778 21.7614Z" fill="#303030"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7558 23.6186C17.5927 23.6186 17.4467 23.5368 17.3609 23.3989C17.3566 23.3903 16.9015 22.6577 16.2404 21.5201C14.0037 17.7021 10.2603 10.8462 10.2603 7.8815C10.2603 7.46495 10.2946 7.04695 10.3633 6.62753C10.9729 2.99488 14.081 0.35767 17.7558 0.35767C21.4306 0.35767 24.5387 2.99488 25.144 6.62753C25.2127 7.04695 25.2471 7.46495 25.2471 7.8815C25.2471 10.8462 21.5036 17.7021 19.2712 21.5201C18.6058 22.6577 18.1508 23.3903 18.1465 23.3989C18.0649 23.5368 17.9146 23.6186 17.7558 23.6186ZM17.7558 1.28414C14.5318 1.28414 11.81 3.59818 11.2777 6.78266C11.2176 7.15038 11.1876 7.51666 11.1876 7.8815C11.1876 9.88527 13.3169 14.6857 17.0389 21.0504C17.3222 21.5373 17.5669 21.951 17.7558 22.2612C17.9404 21.951 18.1851 21.5373 18.4685 21.0504C22.1905 14.6857 24.3241 9.88527 24.3241 7.8815C24.3241 7.51666 24.2926 7.15038 24.2297 6.78266C23.6973 3.59818 20.9756 1.28414 17.7558 1.28414ZM17.7558 10.3291C15.9313 10.3291 14.4459 8.83814 14.4459 7.00674C14.4459 6.88895 14.453 6.77261 14.4674 6.65769C14.6434 4.96418 16.0558 3.68866 17.7558 3.68866C19.4515 3.68866 20.8639 4.96418 21.0443 6.65769C21.0557 6.77261 21.0614 6.88895 21.0614 7.00674C21.0614 8.83814 19.576 10.3291 17.7558 10.3291ZM17.7558 4.61945C16.5323 4.61945 15.5149 5.53731 15.3861 6.7525C15.3775 6.83868 15.3732 6.92343 15.3732 7.00674C15.3732 8.32535 16.4421 9.39833 17.7558 9.39833C19.0652 9.39833 20.1341 8.32535 20.1341 7.00674C20.1341 6.92343 20.1298 6.83868 20.1213 6.7525C19.9925 5.53731 18.975 4.61945 17.7558 4.61945Z" fill="#FA4D5C"/>
</svg>
						{t('touristMap')}
					</Link>
					</div>
					<div className="switcher flex items-center">
						<LanguageSwitcher />
					</div>
				</div>
			</nav>
		</>
	);
}






