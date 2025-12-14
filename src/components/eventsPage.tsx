import { motion, Variants } from 'framer-motion';

// 1. Define the shape of your event object
interface EventItem {
  id: string;
  title: string;
  description: string;
  color: string;
  dotColor: string;
  gradient: string;
}

// Data with specific color themes
const events: EventItem[] = [
  {
    id: 'bbc',
    title: 'Build Bid Curate',
    description: 'Mystery met Mastery. Teams clashed in high voltage auctions, then raced the clock to craft brilliance from chaos.',
    color: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    gradient: 'from-emerald-500/20 to-emerald-900/5',
  },
  {
    id: 'ae',
    title: 'Alchemy Empire',
    description: 'Ambition meets Strategy. Teams forged daring contracts and raced to craft innovations that could redefine industries.',
    color: 'text-amber-400',
    dotColor: 'bg-amber-400',
    gradient: 'from-amber-500/20 to-amber-900/5',
  },
  {
    id: 'otr',
    title: 'On The Rocks',
    description: 'Creativity and precision wove together, each experiment a delicate dance of discovery and crystal craftsmanship.',
    color: 'text-cyan-400',
    dotColor: 'bg-cyan-400',
    gradient: 'from-cyan-500/20 to-cyan-900/5',
  },
  {
    id: 'astro',
    title: 'Astroworld',
    description: 'Blending the mysteries of the cosmos with the thrill of hands-on exploration and decoding Morse codes.',
    color: 'text-rose-400',
    dotColor: 'bg-rose-500',
    gradient: 'from-rose-500/20 to-rose-900/5',
  },  
  {
    id: 'yantra',
    title: 'The Elemental Fourfold Forge',
    description: 'The Elemental Fourfold Forge was a two-day group hackathon organized by AIChE-VIT, in collaboration with VITSpartans. The event featured two structured rounds. In the first round, teams identified a real-world problem and presented the reason behind their selection.',
    color: 'text-rose-400',
    dotColor: 'bg-rose-500',
    gradient: 'from-rose-500/20 to-rose-900/5',
  },
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  },
};

// 2. Define props interface for the component
interface BentoCardProps {
  event: EventItem;
  index: number;
}

// --- Single Card Component ---
// 3. Apply the type annotation here
const BentoCard = ({ event, index }: BentoCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#111] border border-white/5 p-8 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50"
    >
      {/* 1. Dynamic Hover Gradient Background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} 
      />

      {/* 2. Top Row: Index & Status Dot */}
      <div className="relative z-10 flex w-full items-start justify-between mb-6">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">
          {(index + 1).toString().padStart(2, '0')} / EVENT
        </span>
        
        {/* Glowing Dot */}
        <span className="relative flex h-3 w-3">
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-0 group-hover:opacity-75 ${event.dotColor}`}></span>
          <span className={`relative inline-flex h-3 w-3 rounded-full ${event.dotColor}`}></span>
        </span>
      </div>

      {/* 3. Content Body */}
      <div className="relative z-10">
        <h3 className="mb-3 text-3xl font-bold leading-none tracking-tight text-white group-hover:translate-x-1 transition-transform duration-300">
          {event.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-200 transition-colors duration-300 line-clamp-4">
          {event.description}
        </p>
      </div>

      {/* 4. Bottom Action Line */}
      <div className="relative z-10 mt-8 flex items-center gap-2 overflow-hidden">
        <div className={`h-[1px] w-full bg-white/10 group-hover:bg-white/30 transition-colors`} />
        <span className={`translate-y-10 font-mono text-xs uppercase ${event.color} transition-transform duration-300 group-hover:translate-y-0`}>
          View
        </span>
      </div>
    </motion.div>
  );
};

// --- Main Gallery ---
const GravitasEventsGallery = () => {
  return (
    <section className="min-h-screen w-full px-6 py-24 selection:bg-black selection:text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                [ Gallery ]
              </p>
              <h2 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.9]">
                Highlights
              </h2>
            </div>
            <p className="md:max-w-xs text-gray-600 text-sm leading-relaxed pb-2">
              A collection of technical prowess and creative engineering from our recent flagship hackathons.
            </p>
          </motion.div>
        </div>

        {/* The Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {events.map((event, i) => (
            <BentoCard key={event.id} event={event} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default GravitasEventsGallery;