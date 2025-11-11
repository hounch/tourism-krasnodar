import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';


export default function Footer() {
    const tFooter = useTranslations('footerPage');
    
    return (
        <>
        <section className="footer border-t-[1px] border-t-[#AAAAAA] mx-auto max-w-full text-[#303030] mt-[4rem] pt-[4rem] pb-[3rem]">
				<div className="flex mx-auto mb-[3rem] justify-between max-w-[75rem]">
					<div className="w-[20rem] flex flex-col justify-between h-[11.94rem]">
						<p className="mt-[0.75rem] mb-[1rem] text-[1rem] text-[#171717] font-400">{tFooter('copyright')}</p>
                        <p className="mt-[0.75rem] mb-[1rem] text-[1rem] text-[#171717] font-400">{tFooter('description')}</p>
					    <div className="flex w-[9rem] justify-between"><TgIcon /> <VkIcon /> <OkIcon /></div>
                    </div>
					<div className="w-[10.5rem] flex flex-col justify-between h-[8.25rem]">
						<Image src={"/72fd05bbbe6e21afb381dd63e6ef31fe9ef8fc7c.png"} alt={""} width={142} height={63} />
					</div>
					<div className="w-[10.125rem] flex flex-col justify-between h-[8.25rem]">
						<Link href="/info/about" className="text-[1.125rem] font-bold hover:text-[#FA4D5C] transition-colors">{tFooter('aboutKrasnodar')}</Link>
						<Link href="/info/docs" className="text-[1.125rem] font-bold hover:text-[#FA4D5C] transition-colors">{tFooter('documentation')}</Link>
						<Link href="/info/news" className="text-[1.125rem] font-bold hover:text-[#FA4D5C] transition-colors">{tFooter('newsLink')}</Link>
						<Link href="/krasnodar-map" className="text-[1.125rem] font-bold hover:text-[#FA4D5C] transition-colors">{tFooter('mapLink')}</Link>
					</div>
					<div className="w-[10.125rem] flex flex-col justify-between h-[8.25rem]">
						<Link href="/excursions" className="text-[1.125rem] font-bold hover:text-[#FA4D5C] transition-colors">{tFooter('excursionsLink')}</Link>
						<Link href="/gastronomy" className="text-[1.125rem] font-bold hover:text-[#FA4D5C] transition-colors">{tFooter('gastronomyLink')}</Link>
						<Link href="/stay" className="text-[1.125rem] font-bold hover:text-[#FA4D5C] transition-colors">{tFooter('whereToStayLink')}</Link>
						<Link href="/tourist-map" className="text-[1.125rem] font-bold hover:text-[#FA4D5C] transition-colors">{tFooter('touristMapLink')}</Link>
					</div>
				</div>
			</section>
        </>
    )
}

const TgIcon = () => (
	<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3333 0C8.21333 0 0 8.21333 0 18.3333C0 28.4533 8.21333 36.6667 18.3333 36.6667C28.4533 36.6667 36.6667 28.4533 36.6667 18.3333C36.6667 8.21333 28.4533 0 18.3333 0ZM26.84 12.4667C26.565 15.3633 25.3733 22.4033 24.7683 25.6483C24.5117 27.0233 23.9983 27.4817 23.5217 27.5367C22.4583 27.6283 21.6517 26.84 20.625 26.1617C19.0117 25.0983 18.095 24.4383 16.5367 23.4117C14.7217 22.22 15.895 21.56 16.94 20.4967C17.215 20.2217 21.9083 15.95 22 15.565C22.0127 15.5067 22.011 15.4462 21.995 15.3887C21.9792 15.3312 21.9493 15.2783 21.9083 15.235C21.7983 15.1433 21.6517 15.18 21.5233 15.1983C21.3583 15.235 18.7917 16.94 13.7867 20.3133C13.0533 20.8083 12.3933 21.065 11.8067 21.0467C11.1467 21.0283 9.9 20.68 8.965 20.3683C7.81 20.0017 6.91167 19.8 6.985 19.1583C7.02167 18.8283 7.48 18.4983 8.34167 18.15C13.695 15.8217 17.2517 14.2817 19.03 13.5483C24.1267 11.4217 25.1717 11.055 25.8683 11.055C26.015 11.055 26.3633 11.0917 26.5833 11.275C26.7667 11.4217 26.8217 11.6233 26.84 11.77C26.8217 11.88 26.8583 12.21 26.84 12.4667Z" fill="#FA4D5C"/>
</svg>


);

