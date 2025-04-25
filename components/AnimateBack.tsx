import React from "react";
import { motion } from "framer-motion";
import { radialGradient } from "framer-motion/client";

export default function AnimateBack() {
  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-blue-900 opacity-70" /> */}
      <motion.div
        className="absolute inset-0 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, #10B981 0%, #3B82F6 50%, #000000 100%)`,
        }}
        animate={{
          scale: [1, 1.2, 1.5, 1],
          opacity: [0.7, 0.8, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
