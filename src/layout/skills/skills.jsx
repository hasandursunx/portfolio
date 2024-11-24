import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { LiaSass } from "react-icons/lia";
import { MdOutlineCss } from "react-icons/md";
import { MdOutlineHtml } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { MdOutlineJavascript } from "react-icons/md";

import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFigmaLogoThin } from "react-icons/pi";

import { SiTypescript } from "react-icons/si";





export default function skills() {
    return (
        <div id="skills" className="w-full  rounded-lg  flex items-center justify-center space-x-2 sm:space-x-8 lg:space-x-12 overflow-hidden">
            <MdOutlineHtml className="  animate-show  animate-duration-[0.4s] hover:scale-110 transition-transform duration-200" size={80} />
            <MdOutlineCss height={40} className="animate-show  animate-duration-[0.5s] hover:scale-110 transition-transform duration-200" size={80} />
            <LiaSass height={40} className="animate-show  animate-duration-[0.6s] hover:scale-110 transition-transform duration-200" size={65} />
            <FaBootstrap height={40} className="animate-show  animate-duration-[0.7s] hover:scale-110 transition-transform duration-200" size={55} />
            <RiTailwindCssFill height={40} className="animate-show  animate-duration-[0.8s] hover:scale-110 transition-transform duration-200" size={60} />
            <PiFigmaLogoThin height={40} className="animate-show  animate-duration-[0.9s] hover:scale-110 transition-transform duration-200" size={50} />
            <IoLogoJavascript height={40} className="animate-show  animate-duration-[1s] hover:scale-110 transition-transform duration-200" size={50} />
            <BiLogoTypescript height={40} className="animate-show  animate-duration-[1.1s] hover:scale-110 transition-transform duration-200" size={57} />
            <FaReact height={40} className="animate-show  animate-duration-[1.2s] hover:scale-110 transition-transform duration-200" size={45} />
        </div>
    )
} 