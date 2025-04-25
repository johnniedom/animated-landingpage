"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import MainButton from "./utils/MainButton";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const [showIsButton, setShowIsButton] = useState(false);
  const isHome = props.name === "Homepage" ? true : false;

  const changeNavBg = () => {
    console.log("scroll", window.scrollY, navBg);
    window.scrollY >= 40 ? setNavBg(true) : setNavBg(false);
    window.scrollY >= 700 ? setShowIsButton(true) : setShowIsButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const frosted = ` bg-[linear-gradient(to_bottom,hsl(0deg_0%_0%)_0%,transparent_30%)] before:rounded-2xl before:bg-[#ffffff19] before:content-[''] before:h-[100%] before:top-0 before:z-[-1] before:backdrop-blur-[14px] before:mask-[linear-gradient(to_bottom,black_90%,transparent)] before:inset-0 before:absolute before:pointer-events-none`;

  const Spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="md:sticky border-none md:inset-0 md:mx-auto shadow-none max-h-[80px] not-visited: z-20 mt-[5rem] flex justify-center items-center">
      {/* DESKTOP */}
      <motion.div
        className={`hidden lg:block border-none mt-4 shadow-none fixed rounded-2xl p-4 max-w-[1400px] ${
          isHome && navBg ? `${frosted} w-[80%] ` : "bg-transparent w-full "
        }`}
        layout={true}
      >
        <motion.div
          className={`flex justify-between items-center ${
            isHome && navBg ? `my-[4px] ` : ""
          }`}
          layout="position"
        >
          <Link href="/">
            <img
              src="/assets/fundbrave-logo.png"
              className="w-[180px]"
              alt="logo"
            />
          </Link>
          <motion.div className="flex gap-[20px]  text-[16px] items-center select-none"
              layout="position"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={Spring}
          >
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
          </motion.div>
          {showIsButton && (
            <motion.div
              className="flex items-center gap-[20px] select-none"
              layout="position"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={Spring}
            >
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfy2FCFFlju0w6INMdYw4Cb9wbNE0OCkMroHsYJnjYw2bMnNw/viewform?pli=1"
              >
                <MainButton
                  text="Partner With Us"
                  width="w-[180px]"
                  className="bg-[#450CF01A] h-12 text-white outline-none border-0"
                />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* MOBILE */}
      <div
        className={` block lg:hidden fixed top-0 w-full z-[999] bg-transparent py-4 animate-in fade-in zoom-in before:bg-[#ffffff19] before:content-[''] before:h-[100%] before:top-0 before:z-[-1]  before:backdrop-blur-[12px] before:mask-[linear-gradient(to_bottom,black_0%_50%,transparent_50%_100%)] before:inset-0 before:absolute before:pointer-events-none  ${
          menu ? " bg-white text-black py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img
              src="/assets/fundbrave-logo.png"
              className="w-[100px]"
              alt="logo"
            />
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
                <Link
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfy2FCFFlju0w6INMdYw4Cb9wbNE0OCkMroHsYJnjYw2bMnNw/viewform?pli=1"
                >
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
