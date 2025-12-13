import { motion } from "framer-motion";

const ZigzagLine = () => {
  return (
    <div className="w-full md:h-12 h-6 overflow-hidden">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 400 100" // Adjusted height to scale properly
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none" // Makes sure it stretches to fit the parent
      >
        <motion.g
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity,
          }}
        >
          {/* First Zigzag Path */}
          <path
            d="M 0 100 L 10 0 L 20 100 L 30 0 L 40 100 
              L 50 0 L 60 100 L 70 0 L 80 100 L 90 0 
              L 100 100 L 110 0 L 120 100 L 130 0 L 140 100 
              L 150 0 L 160 100 L 170 0 L 180 100 L 190 0 
              L 200 100 L 210 0 L 220 100 L 230 0 L 240 100 
              L 250 0 L 260 100 L 270 0 L 280 100 L 290 0 
              L 300 100 L 310 0 L 320 100 L 330 0 L 340 100 
              L 350 0 L 360 100 L 370 0 L 380 100 L 390 0 
              L 400 100"
            stroke="black"
            strokeWidth="0.3"
            fill="transparent"
            strokeLinejoin="miter"
            strokeLinecap="butt"
          />
          {/* Duplicate Path for Seamless Looping */}
          <path
            d="M 400 100 L 410 0 L 420 100 L 430 0 L 440 100 
              L 450 0 L 460 100 L 470 0 L 480 100 L 490 0 
              L 500 100 L 510 0 L 520 100 L 530 0 L 540 100 
              L 550 0 L 560 100 L 570 0 L 580 100 L 590 0 
              L 600 100 L 610 0 L 620 100 L 630 0 L 640 100 
              L 650 0 L 660 100 L 670 0 L 680 100 L 690 0 
              L 700 100 L 710 0 L 720 100 L 730 0 L 740 100 
              L 750 0 L 760 100 L 770 0 L 780 100 L 790 0 
              L 800 100"
            stroke="black"
            strokeWidth="0.3"
            fill="transparent"
            strokeLinejoin="miter"
            strokeLinecap="butt"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default ZigzagLine;
