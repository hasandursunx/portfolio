import { LiaBullseyeSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";

export default function Navbar() {
    return (
        <nav className="bg-black rounded-lg space-y-3 py-5 px-10  ">
            <div className="text-white">
                <a href="#aboutme" className="flex items-center ">
                    <div className="font-bebas text-[27px] tracking-widest">About Me</div>
                </a>
            </div>
            <div className="text-white">
                <a href="#skills" className="flex items-center  ">
                    <div className="font-bebas text-[27px] tracking-widest  ">Skills</div>
                </a>
            </div>
            <div className="text-white">
                <a href="#projects" className="flex items-center ">
                    <div className="font-bebas text-[27px] tracking-widest">Projects</div>
                </a>
            </div>
            <div className="text-white">
                <a href="#experiences" className="flex items-center ">
                    <div className="font-bebas text-[27px] tracking-widest">Experiences</div>
                </a>
            </div>
            <div className="text-white">
                <a href="#contact" className="flex items-center ">
                    <div className="font-bebas text-[27px] tracking-widest">Contact</div>
                </a>
            </div>
        </nav>
    )
}