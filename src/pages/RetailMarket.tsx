import { useEffect } from "react";
import Event from "../components/Eventheader"
import FoodBestSection from "../components/banner";
import Footer from "../components/footer";
import rose from "../assets/2a2acabb846f52811a8a44ae9e1a2f66-removebg-preview.png"
import roseReverse from "../assets/2a2acabb846f52811a8a44ae9e1a2f66-removebg-preview reverse.png"
import retail from '../assets/black.jpeg';
import RetailSelection from "../components/achievements";



function Retail() {
    useEffect(() => {
        document.title = 'Insider'; // Change the title for About page
      }, []);
    return (
        <div className='flex flex-col w-full bg-[#84201c] px-8 py-8 lg:px-14 lg:py-14'>
            <Event hours=" " schedule=" " title="The Insider" image={retail} bgHover='hover:bg-[rgb(200,60,60)]'/>
            <RetailSelection />
            <FoodBestSection image1={rose} image2={roseReverse} title="The Best of AIChE" subtitle="Showcasing the finest achievements" />
            <Footer />
        </div>
        
    );
}

export default Retail;
