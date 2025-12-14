import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, Variants } from 'framer-motion';
import sidebar from '../assets/sidebarmenu.png';
import logo from '../assets/header.png';

interface CommunityHeaderProps {
    details: string;
    title: string;
}

const boardHeader = ({ details, title }: CommunityHeaderProps) => {
    const handleClick = (url: string) => {
        window.location.href = url;
    };

    // --- Scroll Logic ---
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        // Hide if scrolling down and moved past 150px
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });

    // --- Navbar Variants ---
    const navVariants: Variants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
    };

    return (
        <div>
            <div className="w-full h-auto mt-10 md:block hidden">
            </div>

            {/* --- Fixed Navbar with Scroll Logic --- */}
            <motion.div
                variants={navVariants}
                initial="visible"
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                // Added 'top-0 z-50' to ensure it sticks to top and stays above content
                className='flex justify-between items-center fixed top-0 left-0 w-full lg:pr-28 pr-16 md:hidden z-50 pt-4 pl-4'
            >
                <div onClick={() => handleClick("/")} className='w-12 cursor-pointer hover:scale-105 transition-transform'>
                    <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
                </div>
                <div onClick={() => handleClick("/menu")} className='w-16 hover:bg-[rgb(204,165,76)] rounded-[5px] duration-150 ease-out cursor-pointer'>
                    <img src={sidebar} alt="Menu" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='flex justify-self-end text-right lg:w-1/5 w-1/2 options-text mt-26 md:text-[15px] text-[13px]'>
                <p>{details}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
                className='flex flex-col w-full md:flex-row justify-start items-center md:gap-12 gap-4 mt-4 p-0'>
                <div className='w-full heading-text'>
                    <div className='lg:text-[200px] text-6xl'>{title}</div>
                </div>
            </motion.div>
        </div>
    )
}

export default boardHeader