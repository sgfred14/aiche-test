import React from 'react';

// Defining types for our data
interface EventData {
  title: string;
  description: string;
  accentColor: string; // Tailwind color class for the dot/glow
  id: string;
}

const events: EventData[] = [
  {
    id: 'bbc',
    title: 'Build Bid Curate',
    description:
      'Mystery met Mastery where every bid was a gamble and every box held a surprise. Teams clashed in high voltage auctions, then raced the clock to craft brilliance from chaos. The event concluded with finest teams rising to the top showcasing strategy innovation and teamwork at their peak.',
    accentColor: 'bg-emerald-400',
  },
  {
    id: 'ae',
    title: 'Alchemy Empire',
    description:
      'When Ambition meets Strategy. Alchemy Empire turned ideas into battlegrounds. Teams clashed in high stakes auctions, forged daring contracts and raced to craft innovations that could redefine industries. As the competition closed the empire acknowledged those whose insight and daring had built its legacy.',
    accentColor: 'bg-amber-400',
  },
  {
    id: 'otr',
    title: 'On The Rocks',
    description:
      'Celebrated the art of chemistry, where minds and hands converged to craft crystals of their own making. Creativity and precision wove together, each experiment a delicate dance of discovery. Every experiment became a symphony of skill and imagination leaving in each hand a crystal, a memento of their hard work.',
    accentColor: 'bg-cyan-400',
  },
  {
    id: 'astro',
    title: 'Astroworld',
    description:
      'Ignited young minds with the fire of discovery, blending the mysteries of the cosmos with the thrill of hands-on exploration. Participants decoded Morse codes, engaged in science-based problem-solving, and explored hands-on space experiments in groups. The event encouraged collaboration and curiosity.',
    accentColor: 'bg-rose-500',
  },
];

const EventCard: React.FC<{ event: EventData }> = ({ event }) => {
  return (
    <div className="group relative h-full">
      {/* Glow Effect behind the card */}
      <div
        className={`absolute -inset-0.5 rounded-2xl opacity-20 blur-xl transition duration-500 group-hover:opacity-60 ${event.accentColor}`}
      ></div>

      {/* Glassmorphic Container */}
      <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-gray-900/40 p-6 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-2 group-hover:border-white/20 group-hover:bg-gray-900/60 group-hover:shadow-2xl">
        
        {/* The Header Area */}
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-xl font-bold tracking-tight text-black/90 transition-colors group-hover:text-black">
            {event.title}
          </h3>
          
          {/* The "Dot" with a pulse effect */}
          <span className="relative flex h-3 w-3">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${event.accentColor}`}
            ></span>
            <span
              className={`relative inline-flex h-3 w-3 rounded-full ${event.accentColor}`}
            ></span>
          </span>
        </div>

        {/* Content */}
        <p className="flex-grow text-sm leading-relaxed text-gray-300/80">
          {event.description}
        </p>

        {/* Decorative bottom line */}
        <div className={`mt-6 h-0.5 w-12 rounded-full opacity-50 transition-all duration-300 group-hover:w-full group-hover:opacity-100 ${event.accentColor}`} />
      </div>
    </div>
  );
};

const GravitasEventsGallery: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-20 text-black selection:bg-purple-500/30">
      
      {/* Background Decor (Orbs) */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="bg-black bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Event Highlights
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GravitasEventsGallery;