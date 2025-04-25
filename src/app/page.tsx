"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NavBar from "../../components/Navbar";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Example from "../../components/simple_with_full_order_details";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden font-sans h-full">
      <NavBar name="Homepage" />
      <Header />
    </div>
  );
}
