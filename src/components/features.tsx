import image3 from '../assets/black.jpeg'
import image2 from '../assets/black.jpeg'
import image from '../assets/black.jpeg'
import image4 from '../assets/black.jpeg'


const Features = () => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };
  return (
    <div>
        <div className="lg:text-8xl text-6xl lg:w-1/2 tracking-normal heading-text">Featuring...</div>
        <div className="md:grid grid-cols-2 flex flex-col md:gap-12 gap-10 md:mt-16 md:mb-8 mb-6 mt-8">
            <div onClick={() => handleClick("#ameya")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
ChairPerson - Ameya Shukla
                </div>
            </div>
            <div onClick={() => handleClick("#anany")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image2} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
Vice Chairperson - Ananya Lakshmi
                </div>
            </div>
            <div onClick={() => handleClick("#csm-community/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image3} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
Seceratry - Shyla Gupta
                </div>
            </div>
                        <div onClick={() => handleClick("#samayak")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
Co-Seceretary, Management Head - Samayak Nitesh Chajjed
                </div>
            </div>
                        <div onClick={() => handleClick("#csm-community---izakaya/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
ChemECar, Technical Head - Kailash V
                </div>
            </div>
                        <div onClick={() => handleClick("#csm-community---izakaya/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
ChemECube, R&D Head - Sharma AK
                </div>
            </div>
                        <div onClick={() => handleClick("#csm-community---izakaya/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
K12 & Outreadch Head - Aadya Saxena
                </div>
            </div>
                        <div onClick={() => handleClick("#csm-community---izakaya/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
Events Head - Imthiyaz Ahmed
                </div>
            </div>
                        <div onClick={() => handleClick("#csm-community---izakaya/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
Editorial Head - Lakshmi S
                </div>
            </div>
                        <div onClick={() => handleClick("#csm-community---izakaya/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
Global Communications Head - Kaavyashree S
                </div>
            </div>
                        <div onClick={() => handleClick("#csm-community---izakaya/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
Podcast and Webmaster Head - Abhilash A
                </div>
            </div>
                        <div onClick={() => handleClick("#csm-community---izakaya/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
Finanace Head - Arpit Wibhute
                </div>
            </div>
            <div onClick={() => handleClick("#csm-community---izakaya/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
Design Head - Abhishek Nair
                </div>
            </div>
            <div onClick={() => handleClick("#csm-community---izakaya/")} className='flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
ESC Liasion - Kathakali Mishra
                </div>
            </div>

        </div>
    </div>
  )
}

export default Features