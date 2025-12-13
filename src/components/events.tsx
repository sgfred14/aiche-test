import DiagonalLinesComponent from "./diagonalLine"
import MagnetLines from './MagnetLines';

const MarketEvents = () => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };
  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col justify-between md:gap-4 lg:mt-32 mt-16">
        <div className="md:w-1/4 flex flex-col justify-between items-center md:order-1 order-2 ">
            <div className="w-full h-auto md:block hidden">
                <MagnetLines />
            </div>
            <div className="md:w-1/2 md:h-1/2 flex flex-col justify-center items-center md:my-15 my-8 gap-6 options-text md:text-[16px] text-[15px]">
                <div className="text-[13px]">09/21 (past)</div>
                <div className='text-center'>Small Business Retail Pop Up Weekend!</div>
            </div>
            <div className="w-full h-auto">
                <MagnetLines />
            </div>
            <div className="md:w-1/2 md:h-1/2 flex flex-col justify-center items-center md:my-15 my-8 gap-6 options-text md:text-[16px] text-[15px]">
                <div className="text-[13px]">12/11 (past)</div>
                <div className='text-center'>Hack City 12/11</div>
            </div>
            <div className="w-full h-auto">
                <DiagonalLinesComponent />
            </div>
        </div>
        <div className="md:w-1/3 flex flex-col justify-between items-center md:order-2 order-1">
            <div className="w-full h-auto md:block hidden">
                <DiagonalLinesComponent />
            </div>
            <div className="flex flex-col justify-center items-center md:my-15 my-8 heading-text">
                <div className='text-center lg:text-9xl md:text-7xl text-6xl'>Market Events</div>
            </div>
            <DiagonalLinesComponent />
        </div>
        <div className="md:w-1/4 flex flex-col justify-between items-center order-3">
            <div className="w-full h-auto md:block hidden">
                <DiagonalLinesComponent />
            </div>
            <div className="md:w-1/2 md:h-1/2 flex flex-col justify-center items-center md:my-15 my-8 gap-6 options-text md:text-[16px] text-[15px]">
                <div className="text-[13px]">02/07 (past)</div>
                <div className='text-center'>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</div>
            </div>
            <div className="w-full h-auto">
                <DiagonalLinesComponent />
            </div>
            <div className="md:w-1/2 md:h-1/2 flex flex-col justify-center items-center md:my-15 my-8 gap-6 options-text md:text-[16px] text-[15px]">
                <div className="text-[13px]">07/27 (past)</div>
                <div className='text-center'>Taiwanese Wave</div>
            </div>
            <div className="w-full h-auto md:block hidden">
                <DiagonalLinesComponent />
            </div>
        </div>
      </div>
      <div onClick={() => handleClick("https://canalstreet.market/community/event/")} className="w-full border-2 border-black md:text-[16px] text-[15px] py-4 md:mt-8 mt-6 text-center hover:bg-black hover:text-white duration-250 ease-out cursor-pointer options-text">
        <button>View all</button>
      </div>
    </div>
  )
}

export default MarketEvents