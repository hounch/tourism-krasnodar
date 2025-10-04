"use client";

interface BlockProps {
	className?: string;
	children?: React.ReactNode;
}

export default function Block({
	className = "",
	children,
	...props
}: BlockProps & Record<string, unknown>) {
	return (
		<div
			className={`
        bg-[#D4D4D4]
        ${className}
      `}
			{...props}
		>
			{children}
		</div>
	);
}







