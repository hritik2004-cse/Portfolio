"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  {
    name:"home",
    path: "/"
  },
  {
    name:"about",
    path: "/about"
  },
  {
    name:"portfolio",
    path: "/portfolio"
  },
  {
    name:"experience",
    path: "/experience"
  },
  {
    name:"contact",
    path: "/contact"
  }
];

const NavLinks = ({containerStyles}) => {

  const pathname = usePathname();
  return(
    <ul className={containerStyles}>
      {links.map((link,index)=>{
        const isActive = pathname === link.path;
        const charLength = link.name.length;
        const lineWidth = charLength > 5 ? "after:w-[120%]":"after:w-[90%]";
        console.log(charLength);
        return (
          <Link href={link.path} key={index} className={`relative text-lg uppercase text-white ${isActive && `${lineWidth} bg-accent rounded-xl px-[12px] py-[8px]`}`}>
            <span>
              {link.name}
            </span> 
          </Link>
        );
      })}
    </ul>
  );
}

export default NavLinks
