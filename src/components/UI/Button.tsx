import Link from "next/link";
import React from "react";
interface IButton {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
}
export const Button: React.FC<IButton> = ({ children, href, ariaLabel }) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="bg-base-100 py-[6px] px-[24px] inline-block shadow-button rounded-[2px] cursor-pointer text-button text-base-content border-[1px] border-transparent hover:border-base-content/20 transition-universal"
    >
      {children}
    </Link>
  );
};
