"use client";

interface IconProps {
  img: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  width?: string;
  height?: string;
}

export default function Icon({
  img,
  title,
  description,
  className = '',
  width = '13.56rem',
  height = '9.75rem',
  ...props
}: IconProps) {
  return (
    <div className={`flex-none ${className}`} style={{width, height}} {...props}>
      <div className={"relative z-10"}>
        {img}
        <h4 className={'font-bold text-[#303030] text-[1.5rem]'}>
          {title}
        </h4>
        <p className={'text-[1rem] font-400 text-[#30303080]'}>
          {description}
        </p>
      </div>
    </div>
  );
}







