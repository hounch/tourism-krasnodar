"use client";

interface BannerProps {
	img?: string;
	hstyle?: string;
	title: string;
	description?: string;
	className?: string;
	width?: string;
	height?: string;
	btn?: string;
}

export default function Banner({
	img,
	hstyle,
	title,
	description,
	className = '',
	width = 'auto',
	height = 'auto',
	btn,
	...props
}: BannerProps) {
	const hasCustomSize = width !== 'auto' || height !== 'auto';
	return (
		<div
			className={`flex flex-col justify-end rounded-[2rem] ${hasCustomSize ? '' : 'h-full w-full'} ${img ? '' : 'bg-[#d4d4d4]'}`}
			style={hasCustomSize ? { width, height } : undefined}
			{...props}>
			{btn ? (
				<div className="flex flex-row justify-between w-full px-[2.5rem] items-center mb-[2.32rem]">
					<div>
						<h4 className="font-bold text-[1.5rem] mb-[0.75rem]">{title}</h4>
						{description && <p className="text-[1rem] font-400 text-[#30303080]">{description}</p>}
					</div>
					<button className='w-[16.88rem] h-[3.375rem] text-[1.125rem] font-400 rounded-[0.5rem] bg-white hover:bg-gray-100 transition-colors'>{btn}</button>
				</div>
			) : (
				<div className="w-[15rem] mb-[1.5rem] ml-[1.5rem]">
					<h4 className="font-bold text-[1.5rem] mb-[0.75rem]">{title}</h4>
					{description && <p className="text-[1rem] font-400 text-[#30303080]">{description}</p>}
				</div>
			)}
		</div>
	);
}



