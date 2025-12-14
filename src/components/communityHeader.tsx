import { motion } from 'framer-motion';
import sidebar from '../assets/sidebar menu.png';
import ZigzagLine from './zigzagLine';
//import DiagonalLinesComponent from './diagonalLine';    

interface CommunityHeaderProps {
    details: string;
    title: string;
}

const CommunityHeader = ({ details, title }: CommunityHeaderProps) => {
    const handleClick = (url: string) => {
        window.location.href = url;
    };
  return (
    <div>
        <div className="w-full h-auto mt-10 md:block hidden">
            <ZigzagLine />
        </div>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='flex justify-between items-center fixed w-full lg:pr-28 pr-16 md:hidden'>
            <div onClick={() => handleClick("/menu")} className='w-16 hover:bg-[rgb(204,165,76)] rounded-[5px] duration-150 ease-out cursor-pointer'>
                <img src={sidebar} alt="Logo" />
            </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='flex justify-self-end text-right lg:w-1/5 w-1/2 options-text mt-26 md:text-[15px] text-[13px]'>
            <p>{details}</p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        className='flex flex-col w-full md:flex-row justify-start items-center md:gap-12 gap-4 mt-4 p-0'>
            <div className='w-full heading-text'>
                <div className='lg:text-[200px] text-6xl'>{title}</div>
            </div>

        </motion.div>


    </div>
  )
}

export default CommunityHeader