"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NavBar from "../../components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
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
    <div className="relative min-h-screen overflow-hidden font-sans">
      <NavBar/>
      <motion.div className="absolute inset-0 z-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-blue-900 opacity-70" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 blur-3xl opacity-50"  
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-20%", "20%", "-20%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-100 via-blue-500 to-purple-600 blur-3xl opacity-50"  
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["20%", "-20%", "20%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      </motion.div>
       
    </div>
  );
}
