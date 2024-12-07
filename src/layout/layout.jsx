import Header from './header/header'
import Navbar from './navbar/navbar'
import Projects from './projects/projects'
import AboutMe from './aboutme/about-me'
import Skills from './skills/skills'
import Contact from './contact/contact'
import Footer from './footer/footer'
import LatestVideos from './latest-videos/latest-videos'
import Experiences from './experiences/experiences'
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export default function Layout() {

    return (

        <div className='container  mx-auto px-4 sm:px-0 '>

            <Header />
            <main className=' flex flex-col 
            lg:flex-row space-x-0 lg:space-x-10 
            '>
                <div className='w-full lg:w-[300px] '>
                    <div className='lg:space-y-10 w-full lg:w-[300px] lg:sticky lg:top-10'>
                        <Navbar />

                        <LatestVideos />
                    </div>
                </div>
                <div className='
                flex-1 space-y-6 
                mt-5 lg:mt-0 
                '>
                    <AboutMe />
                    <Skills />
                    <Projects />
                    <Experiences />
                    <Contact />
                    <Footer />

                </div>
            </main>
            <a href='#aboutme' className='fixed lg:hidden bottom-14 right-4 text-gray-500/30 hover:text-gray-500/50 '><BsFillArrowUpSquareFill className='size-8' /></a>
        </div>
    )
}