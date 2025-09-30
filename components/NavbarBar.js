"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function NavbarBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* Navbar */}
      <nav
        className={` container mx-auto fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left Menu */}
          <div
            className={`flex items-center gap-2 cursor-pointer ${
              scrolled ? "text-[#96722C]" : "text-white"
            }`}
            onClick={() => setMenuOpen(true)}
          >
            {/* Menu Icon */}
            <svg
              width="30"
              height="20"
              viewBox="0 0 38 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 13.1619H36"
                stroke={scrolled ? "#96722C" : "white"}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M2 2H36"
                stroke={scrolled ? "#96722C" : "white"}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-medium">MENU</span>
          </div>

          {/* Logo */}
          <Link href="#" className="flex justify-center">
            <Image
              src={
                scrolled
                  ? "/icon/Isolation.svg"
                  : "/icon/urbania-logo.svg"
              }
              alt="Urbania Realty"
              width={scrolled ? 50 : 120}
              height={40}
              priority
              
            />
          </Link>

          {/* Enquire Button */}
          <div className="text-right">
            <Button text="Enquire Now" url="/about" />
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-3/4 bg-[#94712b] text-white z-50 transform transition-transform duration-400 flex flex-col justify-center px-10 border-r border-white/40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute right-5 top-5 cursor-pointer">
          <Image
            src="/icon/close.svg"
            alt="Close"
            width={30}
            height={30}
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="space-y-5 text-xl font-serif">
          <li className="relative pl-10">
            <Link href="#">Home</Link>
          </li>
          <li className="pl-10">
            <Link href="#">About Us</Link>
          </li>
          <li className="pl-10 group relative">
            <span className="cursor-pointer">Projects</span>
            <ul className="absolute left-full top-0 hidden group-hover:block bg-[#94712b] shadow-md p-5 space-y-3 text-base">
              <li>
                <Link href="#">Ongoing</Link>
              </li>
              <li>
                <Link href="#">Upcoming</Link>
              </li>
              <li>
                <Link href="#">Completed</Link>
              </li>
            </ul>
          </li>
          <li className="pl-10">
            <Link href="#">Redevelopment</Link>
          </li>
          <li className="pl-10">
            <Link href="#">Experience</Link>
          </li>
          <li className="pl-10">
            <Link href="#">Media</Link>
          </li>
          <li className="pl-10">
            <Link href="#">Careers</Link>
          </li>
          <li className="pl-10">
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}
