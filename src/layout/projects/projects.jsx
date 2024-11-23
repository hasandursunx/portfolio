import Project from './project/project'
import { projects } from '../../utils/consts'

export default function Projects() {

    return (
        <div className=''>
            <h1 className="text-4xl font-bold font-bebas">Work On</h1>
            <Project project={projects[0]} />
            <Project project={projects[1]} />
        </div>
    )
}