import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none font-['Playfair_Display',serif]">
          
          {/* Layer 1: Darkest Red */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="absolute inset-0 bg-[#4a0a0a] z-30"
          />
          
          {/* Layer 2: Brand Red */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute inset-0 bg-[#8e1a1a] z-40"
          />

          {/* Layer 3: Light Red */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#a32222] z-50"
          />

          {/* Content */}
          <motion.div
            className="relative z-[60] flex flex-col items-center justify-center p-10 pl-8"
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="text-6xl md:text-8xl font-bold text-[#eaddcf] tracking-tight leading-none"
              >
                AIChE
              </motion.h1>
            </div>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "40px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-[1px] bg-[#eaddcf] my-2"
            />

            <div className="overflow-hidden w-full flex justify-center">
              <motion.h2
                initial={{ y: "-110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
                className="text-3xl md:text-5xl italic text-[#d4b483]"
              >
                VIT
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-6 text-[#eaddcf]/80 text-xs md:text-sm tracking-[0.3em] uppercase font-sans"
            >
              Est. 2014
            </motion.p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;