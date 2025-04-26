"use client";

import React, { useEffect, useState } from "react";
import { Import, X } from "lucide-react";
import MainButton from "./utils/MainButton";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FocusLock from "react-focus-lock";

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

  const [navBg, setNavBg] = useState(false);
  const [showIsButton, setShowIsButton] = useState(false);
  const isHome = props.name === "Homepage" ? true : false;
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);

    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const changeNavBg = () => {
    console.log("scroll", window.scrollY, navBg);
    window.scrollY >= 40 ? setNavBg(true) : setNavBg(false);
    window.scrollY >= 600 ? setShowIsButton(true) : setShowIsButton(false);
  };

  const frosted = ` bg-[linear-gradient(to_bottom,hsl(0deg_0%_0%)_0%,transparent_30%)] before:rounded-2xl before:bg-[#ffffff19] before:content-[''] before:h-[100%] before:top-0 before:z-[-1] before:backdrop-blur-[14px] before:mask-[linear-gradient(to_bottom,black_90%,transparent)] before:inset-0 before:absolute before:pointer-events-none`;
  const frostedMobile = `bg-[linear-gradient(to_bottom,hsl(0deg_0%_0%)_0%,transparent_30%)] before:rounded-2xl before:bg-[#ffffff19] before:content-[''] before:h-[100%] before:top-0 before:z-[-1] before:backdrop-blur-[14px] before:mask-[linear-gradient(to_bottom,black_90%,transparent)] before:inset-0 before:absolute before:pointer-events-none`;

  const backgroundMobile = `bg-[linear-gradient(to_bottom,hsl(0deg_0%_0%)_0%,transparent_60%)] before:bg-[#ffffff19] before:content-[''] before:h-[100%] before:top-0 before:z-[-1] before:backdrop-blur-[90px] before:mask-[linear-gradient(to_bottom,black_90%,transparent)] before:inset-0 before:absolute before:pointer-events-none`;

  const Spring = {
    type: "spring",
    stiffness: 700,
    damping: 80,
  };

  React.useEffect(() => {
    if (menu) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menu]);

  return (
    <div className="md:sticky border-none md:inset-0  md:mx-auto shadow-none max-h-[80px] not-visited: z-20 ] flex justify-center items-center">
      {/* DESKTOP */}
      <motion.div
        className={`hidden lg:block border-none shadow-none fixed rounded-2xl p-4 max-w-[1400px] ${
          isHome && navBg
            ? `${frosted} w-[80%] mt-36`
            : "bg-transparent w-full  mt-24"
        }`}
        layout={true}
      >
        <motion.div
          className={`${
            isHome && navBg ? `bg-white` : "bg-transparent"
          } flex justify-between items-center rounded-2xl`}
          layout="position"
        ></motion.div>
        <motion.div
          className={`flex justify-between items-center ${
            isHome && navBg ? `my-[4px] ` : ""
          }`}
          layout="position"
        >
          <Link href="/">
            <img
              src="/assets/fundbrave-logo.png"
              className="w-[140px]"
              alt="logo"
            />
          </Link>
          <AnimatePresence>
            <motion.div
              className="flex gap-[20px] text-[16px] items-center select-none"
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
          </AnimatePresence>

          <AnimatePresence>
            {showIsButton && (
              <motion.div
                className="flex items-center gap-[20px]  select-none"
                layout="position"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                  ease: "easeInOut",
                }}
              >
                <Link
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfy2FCFFlju0w6INMdYw4Cb9wbNE0OCkMroHsYJnjYw2bMnNw/viewform?pli=1"
                >
                  <MainButton
                    text="Partner With Us"
                    width="w-[100px]"
                    className="bg-[#450CF01A] h-[3.2rem]  text-white shadow-lg outline-none border-0"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* MOBILE */}
      <motion.div
        className={` block lg:hidden fixed top-0 z-[999] bg-transparent py-4 ${
          // Base classes
          menu
            ? `text-white py-2 w-full ${backgroundMobile} mt-0`
            : `bg-transparent ${
                isHome && navBg
                  ? `${frostedMobile} w-[80%] mt-4 rounded-2xl`
                  : "w-full mt-0"
              }`
        }`}
        layout={true}
      >
        <motion.div
          className="flex justify-between mx-[10px] "
          layout="position"
        >
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img
              src="/assets/fundbrave-logo.png"
              className="w-[150px]"
              alt="logo"
            />
          </div>

          <div className="flex items-center gap-[40px]">
            {menu ? (
              <button
                ref={closeButtonRef} // Assign ref to the button
                onClick={toggleMenu}
                className="cursor-pointer text-black bg-transparent border-none p-0"
                aria-label="Close menu"
              >
                <X className="animate-in fade-in zoom-in duration-300" />
              </button>
            ) : (
              <img
                src="/assets/menu.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </motion.div>
        {menu ? (
          <FocusLock>
            <motion.div className="select-none h-screen animate-in slide-in-from-right duration-500">
              <motion.div
                className="flex flex-col gap-8 mt-8 mx-4 items-center justify-center"
                layout="position"
              >
                {links.map((item, index) => (
                  <div key={index} className="flex gap-2 ">
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

                <div className="flex flex-col gap-[20px] select-none w-full">
                  <Link
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfy2FCFFlju0w6INMdYw4Cb9wbNE0OCkMroHsYJnjYw2bMnNw/viewform?pli=1"
                  >
                    <MainButton
                      text="Join the Waitlist"
                      width="full"
                      className="bg-gradient-to-tr w-full self-start from-[#450CF0] h-14 to-[#CD82FF] text-white border-none hover:bg-white"
                    />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </FocusLock>
        ) : (
          ""
        )}
      </motion.div>
    </div>
  );
}

export default NavBar;
