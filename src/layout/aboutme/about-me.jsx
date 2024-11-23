export default function AboutMe() {
    return (
        <div className="bg-white shadow-lg w-full rounded-lg p-10 flex items-center space-x-10">
            <div className="min-w-48 min-h-48 rounded-full relative  ">
                <div className="absolute left-0 top-0 w-48 h-48  border-gray-600 border-[2px]  border-dashed animate-spin-2  rounded-full " />
                <img className="w-48 h-48 p-1 rounded-full object-contain" src="/avatar.png" alt="" />
            </div>
            <div className="flex-1">
                <h2 className="text-5xl font-bebas relative mb-1 tracking-wider
                after:tracking-wider after:content-['Juniour'] after:font-pattaya after:text-gray-800 after:absolute after:-left-2.5 after:-top-[22px] after:text-2xl">Frontend Developer</h2>
                <p className="pr-10 font-mulish text-justify text-gray-700">Lorem ipsum dolor, 📌 sit amet consectetur adipisicing elit. Beatae architecto 👾 facere quisquam molestias totam et recusandae voluptatum minima minus explicabo.</p>
            </div>
        </div>
    )
}