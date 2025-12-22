import { motion, Variants } from 'framer-motion';

interface EventHeaderProps {
  hours: string;
  schedule: string;
  title: string;
  // keeping the prop for compatibility, though using glass effects here
  bgHover?: string; 
}

const Events = ({ schedule, title }: EventHeaderProps) => {

  const textReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    show: { 
      y: "0%", 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } 
    }
  };

  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden selection:bg-white selection:text-black font-sans">
      
      <div className="flex flex-col md:flex-row min-h-screen w-full items-center">
        
        {/* LEFT COLUMN: Title Section (Order-1) */}
        <div className="w-full md:w-3/5 flex flex-col justify-center px-6 md:px-16 z-10 order-1 pt-20 md:pt-0">
          
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              className="h-[1px] bg-white/50" 
            />
            <div className="overflow-hidden">
              <motion.span 
                variants={textReveal} 
                initial="hidden"
                whileInView="show"
                className="block text-[10px] font-mono uppercase tracking-[0.4em] text-white/70"
              >
                {schedule}
              </motion.span>
            </div>
          </div>

          <div className="relative">
            {/* Title: Chemathon 6.0 - High visibility, no cutoff */}
            <h1 className="text-[14vw] md:text-[7vw] font-black leading-[0.85] tracking-tighter uppercase">
              {title.split(' ').map((word, i) => (
                <span key={i} className="block overflow-hidden py-1">
                  <motion.span 
                    className="block" 
                    variants={textReveal} 
                    initial="hidden" 
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
        </div>

        {/* RIGHT COLUMN: The Glassmorphic Card (Order-2) */}
        <div className="w-full md:w-2/5 flex items-center justify-center p-6 md:p-12 order-2">
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             // Glassmorphic styling: semi-transparent white with heavy blur
             className="w-full max-w-sm bg-white/10 border border-white/20 rounded-[2rem] p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Glossy Reflection Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

            <div className="flex justify-between items-start mb-12 relative z-10">
               <div className="space-y-1">
                 <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest">Aiche-Vit</p>
                 <p className="text-[11px] font-bold text-white tracking-wide uppercase">Official Flagship</p>
               </div>
               <div className="text-right space-y-1">
                 <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest"></p>
                 <p className="text-[11px] font-bold text-white tracking-wide uppercase">6.0</p>
               </div>
            </div>
            
            <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light mb-10 relative z-10">
            "<strong className="text-white font-bold underline decoration-white/30 underline-offset-4">Chemathon</strong>— where chemical engineering is experienced, not explained.”
            </p>

            <div className="flex justify-between items-center pt-8 border-t border-white/10 relative z-10">
               <div className="flex flex-col">
                 <span className="text-[15px] font-mono text-white/60 uppercase tracking-widest">Explore More</span>
                 <span className="text-[10px] text-white font-bold tracking-tighter uppercase"></span>
               </div>
               <motion.div 
                 animate={{ opacity: [0.4, 1, 0.4] }}
                 transition={{ repeat: Infinity, duration: 2.5 }}
                 className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)]" 
               />
            </div>

            {/* Subtle Corner Detail */}
            <div className="absolute bottom-4 right-6 opacity-20">
                <div className="w-4 h-4 border-b border-r border-white" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Events;