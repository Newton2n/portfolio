"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADER_CONFIG = {
  DURATION: 1200, // shorter duration
  LOGO_TEXT: "Newton Dev",
  SUBTITLE_TEXT: "Designing user experience...",
};

const LoadingEffect = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADER_CONFIG.DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 sm:p-8 bg-black text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo / Main Text */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {LOADER_CONFIG.LOGO_TEXT}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-lg mt-2 tracking-widest uppercase font-medium text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            {LOADER_CONFIG.SUBTITLE_TEXT}
          </motion.p>

          {/* Progress Bar */}
          <div className="mt-6 w-full sm:w-3/4 h-1.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#F6EFD2] origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: LOADER_CONFIG.DURATION / 1000,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingEffect;
