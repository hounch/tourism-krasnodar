'use client';

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
  return (
    <div className={`flex flex-col  justify-end rounded-[2rem] ${className} ${img ? '' : 'bg-[#d4d4d4]'}`} style={{width, height}} {...props}>
        <div className={`${btn ? 'flex flex-row justify-between w-[72rem] items-center mb-[2.32rem]' : 'w-[15rem]'}`}>
      <h4 className={`margin-top-auto font-bold text-[1.5rem] mb-[0.75rem] ml-[1.5rem]`}>{title}</h4>
      <p className="margin-top-auto text-[1rem] font-400 text-[#30303080] mb-[1.5rem] ml-[1.5rem]">{description}</p>
      {btn && (
        <button className='w-[16.88rem] h-[3.375rem] text-[1.125rem] font-400 rounded-[0.5rem] bg-white'>{btn}</button>
      )}
        </div>
    </div>
  );
}

{/* <div className="rounded-[2rem] bg-[#d4d4d4]">
            <h4 className="font-bold text-[1.5rem]">Экскурсии и аудиогиды</h4>
            <p className="text-[1rem] font-400 text-[#30303080]">Экскурсии по городу</p>
          </div> */}