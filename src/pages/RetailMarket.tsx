import { useEffect } from "react";
import Event from "../components/EventHeader_temp"
import FoodBestSection from "../components/banner";
import Footer from "../components/footer";
import tube from "../assets/tube.png"
import retail from '../assets/black.jpeg';
import RetailSelection from "../components/achievements";



function Retail() {
    useEffect(() => {
        document.title = 'Insider'; // Change the title for About page
      }, []);
    return (
        <div className='flex flex-col w-full bg-[#91191a] px-8 py-8 lg:px-14 lg:py-14'>
            <Event hours=" " schedule=" " title="The Insider" image={retail} bgHover='hover:bg-[rgb(200,60,60)]'/>
            <RetailSelection />
            <FoodBestSection image1={tube} image2={tube} title="The Best of AIChE" subtitle="Showcasing the finest achievements" />
            <Footer />
        </div>
        
    );
}

export default Retail;
