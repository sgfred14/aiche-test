import DiagonalLinesComponent from "./diagonalLine"
import {GoMail} from "react-icons/go"
import { SlSocialLinkedin } from "react-icons/sl";
import { LiaInstagram } from "react-icons/lia";
import { LiaMedium } from "react-icons/lia";
const Footer = () => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };
    const mailTo = (email: string) => {
        window.location.href = `mailto:${email}`;
    }
  return (
    <div className="md:mt-16 mt-12">
        <DiagonalLinesComponent />
        <div className="md:grid md:grid-flow-col md:grid-cols-3 md:gap-14 gap-6 flex flex-col justify-center items-center md:mt-16 mt-12">  
            <div onClick={() => mailTo("aichevit@gmail.com")} className="border-2 border-dashed flex flex-col w-full items-center justify-center md:py-16 py-8 gap-2 cursor-pointer">
                <div>
                    <GoMail className="md:text-4xl text-2xl"/>
                </div>
                <div className="text-center md:text-xl text-[15px] md:w-full w-1/4 options-text">Email</div>
            </div>
            <div onClick={() => handleClick("https://www.linkedin.com/in/aiche-vit-student-chapter/")} className="border-2 border-dashed flex flex-col w-full items-center justify-center md:py-16 py-8 gap-2 cursor-pointer">
                <div>
                <SlSocialLinkedin className="md:text-4xl text-2xl"/>
                </div>
                <div className="text-center md:text-xl text-[15px] md:w-full w-1/4 options-text">Follow us on LinkedIn</div>
            </div>
            <div onClick={() => handleClick("https://www.instagram.com/aiche_vit/")} className="border-2 border-dashed flex flex-col w-full items-center justify-center md:py-16 py-8 gap-2 cursor-pointer">
                <div>
                <LiaInstagram className="md:text-4xl text-2xl"/>
                </div>
                <div className="text-center md:text-xl text-[15px] md:w-full w-1/4 options-text">Follow us on Instagram</div>
            </div>
            <div onClick={() => handleClick("https://medium.com/aiche-vit-student-chapter")} className="border-2 border-dashed flex flex-col w-full items-center justify-center md:py-16 py-8 gap-2 cursor-pointer">
                <div>
                    <LiaMedium className="md:text-4xl text-2xl"/>
                </div>
                <div className="text-center md:text-xl text-[15px] md:w-full w-1/4 options-text">Follow us on Medium</div>
            </div>  
        </div>
        <div className="flex md:flex-row md:flex-nowrap flex-wrap w-full justify-between md:mt-6 mt-4 options-text">
            <div className="md:order-1 order-3 md:w-full w-1/2 md:text-left text-right text-[15px]">
                Copyright AIChE-VIT 2025
            </div>
        </div>

    </div>
  )
}

export default Footer