import MagnetLine from "./MagnetLines"

const Banner = ({image1, image2, title, subtitle} : {image1: string, image2: string, title: string, subtitle: string}) => {
  return (
    <div>
        <MagnetLine />
        <div className="flex flex-col md:flex-row md:justify-around items-center lg:gap-0 gap-12 lg:mt-12 lg:mb-12 mt-8 mb-8">

                <img className='text-center lg:w-48 md:w-28 w-16' src={image1} alt="" />
            <div className="lg:w-[42%] flex flex-col lg:gap-8 gap-4 items-center justify-center">
                <p className="w-1/2 lg:text-8xl text-7xl text-center heading-text">{title}</p>
                <p className="options-text">{subtitle}</p>
            </div>
                <img className='text-center lg:w-48 md:w-28 w-16' src={image2} alt="" />
                
           
        </div>
        <MagnetLine />
    </div>
  )
}

export default Banner
