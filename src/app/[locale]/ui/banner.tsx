"use client";

interface BannerProps {
	title: string;
	description?: string;
	width?: string;
	height?: string;
	className?: string;
	btn?: string;
	bgImg?: string;
}

export default function Banner({
	title,
	description,
	width = 'auto',
	height = 'auto',
	className,
	btn,
	bgImg,
	...props
}: BannerProps) {
	const hasCustomSize = width !== 'auto' || height !== 'auto';
	
	// Создаем объект стилей для основного контейнера
	const containerStyle: React.CSSProperties = {};
	
	if (hasCustomSize) {
		containerStyle.width = width;
		containerStyle.height = height;
	}
	
	// Если передан bgImg, устанавливаем его как фоновое изображение
	if (bgImg) {
		containerStyle.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImg})`;
		containerStyle.backgroundSize = 'cover';
		containerStyle.backgroundPosition = 'center';
		containerStyle.backgroundBlendMode = 'darken';
	}
	
	return (
		<div
			className={`flex flex-col justify-end rounded-[2rem] ${!bgImg ? 'bg-[#d4d4d4]' : ''} ${className} ${hasCustomSize ? '' : 'h-full w-full'}`}
			style={Object.keys(containerStyle).length > 0 ? containerStyle : undefined}
			{...props}>
			{btn ? (
				<div className="flex lg:flex-row md:flex-row flex-col justify-between w-full px-[2.5rem] items-center mb-[2.32rem]">
					<div>
						<h4 className="font-bold text-[1.5rem] text-white mb-[0.75rem]">{title}</h4>
						{description && <p className="text-[1rem] font-400 text-white">{description}</p>}
					</div>
					<button className='w-[16.88rem] h-[3.375rem] text-[1.125rem] font-400 rounded-[1.5rem] bg-[#FA4D5C] hover:bg-gray-100 transition-colors'>{btn}</button>
				</div>
			) : (
				<div className="lg:w-[15rem] md:w-[15rem] w-[7.22rem] mb-[1.5rem] ml-[1.5rem]">
					<h4 className="font-bold lg:text-[1.5rem] md:text-[1.5rem] text-white text-[1rem] mb-[0.75rem]">{title}</h4>
					{description && <p className="text-[1rem] lg:inline md:inline hidden font-400 text-white">{description}</p>}
				</div>
			)}
		</div>
	);
}