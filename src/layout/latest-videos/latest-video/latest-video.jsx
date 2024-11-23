import { RiExternalLinkLine } from "react-icons/ri";

export default function LatestVideo() {
    return (
        <div className="w-full relative p-3 flex flex-col items-center justify-center rounded-md bg-black overflow-hidden">
            <a href="#" className="w-full h-full absolute top-0 left-0  bg-gray-700/30 hover:bg-black/70 flex group items-center justify-center">
                <div className="group-hover:flex items-center flex-col text-gray-200 hidden">
                    <RiExternalLinkLine className="mb-3" size={40} />
                    Youtube'a yönlendirileceksin.
                </div>
            </a>
            <img className="rounded-lg" src="/thumbnails/lifeel.png" alt="" />

        </div >
    )
}