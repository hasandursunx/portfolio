import { LiaBullseyeSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [link, setLink] = useState('aboutme');
    useEffect(() => {
        console.log(link)
    }, [link])

    const gets = () => {
        setTimeout(() => {
            setLink(window.location.href.split('#', 2)[1])
        }, 100);

    }


    return (
        <nav className="
        flex  rounded-full lg:rounded-lg
        justify-center items-stretch gap-3 lg:items-start
        text-gray-300 bg-black
        flex-row lg:flex-col
        lg:space-x-0 
        text-[14px] sm:text-[16px] md:text-[22px] lg:text-[27px]
        sm:py-3 lg:py-5 py-2 lg:px-10
         
        ">
            <a href="#aboutme" className="flex items-center "
                onClick={gets}>
                <div className={`font-bebas  tracking-widest ${link === 'aboutme' ? 'underline  text-white ' : ''}`}>About Me</div>
            </a>
            <a href="#skills" className="flex items-center  "
                onClick={gets}>
                <div className={`font-bebas  tracking-widest ${link === 'skills' ? 'underline text-white' : ''}`}>Skills</div>
            </a>
            <a href="#projects" className="flex items-center "
                onClick={gets}>
                <div className={`font-bebas  tracking-widest ${link === 'projects' ? 'underline text-white' : ''}`}>Projects</div>
            </a>
            <a href="#experiences" className="flex items-center "
                onClick={gets}>
                <div className={`font-bebas  tracking-widest ${link === 'experiences' ? 'underline text-white' : ''}`}>Experiences</div>
            </a>
            <a href="#contact" className="flex items-center "
                onClick={gets}>
                <div className={`font-bebas  tracking-widest ${link === 'contact' ? 'underline text-white' : ''}`}>Contact</div>
            </a>
        </nav>
    )
}