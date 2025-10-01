// components/block.tsx
"use client";

interface BlockProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function Block({
  className = "",
  children,
  ...props
}: BlockProps) {
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
