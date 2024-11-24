import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";


export default function Project({ project }) {
    console.log()
    return (
        <div>
            <div className="bg-black w-full h-40  rounded-md p-2 cursor-pointer transition-all duration-300">
                <img className=" w-full h-full  rounded-lg object-cover " src={`/projects/${project.image}.png`} alt="" />
            </div>
            <div className="flex flex-col  text-black  pl-2 py-2  ">
                <div className="my-1">
                    <h2 className="text-lg tracking-wide font-mulish font-bold ">{project.name}</h2>
                    <p className="text-sm  text-gray-500">Bu uygulamanın bir tane açıklaması olacakki buda bu açıklamadır.</p>
                </div>
                <div className="flex items-center justify-between  mt-2">
                    <div className="flext items-center justify-center space-x-1 truncate pr-4">
                        <span className="text-gray-600">Built with :</span>
                        <span className="text-sm text-blue-400 ">
                            {project.builtWith && project.builtWith.map((item, i, row) => (
                                <span key={i}>{item} {i + 1 === row.length ? '' : ' , '}</span>
                            ))}
                        </span>

                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <a href="#">
                            <BiLinkExternal size={22} />
                        </a>
                        <a href="#">
                            <FaGithub size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}