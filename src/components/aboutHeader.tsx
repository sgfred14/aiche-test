import logo from '../assets/header.png'
import image from '../assets/black.webp';
import sidebar from '../assets/header.png';

import {motion} from 'framer-motion';

const Header = () => {
    const handleClick = (url: string) => {
        window.location.href = url;
    };
    return (
        <div>
            <div className='flex justify-between items-center fixed md:w-fit w-full lg:pr-28 pr-16'>
                <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
                transition={{ duration: 1, ease: "easeOut" }}
                onClick={() => handleClick("/")}
                className='relative -top-8 w-30 cursor-pointer' src={logo} />
                <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => handleClick("/menu")}
                className='w-16 hover:bg-neutral-300 rounded-[5px] duration-150 ease-out cursor-pointer md:hidden block' src={sidebar} />
            </div>
            <div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
            transition={{ duration: 0.5, delay: 1 }}
            className='flex items-center lg:text-7xl text-4xl mt-48 lg:w-auto md:text-left text-justify tracking-normal heading-text'>
                <div className='h-full min-h-[210px] w-1 bg-white mr-6' />
                <div>
                    LEAD <br/> INNOVATE <br/> ACHIEVE <br/>
                </div>

            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
            transition={{ duration: 0.5, delay: 1 }}
            className='text-lg mt-8 mb-16 lg:w-3/5 text-justify md:text-left'>
            <div className=' mt-10 text-lg font-light text-justify md:w-3/4 w-full'>
                    Established in 2014, AIChE VIT stands as the powerhouse of chemical innovation at VIT Vellore, built by visionaries, for visionaries. More than a student chapter, we are a future-forging force, where technical brilliance, professional edge, and social impact converge to create chemical engineers that the world can't ignore.
                </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
            transition={{ duration: 0.5, delay: 1 }} >
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.3 }} // `once: true` ensures it only triggers once
            transition={{ duration: 1, ease: "easeOut"}}
            className='w-full md:h-auto h-230 md:mt-32 md:mb-32 mt-16 mb-16'
            >
                <img className='w-full h-full object-cover' src={image} alt="" />

            </motion.div>
        </div>
        </div>
    )
}

export default Header