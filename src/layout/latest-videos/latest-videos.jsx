import LatestVideo from "./latest-video/latest-video";

export default function LatestVideos() {
    return (
        <div className=" grid gap-4">
            <h1 className="text-2xl font-bold font-mulish -mb-2 tracking-tighter ">Latest Youtube Contents</h1>
            <LatestVideo />
            <LatestVideo />
        </div>
    )
}