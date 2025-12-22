import React, { useState } from 'react';
import { Quote, ChevronDown, ChevronUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sanatan Iyer",
    role: "Ex Podcast Head and Webmaster",
    text: "AIChE is a family where we learn and grow together. It has helped me build skills such as communication, teamwork, and technical knowledge. Being part of the Podcast and Webmaster domains gave me great opportunities to network and improve my communication skills. Some of the most memorable moments were the Chem-E-Car night slips, the ChemE Jeopardy we practiced and participated in, which was really fun and sharpened our minds, as well as the events we took part in and organized, which made the journey even more special."
  },
  {
    id: 5,
    name: "Aarya Sinha",
    role: "Ex Chairperson",
    text: "I will wear this honor with pride through every aspect of my life, where I was able to contribute my heart, mind, and soul to the AIChE - VIT Student Chapter, which gave me a pedestal to stand on in the form of people, opportunities, and lessons. Reflecting on it, the beauty lies in the legacy of AIChE, which is evergreen and urges everyone on this path to bring out their best in front of the world."
  },
  {
    id: 7,
    name: "Smriti K",
    role: "Ex Vice Chairperson",
    text: "Two years, countless trials, and memories that will last a lifetime. My journey at AIChE-VIT has been nothing short of transformative. From brainstorming sessions that stretched into the night to moments of quiet triumph when everything finally fell into place, this chapter has been both my challenge and my home. To the next generations, may you continue to build not just wings and events, but also trust, memories, and bonds that last far beyond your tenure."
  },
  {
    id: 8,
    name: "Harshavardhan",
    role: "Ex Senior Core Committee",
    text: "Two years ago, I joined ChemE Cube thinking it would just be another technical project. Spoiler alert: it turned out to be a full-blown adventure. From endless design discussions to ambitious experiments. In the middle of all the chaos, I surprised myself. I learned to open up, let go of fear, and actually express my thoughts. More importantly, through this journey I met an incredible bunch of people who became more than teammates; they became friends, and honestly, a second family."
  },
  {
    id: 3,
    name: "Kanishk Kumar",
    role: "Ex ESC Liaison",
    text: "Two years, countless trials, bombs and just enough drama to rival a soap opera. Being part of the ChemE Cube team at AIChE-VIT has been nothing short of an education, sometimes in engineering, and sometimes in diplomacy. From heated “debates” over the correct reaction to dramatic last minute redesigns that questioned both science and sanity, the journey has been as chaotic as it has been rewarding. The cube itself became more than just a box, it was a battlefield of egos, ideas, and occasionally broken screws. Yet, somehow, out of disagreements came direction, and out of late night arguments came prototypes that actually worked."
  },

  {
    id: 6,
    name: "Rishab Lanka",
    role: "Ex Senior Core Comittee",
    text: "I vividly remember my introduction to AIChE by my seniors. Ever since then it’s been a nonstop adventure. Traversing through competitions, events and deadlines, I found myself embracing this team and wanted to scale new heights together. The late night shenanigans in the lab, pre-event jitters or the seeing models work on principles you’ve only theorized about, this chapter has given me a space to express myself, understand and grow into a better version of myself, leaving only the fondest of memories behind."
  },

  {
    id: 9,
    name: "Jefin Mathew",
    role: "Ex K12 & Outreach Head",
    text: "As Shardul Sharma once said, “You work hard, you party harder.” I joined the chapter simply to make everyone laugh and disappear when the actual work arrived, but fate had other plans. Professionalism was the standard. The creative freedom this platform offers, and the fruits it bears, are unmatched. From my first big stage to leading my very own team, this chapter has shaped a significant part of my career. What I will cherish the most, however, is my corner table in G26A."
  } , 
  {
    id: 4,
    name: "Shardul Sharma",
    role: "Ex Events Head",
    text: "I initially joined this chapter to strengthen my CV, but it became a space that honed my people skills and channelled my competitive spirit productively. The journey was far richer than I anticipated. From staying up all night with teammates to prepare for the Student Regional Conference, sharing laughter and stress in equal measure, to stepping into an executive role and learning to navigate crises without seniors to guide us. Each challenge brought our group closer, and it was these connections, forged through late-night brainstorming, that made my time with AIChE truly special."
  },
  {
    id: 2,
    name: "Gautham",
    role: "Ex Senior Core Committee",
    text: "During my tenure at AIChE VIT-Vellore, I transitioned from an active junior member to a key senior core representative. My contributions spanned the Editorial and Management domains, where I honed my communication and organizational skills. This experience culminated in my role as an organizer for Chemathon, the chapter's flagship event. This role provided invaluable opportunities to lead complex projects, collaborate with diverse teams, and drive the success of a high-profile event, significantly contributing to my professional development and leadership abilities."
  },
];

const CHAR_LIMIT = 180;
// Your theme color constant
const THEME_RED = '#91191a';

// --- Component ---
const TestimonialWall: React.FC = () => {
  // State to track which testimonial ID is currently expanded
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    // Main container background is transparent to show the page's #91191A bg
    <section className="bg-transparent py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Using light text for contrast against dark red page bg */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-tight">
            Insider Perspectives
          </h2>
          <div className="mt-4 h-1 w-24 bg-white/30 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Stories of growth, resilience, and family from within the AIChE-VIT community.
          </p>
        </div>

        {/* The Standard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => {
             const isLongText = item.text.length > CHAR_LIMIT;
             const isExpanded = expandedId === item.id;

             // Determine text to display based on expansion state
             const displayedText = isExpanded || !isLongText
               ? item.text 
               : `${item.text.substring(0, CHAR_LIMIT).trim()}...`;

            return (
              <div 
                key={item.id} 
                // Cards are white for crisp contrast against the red page background
                className="bg-white/40 backdrop-blur-3xl rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col relative group"
              >
                {/* Lucide Quote Icon */}
                <div className="mb-6" style={{ color: THEME_RED }}>
                  <Quote size={40} strokeWidth={1.5} className="opacity-80 group-hover:opacity-1" />
                </div>

                {/* Testimonial Text Content */}
                <div className="flex-grow mb-6">
                   <p className={`text-gray-700 leading-relaxed ${isExpanded ? 'animate-in fade-in duration-300' : ''}`}>
                    "{displayedText}"
                  </p>
                  
                  {/* Expand/Collapse Button placed immediately after text */}
                  {isLongText && (
                    <button 
                      onClick={() => toggleExpand(item.id)}
                      className="mt-3 flex items-center gap-1 text-sm font-semibold hover:underline focus:outline-none transition-colors"
                      style={{ color: THEME_RED }}
                    >
                      {isExpanded ? (
                        <>Read Less <ChevronUp size={16} /></>
                      ) : (
                        <>Read More <ChevronDown size={16} /></>
                      )}
                    </button>
                  )}
                </div>

                {/* Author Footer */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                  {/* Avatar Circle using theme red */}
                  <div 
                    className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md"
                    style={{ backgroundColor: THEME_RED }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p 
                      className="text-xs font-semibold uppercase tracking-wider opacity-80" 
                      style={{ color: THEME_RED }}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialWall;