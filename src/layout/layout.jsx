import Header from './header/header'
import Navbar from './navbar/navbar'
import Projects from './projects/projects'

export default function Layout() {
    return (
        <div className='container mx-auto'>
            <Header />
            <main className='flex'>
                <div className='basis-[300px] space-y-7'>
                    <Navbar />
                    <Projects />
                </div>
            </main>
        </div>
    )
}