"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-lg bg-white/70 shadow-md" : "bg-transparent"
          }`}
      >
        <nav className="container mx-auto">
          <div className="flex items-center flex-row-reverse md:flex-row justify-between py-4">

            <div className="flex items-center gap-2 w-1/4  md:justify-start flex-row-reverse md:flex-row"
              style={{ color: isScrolled ? "#96722C" : "white" }}
            >
              <Image
                src={isScrolled ? "/icon/bar-gold.svg" : "/icon/bar.svg"}
                alt="menu"
                width={30}
                height={30}
                className="transition-all duration-300"
              />
              <p>Menu</p>
            </div>

            <div className="flex-shrink-0 w-1/2 flex justify-start md:justify-center">
              <Image
                src={isScrolled ? "/icon/Isolation.svg" : "/icon/urbania-logo.svg"}
                alt="Logo"
                width={isScrolled ? 50 : 100}
                height={isScrolled ? 50 : 100}
                className="transition-all duration-300"
              />
            </div>

            <div className="w-1/4 justify-end hidden md:flex">
              <Button text="Enquire Now" url="" />
            </div>

          </div>
        </nav>
      </header>


    </>
  );
}


