import DashedLine from './dashedLine';
import map from '../assets/black.jpeg';


const AboutEvents = () => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };
    return (
        <div className="md:mt-16 mt-12 flex flex-col justify-start items-center">
            <div className="lg:text-8xl text-6xl lg:w-1/2 text-center tracking-normal mb-8 heading-text">
                Events Coming Up
            </div>
            {DashedLine(100, 0)}
            {DashedLine(100, 0)}
            <div className="flex flex-col md:flex-row w-full md:justify-between md:m-12 m-4 md:text-[18px] text-[15px] tracking-normal options-text">
                <div className="flex flex-col md:w-1/3 justify-start items-center gap-6 md:border-none border-b-2 border-dashed border-black p-4 ">
                    <div className="text-[15px]">09/21</div>
                    <div className='text-center'>Smooth Operator</div>
                </div>
                <div className="flex flex-col md:w-1/3  justify-start items-center gap-6 md:border-none border-b-2 border-dashed border-black p-4">
                    <div className="text-[15px]">02/07</div>
                    <div className='text-center'>Operation Antidote: The Final Formula</div>
                </div>
                <div className="flex flex-col md:w-1/3  justify-start items-center gap-6 p-4">
                    <div className="text-[15px]">12/11</div>
                    <div className='text-center'>Hazard Protocol</div>
                </div>
            </div>
            {DashedLine(0, 100)}
            {DashedLine(0, 100)}
            <button onClick={() => handleClick("https://gravitas.vit.ac.in")} className='relative border-2 border-black lg:bottom-13 md:bottom-12 bottom-9 bg-white lg:w-1/6 w-1/5 md:p-4 p-2 md:text-xl text-center hover:bg-black hover:text-white duration-250 ease-out cursor-pointer options-text'>See all</button>
            <div className='md:grid grid-cols-2 flex flex-col w-full h-full md:gap-10 gap-4 md:mt-16 mt-6 heading-text'>
                <div onClick={() => handleClick("/community")} className='border-2 border-black border-dashed flex justify-center cursor-pointer'>
                    <div className='md:w-2/3 md:h-full h-90 flex items-center justify-center text-center md:text-6xl text-5xl md:p-4 p-2'>
                    Meet The Team
                    </div>
                </div>
                <div onClick={() => handleClick("/insider")} className=' border-2 border-black border-dashed cursor-pointer'>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src={map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutEvents