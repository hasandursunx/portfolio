import Project from './project/project'
import { projects } from '../../utils/consts'
import { GoWorkflow } from "react-icons/go";



export default function Projects() {

    return (
        <div id='projects' className="bg-white shadow-lg w-full rounded-lg px-10 py-5  overflow-hidden  ">
            <h2 className='mb-6 font-bold font-roboto  text-4xl group  flex items-center tracking-tighter'>

                <GoWorkflow size={30} className='mr-2 group-hover:animate-wiggle ' />
                Projects
            </h2>
            <div className="grid grid-cols-3 gap-7">
                {
                    projects && projects.map((project) => (
                        <Project project={project} />
                    ))
                }
            </div >
        </div >
    )
}