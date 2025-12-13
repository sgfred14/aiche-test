import { useEffect } from "react";
import Event from "../components/Eventheader"
import FoodSelection from "../components/foodSelection";
import Banner from "../components/banner";
import Footer from "../components/footer";
import tube from "../assets/tube.png"
import food from '../assets/black.jpeg'
import GravitasEventGallery from "../components/eventsPage";


function Food() {
    useEffect(() => {
        document.title = 'Events | AIChE-VIT'; // Change the title for About page
      }, []);
    return (
        <div className='flex flex-col w-full bg-[#c94141] px-8 py-8 lg:px-14 lg:py-14'>
            <Event hours="Chemathon 6.0" schedule="Sat - Mon: 11:00AM - 8:00PM" title="Our Flagship Event" image={food} bgHover='hover:bg-[rgb(75,140,186)]' />
            <FoodSelection />
            <Banner image1={tube} image2={tube} title="The Best of AIChE" subtitle="All under one roof!" />
            <GravitasEventGallery />
            <Footer />
        </div>
        
    );
}

export default Food;
