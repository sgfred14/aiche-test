import MagnetLine from "./MagnetLines";
import { motion, Variants } from 'framer-motion'; // 1. Import Variants

interface BannerProps {
  image1: string;
  image2: string;
  title: string;
  subtitle: string;
}

const Banner = ({ image1, image2, title, subtitle }: BannerProps) => {

  // 2. Add ': Variants' type here
  const floatAnimation: Variants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" // Now valid because of Variants type
      }
    }
  };

  // 3. Add ': Variants' type here
  const textReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    show: { 
      y: "0%", 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="w-full">
        {/* Top Line */}
        <MagnetLine />
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-24 py-12 md:py-20 overflow-hidden">

            {/* --- Left Image (Floats with delay) --- */}
            <motion.div
                variants={floatAnimation} // Now compatible
                animate="animate"
                className="order-2 md:order-1"
            >
                <img 
                    className='w-24 md:w-32 lg:w-48 object-contain drop-shadow-lg' 
                    src={image1} 
                    alt="Decorative left" 
                />
            </motion.div>

            {/* --- Center Text --- */}
            <div className="flex flex-col items-center justify-center text-center z-10 order-1 md:order-2">
                
                {/* Title Wrapper for slide-up effect */}
                <div className="overflow-hidden mb-2">
                    <motion.p 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={textReveal} // Now compatible
                        className="text-7xl md:text-8xl lg:text-9xl font-bold heading-text leading-[0.9]"
                    >
                        {title}
                    </motion.p>
                </div>

                {/* Subtitle Wrapper */}
                <div className="overflow-hidden">
                    <motion.p 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={textReveal} // Now compatible
                        className="options-text text-sm md:text-lg uppercase tracking-[0.2em] opacity-70"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </div>

            {/* --- Right Image (Floats with different timing) --- */}
            <motion.div
                variants={floatAnimation} // Now compatible
                animate="animate"
                // Note: transition prop here merges with/overrides the variant transition
                transition={{ delay: 1 }} 
                className="order-3"
            >
                <img 
                    className='w-24 md:w-32 lg:w-48 object-contain drop-shadow-lg' 
                    src={image2} 
                    alt="Decorative right" 
                />
            </motion.div>
            
        </div>
        
        {/* Bottom Line */}
        <MagnetLine />
    </div>
  )
}

export default Banner