import head from '../assets/image-removebg-preview.png'
import headMirror from '../assets/image-removebg-preview mirror.png'
import { motion, Variants } from 'framer-motion'
import ZigzagLine from './zigzagLine'
import DashedLine from './dashedLine'

const MarketRadio = () => {
    const iconVariants = (start: number, end: number): Variants => ({
        initial: { y: start },
        animate: {
            y: [end, start],
            transition: {
            duration: 1, // Use dynamic duration
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            },
        },
    })
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };
  return (
    <div className='lg:mt-32 mt-8'>
        <ZigzagLine />
        <div className="flex flex-col md:flex-row md:justify-around items-center lg:gap-0 gap-12 lg:mt-12 lg:mb-12 mt-8 mb-8">
            <motion.div
            variants={iconVariants(-20, 20)}
            initial="initial"
            animate="animate" className='text-center lg:w-48 md:w-28 w-16'>
                <img src={head} alt="" />
            </motion.div>
            <div className="lg:w-[42%] flex flex-col lg:gap-8 gap-4 items-center justify-center">
                <p className="w-1/2 lg:text-8xl text-7xl text-center heading-text">Market Radio</p>
                <p className="options-text">Podcasted from the market</p>
            </div>
            <motion.div
            variants={iconVariants(20, -20)}
            initial="initial"
            animate="animate" className="text-center lg:w-48 md:w-28 w-16">
                <img src={headMirror} alt="" />
            </motion.div>
        </div>
        <div className="flex flex-col justify-start items-center">
            {DashedLine(100, 0)}
            {DashedLine(100, 0)}
            <div className="flex flex-col md:flex-row w-full md:justify-between gap-4 md:m-12 m-4 md:text-[18px] text-[15px] tracking-normal options-text">
                <div onClick={() => handleClick("https://soundcloud.com/asiannotasian")} className="flex flex-col md:w-1/3 justify-start items-center gap-4 md:border-none border-b-2 border-dashed border-black p-4 cursor-pointer">
                    <div className='text-[15px]'>04/01</div>
                    <div className='text-center'>S5E3 - Are We Too Old For This Shit?</div>
                </div>
                <div onClick={() => handleClick("https://givengopodcast.podbean.com/e/nwsl-season-preview-ashley-sanchez-sam-coffey-savannah-demelo-soundbytes-bay-fc-toxicity-allegations-fa-wsl-roundup/")} className="flex flex-col md:w-1/3 justify-start items-center gap-4 md:border-none border-b-2 border-dashed border-black p-4 cursor-pointer">
                    <div className='text-[15px]'>03/18</div>
                    <div className='text-center'>NWSL Season Preview + Ashley Sanchez, Sam Coffey, Savannah DeMelo Soundbytes + Sam in Sweden Segment +Bay FC Toxicity Allegations + FA WSL Roundup</div>
                </div>
                <div onClick={() => handleClick("https://soundcloud.com/activistnyc/episode-13-sarinya-srisakul")} className="flex flex-col md:w-1/3 justify-start items-center gap-4 p-4 cursor-pointer">
                    <div className='text-[15px]'>05/22</div>
                    <div className='text-center'>Episode 13: Sarinya Srisakul</div>
                </div>
            </div>
          </div>
        
    </div>
  )
}

export default MarketRadio