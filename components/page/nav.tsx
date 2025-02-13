import { Facebook, Github } from 'lucide-react'

const Nav = () => {
    const navigation = [
        { name: 'About', href: '#about' },
        { name: 'Wallpapers', href: '/wallpapers' },
        { name: 'Posts', href: '/posts' },
        { name: 'Uses', href: '/uses' },
    ]

    return (
        <nav className="fixed top-0 w-1/5 text-white h-screen bg-gray-900 ">
            <div className="flex flex-col h-full items-center ">
                <img src="/meme-meo.jpg" alt="khanh" className="rounded-full w-40 mt-5"></img>
                <div className="text-2xl font-bold mt-5">Khanh</div>

                <div className="flex space-x-4 mb-4 mt-5 ">
                    <a href="https://github.com/KhucKhanh/" target="_blank" rel="noopener noreferrer" className='inline-flex items-center space-x-2'>
                        <Github className="w-8 h-8 text-white group-hover:text-gray-500 " />
                    </a>
                    <a href="https://github.com/KhucKhanh/" target="_blank" rel="noopener noreferrer" className='inline-flex items-center space-x-2'>
                        <Facebook className="w-8 h-8 text-white group-hover:text-gray-500 " />
                    </a>
                </div>

                <div className='flex flex-col justify-start w-full'>
                    {navigation.map((navItem, index) => (
                        <a key={index} href={navItem.href} className="text-2xl font-bold hover:text-gray-400 mb-2 ">{navItem.name}</a>
                    ))}
                </div>

            </div>
        </nav>
    )
}

export default Nav;