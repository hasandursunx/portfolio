import { LiaBullseyeSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";

export default function Navbar() {
    return (
        <nav className="bg-black rounded-lg space-y-5 py-5 px-10">
            <div className="text-white">
                <a href="#" className="flex items-center ">
                    <div className="text-2xl ">About Me</div>
                </a>
            </div>
            <div className="text-white">
                <a href="#" className="flex items-center ">
                    <div className="text-2xl ">Skills</div>
                </a>
            </div>
            <div className="text-white">
                <a href="#" className="flex items-center ">
                    <div className="text-2xl ">Projects</div>
                </a>
            </div>
            <div className="text-white">
                <a href="#" className="flex items-center ">
                    <div className="text-2xl ">Contact</div>
                </a>
            </div>
        </nav>
    )
}