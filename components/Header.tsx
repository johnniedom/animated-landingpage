"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimateBack from "./AnimateBack";

export default function Header() {
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else if (currentHour >= 18 && currentHour < 22) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  return (
    <section className="relative isolate w-full min-h-screen h-full py-[3rem]  flex flex-col items-center gap-[4rem] justify-center transparent text-white overflow-hidden">
      <AnimateBack />
      <motion.div className=" z-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">{greeting}, User!</h1>
      </motion.div>
      <div className=" z-1 flex items-center justify-center">
        <Image
          src="/assets/fundbrave-logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-[180px]"
        />
      </div>
      <div className=" z-1 flex items-center justify-center">
        <p className="text-lg">Welcome to FundBrave</p>
      </div>
    </section>
  );
}
