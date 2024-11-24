import Experience from './experience/experience'
import { MdWorkspacePremium } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";


export default function Experiences() {
    return (
        <div id='experiences' className="bg-white shadow-lg w-full rounded-lg px-7 lg:px-10 py-5 overflow-hidden ">
            <h2 className='mb-6 font-bold font-roboto  text-2xl lg:text-4xl group  flex items-center tracking-tighter'>

                <MdWorkspacePremium className='size-6 lg:size-9 mr-0 lg:mr-2 group-hover:animate-wiggle ' />
                Experiences
            </h2>
            <div className="flex flex-col gap-20 ml-0 lg:ml-20 relative">
                <div className='absolute top-3 left-[59px]  w-0 h-full border-r-2 border-dashed border-gray-300' />
                <div className='flex items-center'>
                    <div className='w-10 text-lg text-gray-500 font-roboto'>2024</div>
                    <div className='mx-4  min-w-2 min-h-2 rounded-full bg-gray-300'></div>
                    <div className='flex items-center  '>
                        <div className='w-20 lg:w-40 h-1 mt-0.5 border-t-2 border-dashed border-gray-300 mr-4'>
                        </div>
                        <div className='flex flex-col justify-items-start'>
                            <h3 className='text-sm lg:text-xl text-gray-500 font-roboto font-bold flex items-center '>
                                <div>Open To Work</div>
                                <FaRegCircleDot className='  text-red-600 hidden lg:inline animate-ping ml-4' />
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='w-10 text-lg text-gray-500 font-roboto'>2020</div>
                    <div className='mx-4  min-w-2 min-h-2 rounded-full bg-gray-300'></div>
                    <div className='flex items-center  '>
                        <div className='w-20 lg:w-40  h-1 mt-0.5 border-t-2 border-dashed border-gray-300 mr-4'>
                        </div>
                        <div >
                            <h3 className='text-sm lg:text-xl text-gray-500 font-roboto font-bold flex items-center '>
                                <div>.Net Developer Intern</div>
                                <TiTick size={25} className=' text-green-500 hidden lg:inline ml-2' />
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='w-10 text-lg font-roboto text-gray-500'>2018</div>
                    <div className='mx-4  min-w-2 min-h-2 rounded-full bg-gray-300'></div>
                    <div className='flex items-center  '>
                        <div className='w-20 lg:w-40  h-1 mt-0.5 border-t-2 border-dashed border-gray-300 mr-4'>
                        </div>
                        <div >
                            <h3 className='text-sm lg:text-xl text-gray-500 font-roboto font-bold flex items-center '>
                                <div>IT Support Intern</div>
                                <TiTick size={25} className=' text-green-500 hidden lg:inline ml-2' />
                            </h3>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    )
}