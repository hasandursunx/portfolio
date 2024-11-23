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
        <div className='container mx-auto'>
            <Header />
            <main className='flex space-x-10 '>
                <div className='w-[300px]  '>
                    <div className='space-y-10 w-[300px] sticky top-10  '>
                        <Navbar />
                        <LatestVideos />
                    </div>
                </div>
                <div className='flex-1 space-y-6'>
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