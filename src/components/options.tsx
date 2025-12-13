import image from '../assets/black.jpeg';
import image2 from '../assets/black.jpeg';
import image3 from '../assets/black.jpeg';
import { motion } from 'framer-motion';
const Options = () => {
  return (
    <div className="flex flex-col mb-16">
      <div className="lg:text-8xl text-6xl lg:w-1/2 tracking-normal mb-16 heading-text">The Place Where you Belong...</div>
      <div className='flex flex-col md:flex-row w-full justify-between gap-5'>
        <div className='w-full md:w-1/3 flex flex-col justify-start items-center mb-8 md:mb-0'>
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          viewport={{ once: true, amount: 0.3 }} // `once: true` ensures it only triggers once
          transition={{ duration: 1, ease: "easeOut"}}
          className='w-full md:h-120 h-130'><img className='w-full h-full object-cover' src={image} alt="" /></motion.div>
          <div className="lg:text-2xl text-6xl tracking-normal mt-8 heading-text">Chem-E-Car</div>
          <div className='w-full text-justify mt-8 md:text-[18px] text-[15px] tracking-normal options-text'>
             In the crucible of innovation, where chemistry breathes life into motion, Chem-E-Car is forged. It's a journey that immerses you in the art and science of chemical engineering, bringing to life a car that runs and stops through the magic of chemistry.
          </div>
        </div>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true, amount: 0.3 }} // `once: true` ensures it only triggers once
        transition={{ duration: 1, ease: "easeOut"}}
        className='w-full md:w-1/3 flex flex-col justify-start items-center mb-8 md:mb-0'>
          <div className='w-full md:h-120 h-130'><img className='w-full h-full object-cover' src={image2} alt="" /></div>
          <div className="lg:text-2xl text-6xl tracking-normal mt-8 heading-text">Chem-E-Cube</div>
          <div className='w-full text-justify mt-8 md:text-[18px] text-[15px] tracking-normal options-text'>
             A place where ideation meets practicality. Here, we get an opportunity to investigate the major problems in industries and find innovative and novel solutions for them by scaling them down to a 1ft<sup>3</sup> volumed cube
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true, amount: 0.3 }} // `once: true` ensures it only triggers once
        transition={{ duration: 1, ease: "easeOut" }}
        className='w-full md:w-1/3 flex flex-col justify-start items-center'>
          <div className='w-full md:h-120 h-130'><img className='w-full h-full object-cover' src={image3} alt="" /></div>
          <div className="lg:text-2xl text-6xl tracking-normal mt-8 heading-text">K-12 Outreach</div>
          <div className='w-full text-justify mt-8 md:text-[18px] text-[15px] tracking-normal options-text'>
             This wing is the definition of “Learning with Fun”. Here, the students become the teachers who simplify complex science topics and help bring interest of students from KG to 12th grade into science and engineering.
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Options;
