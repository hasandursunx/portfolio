export default function Project({ project }) {

    return (
        <div className="bg-black border py-4 rounded-lg">
            <div className="px-4">
                <h2 className="text-white text-xl mb-2 ">
                    {project.name}</h2>
                <p className="mb-4 text-sm text-gray-300 text-justify">
                    {project.description}
                </p>
            </div>
            <div className="flex overflow-hidden relative bg-white 
            
            after:w-32 after:h-10 after:block after:absolute after:bg-gradient-to-r after:from-black after:to-transparent
            before:w-32 before:h-10 before:block before:absolute before:right-0 before:bg-gradient-to-l before:from-black before:to-transparent
            ">
                <div className={`flex px-3 space-x-3 animate-infinite-scroll`}>
                    <div className="project">Bootstrap</div>
                    <div className="project">Javascript</div>
                    <div className="project">Express</div>
                    <div className="project">Tailwind</div>
                    <div className="project">React.js</div>
                </div>
                <div aria-hidden="true" className={`flex px-3 space-x-3 animate-infinite-scroll`} >
                    <div className="project">Bootstrap</div>
                    <div className="project">Javascript</div>
                    <div className="project">Express</div>
                    <div className="project">Tailwind</div>
                    <div className="project">React.js</div>
                </div>
            </div>
        </div>

    )
}