"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-auto fixed top-0 shadow-lg ${
        isScrolled
          ? "hidden sm:block opacity-90 transition-opacity duration-300 ease-in-out"
          : "block opacity-100"
      } bg-[#03001417] backdrop-blur-md z-50 px-10`}
    >
      <div className="w-full h-full flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between m-auto px-[10px] gap-5 mb-5">
      <a
        href="#about-me"
        className="h-auto w-auto flex flex-row items-center invisible"
      >
        <Image
          src="/NavLogo.png"
          alt="logo"
          width={70}
          height={70}
          className="cursor-pointer hover:animate-slowspin hidden md:block"
        />

        <span className="font-bold ml-[10px] hidden md:block text-gray-300">
          Josué Brenes
        </span>
      </a>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl`}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
