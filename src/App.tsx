import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import About from './pages/About';
import Community from './pages/Community';
import Food from './pages/Events';
import Retail from './pages/RetailMarket';
import Menu from './pages/Menu';
import logo from './assets/logo.png';
import {motion} from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

const PANEL_ROUTES: Record<string, string> = {
  home: '/',
  one: '/events',
  two: '/insider',
  three: '/board',
};

const ROUTE_PANELS: Record<string, string> = {
  '/': 'home',
  '/events': 'one',
  '/insider': 'two',
  '/board': 'three',
};

function AppContent() {
  const location = useLocation(); {/* get current URL path */}
  const navigate = useNavigate(); {/* programmatically changes the URL path */}
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1024);
  const [activePanel, setActivePanel] = useState<string>('home');

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1024;
      setIsDesktop(isNowDesktop);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync active panel with route on mount or location change. Runs when from mobile to desktop
  useEffect(() => {
    const panel = ROUTE_PANELS[location.pathname]; {/* get the panel corresponding to the current URL path */}

    {/* check if isDesktop is true, if panel returns a usable value, and if the current activePanel is already the same */}
    if (isDesktop && panel && panel !== activePanel) {
      setActivePanel(panel);
    }
  }, [location.pathname, isDesktop, activePanel]); {/* dependencies; effect triggered when one or both of these values change */}

  const handlePanelClick = (id: string) => {
    setActivePanel(id);
    window.scrollTo(0, 0);
    if (isDesktop) {
      navigate(PANEL_ROUTES[id]); {/* changes the current URL path on desktop to corresponding panel */}
    }
  };

  if (!isDesktop) {
    return (
      <Routes>
        <Route path="/" element={<div className="box-border h-screen w-full m-0 p-0"><About /></div>} />
        <Route path="/events" element={<div className="box-border h-screen w-full m-0 p-0"><Food /></div>} />
        <Route path="/insider" element={<div className="box-border h-screen w-full m-0 p-0"><Retail /></div>} />
        <Route path="/board" element={<div className="box-border h-screen w-full m-0 p-0"><Community /></div>} />
        <Route path="/menu" element={<div className="box-border h-screen w-full m-0 p-0"><Menu /></div>} />
      </Routes>
    );
  }

  // Desktop view
  return (
    <div className="relative h-full w-full m-0 p-0 overflow-x-hidden selection:bg-black selection:text-white">
      <div className="lg:flex w-full h-full hidden">
        {/* Home Panel */}
        <div
          className={`relative transition-all duration-500 bg-[#d4b483] ${activePanel === 'home' ? 'w-[88%] h-screen z-10 ' : 'w-[4%] cursor-pointer'}`}
          onClick={() => handlePanelClick('home')}
        >
          {activePanel === 'home' ? (
            <div className="scrollable h-full">
              <About />
            </div>
          ) : (
            <div className="w-16 h-fit mt-16 px-0.5 flex justify-center">
              <img className="w-full" src={logo} alt="Logo" />
            </div>
          )}
        </div>

        {/* Food Panel */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{     // smooth drop
          opacity: { duration: 1, ease: "easeOut" },   // synced fade
        }}
          className={`relative transition-all duration-500 bg-[#c94141] ${activePanel === 'one' ? 'w-[88%] h-screen bg-[#5ea3ec] z-20' : 'w-[4%] cursor-pointer'}`}
          onClick={() => handlePanelClick('one')}
        >
          {activePanel === 'one' ? (
            <div className="scrollable h-full"><Food /></div>
          ) : (
            <div className="h-full relative text-black">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 tracking-wider options-text text-xl">Events</div>
            </div>
          )}
        </motion.div>

        {/* Retail Panel */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{     // smooth drop
          opacity: { duration: 1, ease: "easeOut", delay: 0.3 },   // synced fade
        }}
          className={`relative transition-all duration-500 bg-[#91191a] ${activePanel === 'two' ? 'w-[88%] h-screen bg-[#f64444] z-30' : 'w-[4%] cursor-pointer'}`}
          onClick={() => handlePanelClick('two')}
        >
          {activePanel === 'two' ? (
            <div className="scrollable h-full"><Retail /></div>
          ) : (
            <div className="h-full relative text-black">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 tracking-wider options-text text-xl">Insider</div>
            </div>
          )}
        </motion.div>

        {/* Community Panel */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{     // smooth drop
          opacity: { duration: 1, ease: "easeOut", delay: 0.6 },   // synced fade
        }}
          className={`relative transition-all duration-500 bg-[#7a1410] ${activePanel === 'three' ? 'w-[88%] h-screen bg-[#ffb400] z-40' : 'w-[4%] cursor-pointer'}`}
          onClick={() => handlePanelClick('three')}
        >
          {activePanel === 'three' ? (
            <div className="scrollable h-full"><Community /></div>
          ) : (
            <div className="h-full relative text-black">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 rotate-90 tracking-wider options-text text-xl">Board</div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
      <Analytics />
    </>
  );
}

export default App;
