import { useEffect } from "react";
import EventHeader from "../components/EventHeader_temp"; // Use the new component above
import FoodSelection from "../components/foodSelection";
import Footer from "../components/footer";
import food from '../assets/black.jpeg';
import GravitasEventGallery from "../components/eventsPage";

function Food() {
    useEffect(() => {
        document.title = 'Events | AIChE-VIT';
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-[#c94141] text-black overflow-x-hidden selection:bg-black selection:text-[#c94141]">
            
            {/* 1. GRAIN TEXTURE OVERLAY (The 'Printed' Kick) */}
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.07] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* 2. MAIN CONTENT CONTAINER */}
            {/* lg:pr-32 adds safety padding for your Right Sidebar */}
            <div className="relative z-10 flex flex-col w-full px-6 py-8 lg:px-14 lg:py-14 lg:pr-32 gap-24">
                
                {/* Header */}
                <EventHeader 
                    hours="Chemathon 6.0" 
                    schedule="Sat - Mon: 11:00AM - 8:00PM" 
                    title="Our Flagship Event" 
                    image={food} 
                    bgHover='hover:bg-black hover:text-[#c94141]' 
                />

                {/* Content Sections - Spaced out for drama */}
                <div className="w-full">
                    <FoodSelection />
                </div>
                <div className="w-full">
                    <GravitasEventGallery />
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Food;