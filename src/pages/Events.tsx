import { useEffect } from "react";
import EventHeader from "../components/EventHeader_temp";
import Footer from "../components/footer";
import GravitasEventGallery from "../components/eventsPage";

function Food() {
    useEffect(() => {
        document.title = 'Events | AIChE-VIT';
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-[#c94141] text-black overflow-x-hidden selection:bg-black selection:text-[#c94141]">
        
                <EventHeader 
                    hours="Chemathon 6.0" 
                    schedule="Sat - Mon: 11:00AM - 8:00PM" 
                    title="Our Flagship Event" 
                    bgHover='hover:bg-black hover:text-[#c94141]' 
                />
                    <GravitasEventGallery />
                <Footer />
        </div>

    );
}

export default Food;