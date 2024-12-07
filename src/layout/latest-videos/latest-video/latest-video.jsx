import { RiExternalLinkLine } from "react-icons/ri";

export default function LatestVideo({ latestVideo }) {
    return (
        <div className="w-full relative  flex flex-col items-center justify-center rounded-lg  shadow-2xl overflow-hidden">
            <a href="#" className="w-full h-full absolute top-0 left-0   hover:bg-black flex group items-center justify-center">
                <div className="group-hover:flex items-center flex-col text-gray-200 hidden ">
                    <RiExternalLinkLine className="mb-3" size={30} />
                    Youtube'a yönlendirileceksin.
                </div>
            </a>
            <img className="rounded-lg" src={`/thumbnails/${latestVideo.image}.png`} alt="" />
        </div >

    )
}