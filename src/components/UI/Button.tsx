import Link from "next/link";
import React from "react";
interface IButton {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
}
export const Button: React.FC<IButton> = ({ children, href, ariaLabel }) => {
  return (
    <Link href={href} aria-label={ariaLabel} className="">
      {children}
    </Link>
  );
};
