import LatestVideo from "./latest-video/latest-video";
import { latestVideos } from "../../utils/consts";
export default function LatestVideos() {
    return (
        <div className=" hidden lg:grid gap-4 ">
            <h1 className="text-2xl font-bold font-mulish -mb-2  tracking-tighter dark:text-gray-100  ">Latest Youtube Contents</h1>
            {latestVideos && latestVideos.map((latestVideo) => (
                <LatestVideo latestVideo={latestVideo} />)
            )}
        </div>
    )
}