const VkIcon = () => (
	<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.45 2.45C0 4.92333 0 8.87833 0 16.8V18.2C0 26.11 0 30.065 2.45 32.55C4.92333 35 8.87833 35 16.8 35H18.2C26.11 35 30.065 35 32.55 32.55C35 30.0767 35 26.1217 35 18.2V16.8C35 8.89 35 4.935 32.55 2.45C30.0767 -3.97364e-07 26.1217 0 18.2 0H16.8C8.89 0 4.935 -3.97364e-07 2.45 2.45ZM5.90333 10.6517H9.91667C10.045 17.325 12.985 20.1483 15.3183 20.7317V10.6517H19.0867V16.4033C21.385 16.1583 23.8117 13.5333 24.6283 10.64H28.385C28.0785 12.1377 27.4665 13.556 26.5873 14.8065C25.7082 16.0572 24.5805 17.113 23.275 17.9083C24.7322 18.6333 26.0192 19.6592 27.0508 20.9182C28.0825 22.177 28.8355 23.6403 29.26 25.2117H25.1183C24.2317 22.4467 22.015 20.3 19.0867 20.0083V25.2117H18.62C10.64 25.2117 6.09 19.7517 5.90333 10.6517Z" fill="#FA4D5C"/>
</svg>


);

const OkIcon = () => (
	<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.394 8.95738C18.9264 8.93433 18.4587 9.00507 18.0198 9.16535C17.5808 9.3256 17.1795 9.57205 16.8402 9.88969C16.501 10.2073 16.2308 10.5896 16.0463 11.0131C15.8617 11.4367 15.7665 11.8928 15.7665 12.3537C15.7665 12.8146 15.8617 13.2707 16.0463 13.6943C16.2308 14.1178 16.501 14.5001 16.8402 14.8177C17.1795 15.1353 17.5808 15.3818 18.0198 15.5421C18.4587 15.7023 18.9264 15.7731 19.394 15.75C19.8616 15.7731 20.3291 15.7023 20.768 15.5421C21.2071 15.3818 21.6084 15.1353 21.9476 14.8177C22.2869 14.5001 22.5571 14.1178 22.7416 13.6943C22.9262 13.2707 23.0215 12.8146 23.0215 12.3537C23.0215 11.8928 22.9262 11.4367 22.7416 11.0131C22.5571 10.5896 22.2869 10.2073 21.9476 9.88969C21.6084 9.57205 21.2071 9.3256 20.768 9.16535C20.3291 9.00507 19.8616 8.93433 19.394 8.95738ZM33.2467 0H5.54113C2.48485 0 0 2.44602 0 5.45455V32.7273C0 35.7358 2.48485 38.1818 5.54113 38.1818H33.2467C36.3031 38.1818 38.7878 35.7358 38.7878 32.7273V5.45455C38.7878 2.44602 36.3031 0 33.2467 0ZM19.394 5.44602C21.2551 5.44602 23.04 6.1738 24.356 7.46924C25.672 8.76467 26.4113 10.5217 26.4113 12.3537C26.4113 14.1857 25.672 15.9427 24.356 17.2382C23.04 18.5336 21.2551 19.2615 19.394 19.2615C17.5328 19.2615 15.7479 18.5336 14.4319 17.2382C13.1159 15.9427 12.3766 14.1857 12.3766 12.3537C12.3766 10.5217 13.1159 8.76467 14.4319 7.46924C15.7479 6.1738 17.5328 5.44602 19.394 5.44602ZM24.5282 19.7898C25.9827 18.6647 27.0822 19.3211 27.4805 20.0965C28.1558 21.4602 27.3853 22.1165 25.6191 23.25C24.1385 24.1789 22.0953 24.5455 20.7533 24.6818L21.8787 25.7813L26.0087 29.8465C27.5151 31.3722 25.0564 33.75 23.5325 32.284C22.4935 31.2444 20.9784 29.7529 19.4025 28.2016L15.2727 32.284C13.7403 33.75 11.29 31.3465 12.8139 29.8465L13.8961 28.7813C14.7965 27.8949 15.8528 26.8465 16.9437 25.7813L18.0606 24.6818C16.7273 24.5455 14.658 24.196 13.1602 23.25C11.4026 22.1165 10.6234 21.4687 11.3074 20.0965C11.7056 19.3211 12.8052 18.6647 14.2597 19.7898C14.2597 19.7898 16.2251 21.3238 19.394 21.3238C22.5627 21.3238 24.5282 19.7898 24.5282 19.7898Z" fill="#FA4D5C"/>
</svg>


);