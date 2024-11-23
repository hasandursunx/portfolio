import Header from './header/header'
import Navbar from './navbar/navbar'
import Projects from './projects/projects'
import AboutMe from './aboutme/about-me'
import Skills from './skills/skills'

export default function Layout() {
    return (
        <div className='container mx-auto'>
            <Header />
            <main className='flex space-x-7'>
                <div className='w-[300px] space-y-7'>
                    <Navbar />
                </div>
                <div className='flex-1'>
                    <AboutMe />
                    <Skills />
                    <Projects />
                </div>
            </main>
        </div>
    )
}