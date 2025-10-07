"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    {
      href: "#",
      label: "Projects",
      submenu: [
        { href: "/projects/ongoing", label: "Ongoing" },
        { href: "/projects/upcoming", label: "Upcoming" },
        { href: "/projects/completed", label: "Completed" },
      ],
    },
    { href: "/redevelopment", label: "Redevelopment" },
    { href: "/awards", label: "Experience" },
    { href: "/blogs", label: "Media" },
    { href: "/contact", label: "Contact Us" },
  ];

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleMenuClick = (href) => {
    router.push(href);
    setMenuOpen(false);
    setOpenSubmenus({});
  };

  const handleSubmenuClick = (parentLabel, href) => {
    router.push(href);
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${isScrolled ? "backdrop-blur-lg bg-white/70 shadow-md" : "bg-transparent"
            }`}
        >
          <div className="container mx-auto">
            <div className="flex items-center flex-row-reverse md:flex-row justify-between py-4">
              {/* Left: Menu Button */}
              <div
                className="flex items-center uppercase gap-2 w-1/4 md:justify-start flex-row-reverse md:flex-row"
                style={{ color: isScrolled ? "#96722C" : "white" }}
              >
                <Image
                  src={isScrolled ? "/icon/bar-gold.svg" : "/icon/bar.svg"}
                  alt="menu"
                  width={30}
                  height={30}
                  className="transition-all duration-300 cursor-pointer"
                  onClick={() => setMenuOpen(true)}
                />
                <p className="cursor-pointer" onClick={() => setMenuOpen(true)}>
                  Menu
                </p>
              </div>

              {/* Center: Logo */}
              <div className="flex-shrink-0 w-1/2 flex justify-start md:justify-center">
                <Image
                  src={isScrolled ? "/icon/Isolation.svg" : "/icon/urbania-logo.svg"}
                  alt="Logo"
                  width={isScrolled ? 50 : 100}
                  height={isScrolled ? 50 : 100}
                  className="transition-all duration-300"
                />
              </div>

              {/* Right: Button */}
              <div className="w-1/4 justify-end hidden md:flex">
                <Button text="Enquire Now" url="" bgColor={isScrolled ? "transparent" : "rgba(0, 0, 0, 0.5)"}/>
              </div>
            </div>
          </div>
        </nav>

        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-full md:w-3/4 flex menu bg-[#96722C] text-white shadow-lg z-[1001] transform transition-transform duration-300 overflow-y-auto
 ${menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        // style={{ paddingLeft: "40px", paddingRight: "40px" }}
        >
          <div className="w-full sm:w-5/12 lgx:w-4/12 
        py-20 flex flex-col sm:border-r-2 border-[#FFFFFF42] h-full text-white relative z-50">
            {menuItems.map(({ href, label, submenu }) => {
              const isActiveMenu = pathname === href || submenu?.some((s) => s.href === pathname);
              const isHovered = hoveredMenu === label;
              const showIcon = isActiveMenu && !hoveredMenu ? true : isHovered;
              const isOpen = openSubmenus[label];

              return (
                <div
                  key={label}
                  className="relative py-3 px-10"
                  onMouseEnter={() => !isMobile && setHoveredMenu(label)}
                  onMouseLeave={() => !isMobile && setHoveredMenu(null)}
                >
                  {/* Parent Menu Item */}
                  <div
                    className="flex items-center gap-3 group cursor-pointer transition-colors duration-300"
                    onClick={() =>
                      submenu ? toggleSubmenu(label) : handleMenuClick(href)
                    }
                  >
                    {/* Isolation Icon */}
                    <div className="w-[20px] h-[20px] flex items-center justify-center">
                      <Image
                        src="/icon/Isolation-white.svg"
                        alt={`${label} icon`}
                        width={20}
                        height={20}
                        className={`transition-opacity duration-300 ${showIcon ? "opacity-100" : "opacity-0"
                          }`}
                      />
                    </div>

                    {/* Label */}
                    <h5
                      className={`flex-1 transition-all duration-300 ${isActiveMenu && !hoveredMenu
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                        }`}
                    >
                      {label}
                    </h5>

                    {/* 📱 Arrow only visible on Mobile */}
                    {submenu && (
                      <Image
                        src="/icon/arrow.svg"
                        alt="Dropdown arrow"
                        width={20}
                        height={20}
                        className={`block sm:hidden transition-transform duration-300 ${isOpen ? "-rotate-90" : "rotate-90"
                          }`}
                      />
                    )}
                  </div>

                  {/* Submenu */}
                  {submenu && isOpen && (
                    <>
                      {/* 🖥️ Desktop (right side) */}
                      <div className="hidden sm:flex absolute left-full top-0 min-w-[200px] flex-col mt-0 px-5 z-40 transition-all duration-300">
                        {submenu.map((item) => {
                          const isActiveSubmenu = pathname === item.href;
                          return (
                            <div
                              key={item.href}
                              onClick={() => handleSubmenuClick(label, item.href)}
                              className="flex justify-between items-center px-4 py-3 cursor-pointer text-white"
                            >
                              <span>{item.label}</span>
                              {isActiveSubmenu && (
                                <Image
                                  src="/icon/arrow.svg"
                                  alt="Active submenu arrow"
                                  width={20}
                                  height={20}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* 📱 Mobile (dropdown below) */}
                      <div className="flex sm:hidden flex-col ml-8 mt-3 space-y-2 transition-all duration-300">
                        {submenu.map((item) => {
                          const isActiveSubmenu = pathname === item.href;
                          return (
                            <div
                              key={item.href}
                              onClick={() => handleSubmenuClick(label, item.href)}
                              className="flex justify-between items-center px-4 py-2 cursor-pointer text-white bg-[#8b6728] rounded-md"
                            >
                              <span>{item.label}</span>
                              {isActiveSubmenu && (
                                <Image
                                  src="/icon/arrow.svg"
                                  alt="Active submenu arrow"
                                  width={20}
                                  height={20}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Menu Icon */}
          <div className="absolute bottom-[5%] md:top-1/2 right-[10%] md:-translate-y-1/2">
            <Image
              src="/icon/menu-icon.svg"
              alt=""
              width={250}
              height={250}
              className="rotate-icon"
            />
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Close Button */}
        {menuOpen && (
          <div
            className="fixed top-[6%] md:top-1/2 right-[6%] md:right-[80px] -translate-y-1/2 z-[1002] cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/icon/close.svg" alt="Close" width={50} height={50} />
          </div>
        )}
      </header>



      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 block md:hidden">
        <div className="flex items-center justify-around bg-[#96722C] text-white rounded-full px-4 py-3 shadow-lg w-[90vw] max-w-md">
          <a href="mailto:info@example.com" className="flex items-center text-xs gap-1">
            <Image src="/icon/email-us.svg" alt="" width={20} height={20} className="text-lg" />
            EMAIL US
          </a>
          <div className="w-px h-6 bg-white/40 mx-2" />
          <a href="tel:+911234567890" className="flex items-center text-xs gap-1">
            <Image src="/icon/call-us.svg" alt="" width={20} height={20} className="text-lg" />

            CALL US
          </a>
          <div className="w-px h-6 bg-white/40 mx-2" />
          <a href="#enquire" className="flex items-center text-xs gap-1">
            <Image src="/icon/enquire.svg" alt="" width={20} height={20} className="text-lg" />

            ENQUIRE
          </a>
        </div>
      </div>
    </>
  );
}



