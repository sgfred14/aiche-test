import { useState } from 'react';
import classNames from 'classnames';
import logo from '../assets/header.png';
import sidebar from '../assets/sidebarmenu.png';
// 1. Updated Imports: Added useScroll, useMotionValueEvent
import { motion, Variants, useScroll, useMotionValueEvent } from 'framer-motion';

interface EventHeaderProps {
  hours: string;
  schedule: string;
  title: string;
  image: string;
  bgHover: string;
}

const Events = ({ hours, schedule, title, image, bgHover }: EventHeaderProps) => {
  
  const handleClick = (url: string) => {
    window.location.href = url;
  };

  // --- NEW: Scroll Logic ---
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // logic: if scrolling down (latest > previous) and past 150px, hide.
    // Otherwise show.
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const textReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    show: { 
      y: "0%", 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const imageReveal: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1.2, ease: "easeOut" } 
    }
  };

  // --- NEW: Navbar Variants ---
  const navbarVariants: Variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-100%", opacity: 0 },
  };

  return (
    <div className="relative min-h-screen w-full text-[#1a1a1a] overflow-hidden selection:bg-black selection:text-white">
      
      {/* --- Floating Navbar (Updated) --- */}
      <motion.nav
        variants={navbarVariants}
        initial="visible"
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className='fixed top-0 left-0 w-full px-6 py-4 z-50 flex justify-between items-center md:hidden border-b border-white/20'
      >
        <div onClick={() => handleClick("/")} className='w-12 cursor-pointer hover:scale-105 transition-transform'>
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>
        <div 
          onClick={() => handleClick("/menu")} 
          className={classNames("w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition-all hover:shadow-lg", bgHover)}
        >
          <img src={sidebar} alt="Menu" className="w-6 h-6" />
        </div>
      </motion.nav>

      {/* --- Main Content Grid --- */}
      <div className="container mx-auto px-6 pt-24 pb-12 md:pt-12 md:h-screen flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Left Side: Typography & Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center z-10 order-2 md:order-1">
          
          {/* Metadata Badges */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-4 mb-6 border-l-2 border-black pl-4"
          >
            {[hours, schedule].map((item, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span 
                  variants={textReveal} 
                  className="block text-sm font-mono uppercase tracking-widest text-gray-500"
                >
                  {item}
                </motion.span>
              </div>
            ))}
          </motion.div>

          {/* Main Title */}
          <div className="relative mb-8">
            <div className="overflow-hidden">
              <motion.h1 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={textReveal} 
                className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] tracking-tighter uppercase break-words"
              >
                {title}
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Right Side: Image Showcase */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative order-1 md:order-2">
          <motion.div
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             variants={imageReveal} 
             className="w-full h-full relative"
          >
            {/* Image Container with Hover Effect */}
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative group">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={image} 
                  alt={title} 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Decorative Floating Element */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block"
            >
              <p className="text-xs font-bold text-gray-400">EVENT ID</p>
              <p className="text-xl font-mono">01</p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Events;