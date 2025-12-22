import { useEffect } from "react";
import EventHeader from "../components/EventHeader_temp";
import Footer from "../components/footer";
import GravitasEventGallery from "../components/eventsPage";

function Food() {
    useEffect(() => {
        document.title = 'Events | AIChE-VIT';
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-[#8e1a1a] text-black overflow-x-hidden selection:bg-black selection:text-[#c94141]">
        
                <EventHeader 
                    hours="" 
                    schedule="Our Flagship Event" 
                    title="Chemathon 6.0" 
                    bgHover='hover:bg-black hover:text-[#c94141]' 
                />
                    <GravitasEventGallery />
                <Footer />
        </div>

    );
}

export default Food;