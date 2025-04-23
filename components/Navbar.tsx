"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import MainButton from "./utils/MainButton"
import Link from "next/link";
import Image from "next/image";

function NavBar(props?: any) {
  const links = [
    {
      route: "#home",
      name: "Home",
      badgeCount: 0,
    },
    {
      route: "#features",
      name: "Features",
      badgeCount: 0,
    },
    {
      route: "#impact",
      name: "Why Choose Us",
      badgeCount: 0,
    },
    {
      route: "#faq",
      name: "FAQ",
      badgeCount: 0,
    },
    {
      route: "#footer",
      name: "Contact Us",
      badgeCount: 0,
    },
  ];
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const [navBg, setNavBg] = useState(false);
  const isHome = props.name === "Homepage" ? true : false;

  const changeNavBg = () => {
    window.scrollY >= 20 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div className="md:sticky md:top-0 md:shadow-none max-h-[70px] z-20 mt-[5rem] md:mt-0">
      {/* DESKTOP */}
      <div
        className={`hidden lg:block rounded-2xl mt-4 fixed w-full max-w-[1400px] ${
          props.name == "browse" ? "border-2 border-[#E3E1E3] bg-[#CD82FF]" : ""
        } animate-in fade-in zoom-in ${
          isHome && navBg
            ? "bg-gradient-to-tr from-[#450CF0] to-[#CD82FF] top-0 scroll-smooth  ease-in-out transition-all duration-300"
            : "bg-transparent"
        } p-4`}
      >
        <div className="flex justify-between mx-4 items-center">
          <Link href="/">
            <img src="/assets/fundbrave-logo.png" className="w-[180px]" alt="logo" />
          </Link>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            {links.map((item, index) => (
              <div key={index} className="flex gap-2">
                <a href={item.route}>
                  <p
                    className={`hover:text-white cursor-pointer flex items-center gap-2 text-gray`}
                  >
                    {item.name}
                  </p>
                </a>
                {item.badgeCount ? (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#450CF0] to-[#CD82FF] flex justify-center items-center  font-semibold text-white">
                    {item.badgeCount}
                  </div>
                ) : (
                  <div />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[20px] select-none">
            <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfy2FCFFlju0w6INMdYw4Cb9wbNE0OCkMroHsYJnjYw2bMnNw/viewform?pli=1">
              <MainButton
                text="Partner With Us"
                width="full"
                className="bg-[#450CF01A] h-16 text-white shadow-lg outline-none border-0"
              />
            </Link>

          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-transparent py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-white text-black py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/assets/fundbrave-logo.png" className="w-[180px]" alt="logo" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/assets/menu.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none h-screen animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <a href={item.route}>
                  <p
                    className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                  >
                    {item.name}
                  </p>
                  </a>
                  {item.badgeCount ? (
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#450CF0] to-[#CD82FF] flex justify-center items-center  font-semibold text-white">
                      {item.badgeCount}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-[20px] select-none">
                <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfy2FCFFlju0w6INMdYw4Cb9wbNE0OCkMroHsYJnjYw2bMnNw/viewform?pli=1">
                  <MainButton
                    text="Join the Waitlist"
                    width="full"
                    className="bg-gradient-to-tr w-full from-[#450CF0] h-14 to-[#CD82FF] text-white border-[#EDEEF0] hover:bg-white"
                  />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
