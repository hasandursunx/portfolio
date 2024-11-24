export default function AboutMe() {
    return (
        <div className="
        bg-white shadow-lg w-full rounded-lg relative
        p-8 lg:p-10 
        flex flex-col lg:flex-row lg:items-start items-center  
        space-y-2 lg:space-y-4
        space-x-0 lg:space-x-10 
         ">
            <div className=" 
            rounded-full relative overflow-hidden
            w-32 h-32 lg:min-w-48 lg:min-h-48
            ">
                <div className="absolute left-0 top-0 w-32 h-32 lg:w-48 lg:h-48  
                border-gray-600 border-[2px]  border-dashed animate-spin-2  rounded-full " />
                <img className="
                p-1 rounded-full object-contain animate-fade-up animate-duration-1000
                w-32 h-32 lg:w-48 lg:h-48
                " src="/avatar.png" alt="" />
            </div>
            <div className="lg:flex-1 flex flex-col justify-center items-center lg:block">
                <h2 className=" 
                font-bebas relative mb-1 tracking-wider mt-5
                text-4xl lg:text-5xl
                after:tracking-wider after:content-['Juniour'] after:font-pattaya after:text-black after:absolute 
                after:-left-2 after:-top-[16px] 
                lg:after:-left-2.5 lg:after:-top-[22px] 
                after:text-xl lg:after:text-2xl 
                ">Frontend Developer</h2>
                <p className=" 
                font-mulish text-gray-700
                lg:pr-1 xl:pr-10 2xl:pr-20
                text-sm lg:text-base text-justify  break-words ">Eğitim hayatım açtığınız pozisyonun gerektirdiği altyapıyı bana sağladı. Eğitim sürecim içerisinde araştırma, öz motivasyon, girişimcilik ve farklı yetenekler edinme noktasında kendimi geliştirdim.</p>
            </div>
        </div>
    )
}