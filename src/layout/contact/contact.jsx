import { BiSolidContact } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";




export default function Contact() {
    return (
        <div id="contact" className="bg-white shadow-lg w-full rounded-lg px-10 py-5 overflow-hidden ">
            <h2 className='mb-6 font-bold font-roboto  text-4xl group  flex items-center tracking-tighter'>

                <BiSolidContact size={33} className='mr-2 group-hover:animate-wiggle ' />
                Contact Me
            </h2>

            <div className=" block lg:flex">
                <div className="flex flex-col lg:justify-center space-y-10 pl-10">
                    <div className="flex items-center text-xl font-bold">
                        <CiLocationOn size={30} className="mr-2 text-gray-600" />
                        <span className="font-thin text-gray-600">ISTANBUL / TURKIYE</span>
                    </div>
                    <div className="flex items-center text-xl font-bold">
                        <CiMail size={30} className="mr-2 text-gray-600" />
                        <span className="font-thin text-gray-600">hasandursunx@gmail.com</span>
                    </div>
                    <div className="flex items-center text-xl font-bold">
                        <PiWhatsappLogoThin size={30} className="mr-2 text-gray-600" />
                        <span className="font-thin text-gray-600">+90 500 000 00 00</span>
                    </div>
                </div>
                <div className="flex flex-col flex-1  items-center justify-center  ">
                    <h6 className=" text-gray-600 mt-20 mb-10 lg:mt-0 text-xl font-bold">SEND MESSAGE</h6>
                    <form className=" flex flex-col gap-5 w-full lg:w-[400px] ">
                        <label >
                            <div className=" mb-1 text-xl font-mulish text-gray-600">Full Name : </div>
                            <input type="text" className=" font-thin text-xl w-full h-10 pl-2 text-gray-600  outline-none border" />
                        </label>
                        <label >
                            <div className="mb-1 w-full text-xl font-mulish text-gray-600">Email: </div>
                            <input type="text" className=" font-thin text-xl w-full h-10 pl-2 text-gray-600  outline-none border" />
                        </label>
                        <label >
                            <div className="mb-1 text-xl font-mulish text-gray-600">Message : </div>
                            <textarea rows="4" cols="50" className=" font-thin text-xl w-full p-2 text-gray-600  outline-none border" />
                        </label>
                        <div className="flex  justify-center">
                            <button className="w-1/2 bg-gray-300 hover:bg-gray-400 transition-all duration-300 p-1.5 rounded-full">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}