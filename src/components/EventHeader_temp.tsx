import { useState } from 'react';
import classNames from 'classnames';
import logo from '../assets/header.png';
import sidebar from '../assets/sidebarmenu.png';
import { motion, Variants, useScroll, useMotionValueEvent } from 'framer-motion';

interface EventHeaderProps {
  hours: string;
  schedule: string;
  title: string;
  bgHover: string;
}

const Events = ({ hours, schedule, title, bgHover }: EventHeaderProps) => {
  
  const handleClick = (url: string) => {
    window.location.href = url;
  };

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
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

  const navbarVariants: Variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-100%", opacity: 0 },
  };

  return (
    // Global container is now pure black without split backgrounds
    <div className="relative min-h-screen w-full text-black overflow-hidden selection:bg-white selection:text-black font-sans">
      
      {/* --- Floating Navbar --- */}
      <motion.nav
        variants={navbarVariants}
        initial="visible"
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className='fixed top-0 left-0 w-full px-6 py-4 z-50 flex justify-between items-center md:hidden border-b border-white/10 bg-black/80 backdrop-blur-md'
      >
        <div onClick={() => handleClick("/")} className='w-12 cursor-pointer'>
          <img src={logo} alt="Logo" className="w-full h-auto object-contain invert" />
        </div>
        <div 
          onClick={() => handleClick("/menu")} 
          className={classNames("w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition-all hover:bg-zinc-800", bgHover)}
        >
          <img src={sidebar} alt="Menu" className="w-6 h-6 invert" />
        </div>
      </motion.nav>

      {/* --- Main Content Split --- */}
      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full">
        
        {/* LEFT COLUMN: Typography */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 pt-24 md:pt-0 md:px-8 z-10 order-2 md:order-1 relative">
          
          {/* Metadata Badges */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-4 mb-8 border-l-2 border-white pl-6"
          >
            {[hours, schedule].map((item, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span 
                  variants={textReveal} 
                  className="block text-sm font-mono uppercase tracking-widest text-gray-900"
                >
                  {item}
                </motion.span>
              </div>
            ))}
          </motion.div>

          {/* Main Title */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.h1 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={textReveal} 
                className="text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-bold leading-[0.9] tracking-tighter uppercase break-words"
              >
                {title}
              </motion.h1>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Content Only (No background, No Sidebar Strip) */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 order-1 md:order-2">
          
          {/* Content Card */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="w-full max-w-md bg-zinc-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-[1px] bg-white"></div>
               <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Event Brief</span>
            </div>
            
            <p className="text-xl leading-relaxed text-zinc-300 mb-6">
              The flagship event of <strong className="text-white">AIChE-VIT</strong>, Chem-A-Thon, isn't just a competition, it's a crucible. We challenge undergraduates to shatter the glass ceiling of theory.
            </p>

            <div className="text-sm text-zinc-300 font-mono mt-8 flex justify-between items-end">
               <span>BY AICHE VIT</span>
               <span className="text-2xl text-zinc-800">•••</span>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

export default Events;