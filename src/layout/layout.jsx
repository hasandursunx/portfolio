import Header from './header/header'
import Navbar from './navbar/navbar'
import Projects from './projects/projects'
import AboutMe from './aboutme/about-me'
import Skills from './skills/skills'
import Contact from './contact/contact'
import Footer from './footer/footer'
import LatestVideos from './latest-videos/latest-videos'
import Experiences from './experiences/experiences'

export default function Layout() {
    return (
        <div className='container  mx-4 sm:mx-auto '>

            <Header />
            <main className=' flex flex-col 
            lg:flex-row space-x-0 lg:space-x-10 
            '>
                <div className='
                
                w-full lg:w-[300px] 
                
                '>
                    <div className='lg:space-y-10 w-full lg:w-[300px] sticky top-10  '>
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
        </div>
    )
}