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
        <nav className="bg-black rounded-lg space-y-3 py-5 px-10 text-gray-300  ">
            <a href="#aboutme" className="flex items-center "
                onClick={gets}>
                <div className={`font-bebas text-[27px] tracking-widest ${link === 'aboutme' ? 'underline  text-white ' : ''}`}>About Me</div>
            </a>
            <a href="#skills" className="flex items-center  "
                onClick={gets}>
                <div className={`font-bebas text-[27px] tracking-widest ${link === 'skills' ? 'underline text-white' : ''}`}>Skills</div>
            </a>
            <a href="#projects" className="flex items-center "
                onClick={gets}>
                <div className={`font-bebas text-[27px] tracking-widest ${link === 'projects' ? 'underline text-white' : ''}`}>Projects</div>
            </a>
            <a href="#experiences" className="flex items-center "
                onClick={gets}>
                <div className={`font-bebas text-[27px] tracking-widest ${link === 'experiences' ? 'underline text-white' : ''}`}>Experiences</div>
            </a>
            <a href="#contact" className="flex items-center "
                onClick={gets}>
                <div className={`font-bebas text-[27px] tracking-widest ${link === 'contact' ? 'underline text-white' : ''}`}>Contact</div>
            </a>
        </nav>
    )
}