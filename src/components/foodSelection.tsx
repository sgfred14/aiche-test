import React from 'react';
import { motion } from 'framer-motion';

// A mini-component for the interactive text highlights
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <motion.span 
    className="inline-block font-bold cursor-pointer relative z-10"
    whileHover={{ scale: 1.05, color: "#fff", textShadow: "0px 0px 8px rgba(255,255,255,0.5)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <span className="bg-white/20 px-1 rounded hover:bg-white/30 transition-colors duration-300">
      {children}
    </span>
  </motion.span>
);

const FoodSelection = () => {
  return (
    // Centered container, White text for your red background
    <div className="flex items-left justify-left text-black">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" w-full flex flex-col gap-8 text-lg md:text-xl font-semi-bold leading-relaxed text-justify md:text-left"
      >

        <p>
          The flagship event of <span className="font-bold">AIChE-VIT, Chem-A-Thon</span>, aims to inspire and challenge undergraduates from all across India. Students are persuaded to look beyond theory as they form practical solutions for real-world crises during this <Highlight>36-hour hackathon</Highlight>. Our event promotes cooperation, technical ingenuity, and meaningful dialogue among students, researchers, and industry leaders through faculty-led checkpoints, resource support, and an emphasis on innovation.
        </p>

        <p>
          Collaborating with VIT's School of Chemical Engineering (SCHEME), we hosted <span className="font-bold">Chem-A-Thon 6.0</span> from February 14–16, 2025. Contestants were grouped by their academic years and provided challenge statements related to Environmental Sustainability, Product Development, and Design & Simulation. Teams were led through several checkpoints and worked diligently while adhering to safety procedures to produce ideas that had an impact. Supported by sponsors and industry experts, the event integrated creativity, teamwork, and realistic problem-solving—conveying its mission to shape the next generation of chemical engineers.
        </p>

      </motion.div>
    </div>
  );
};

export default FoodSelection;