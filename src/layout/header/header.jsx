import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";



export default function Header() {

    return (
        <div id="aboutme" className="flex">
            <div>
                <h1 className="text-7xl font-bebas my-5">HASAN DURSUN</h1>
            </div>
            <div className=" flex-1 flex gap-3  justify-end">
                <a href="#"><FaSquareGithub size={30} className="hover:scale-110 transition-all mt-2 text-gray-900 " /></a>
                <a href="#"><FaLinkedin size={30} className="hover:scale-110 transition-all mt-2 text-gray-900 " /></a>
                <a href="#"><FaSquareInstagram size={30} className="hover:scale-110 transition-all mt-2 text-gray-900 " /></a>
                <a href="#"><IoLogoYoutube size={30} className="hover:scale-110 transition-all mt-2 text-gray-900 " /></a>
                <div className="bg-gray-900 h-11 px-1 flex items-center cursor-pointer rounded-br-md rounded-bl-md hover:bg-gray-800">
                    <FaMoon className="text-gray-200" size={25} />
                </div>
            </div>
        </div>
    )
}