"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(ratio);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1.5 bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
        style={{ scaleX: progress }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
      />
    </div>
  );
}

