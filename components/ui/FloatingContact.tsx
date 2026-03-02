"use client";

import { motion } from "framer-motion";

export function FloatingContact() {
  return (
    <motion.a
      href="mailto:ahmedgabal994@gmail.com?subject=Let%27s%20build%20something%20intelligent&body=Hi%20Ahmed%2C%0A%0A"
      className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-accent-purple hover:to-accent-cyan md:inline-flex"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
    >
      Start a Conversation
    </motion.a>
  );
}

