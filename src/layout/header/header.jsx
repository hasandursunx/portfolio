import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { socialMediaLinks } from "../../utils/consts";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { WiMoonAltWaningCrescent1 } from "react-icons/wi";
import { useThemeStore } from "../../store/useThemeStore";




export default function Header() {

    const theme = useThemeStore(state => state.theme)
    const handleThemeSwitch = useThemeStore((state) => state.toggleTheme)

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add("dark");
            console.log('ekledi')
        } else {
            document.documentElement.classList.remove("dark");
            console.log('sildi')
        }
    }, [theme])


    return (
        <div id="aboutme" className="flex flex-col lg:flex-row">
            <div className="order-2 lg:order-1">
                <h1
                    className="
                    font-bebas
                    text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl  
                    ml-4 -mt-6 mb-1 lg:my-4 2xl:my-5
                    dark:text-gray-100
                    ">HASAN DURSUN</h1>
            </div>
            <div className="lg:order-2 flex-1 flex gap-1 lg:gap-3  justify-end">
                <a href={socialMediaLinks.github} target="_blank"><FaSquareGithub size="full" className="size-5 lg:size-7 hover:scale-110 transition-all mt-2 text-gray-900 dark:text-gray-100" /></a>
                <a href={socialMediaLinks.linkedin} target="_blank"><FaLinkedin size="full" className="size-5 lg:size-7 hover:scale-110 transition-all mt-2 text-gray-900 dark:text-gray-100" /></a>
                <a href={socialMediaLinks.instagram} target="_blank"><FaSquareInstagram size="full" className="size-5 lg:size-7  hover:scale-110 transition-all mt-2 text-gray-900 dark:text-gray-100" /></a>
                <a href={socialMediaLinks.github} target="_blank"><IoLogoYoutube size="full" className="size-5 lg:size-7 hover:scale-110 transition-all mt-2 text-gray-900 dark:text-gray-100" /></a>
                <div
                    onClick={handleThemeSwitch}
                    className="bg-gray-900 ml-2 lg:ml-0  h-9 lg:h-11 px-1 flex items-center cursor-pointer rounded-br-md rounded-bl-md hover:bg-gray-700 dark:bg-gray-100 dark:hover:bg-gray-300 transition-colors duration-300">
                    {
                        theme === 'light'
                            ? <WiMoonAltWaningCrescent1 size="full" className="text-gray-200 dark:text-gray-800 size-4 lg:size-7 " />
                            : <MdOutlineLightMode size="full" className="text-gray-200 dark:text-gray-800 size-4 lg:size-7 " />
                    }
                </div>
            </div>
        </div>
    )
}