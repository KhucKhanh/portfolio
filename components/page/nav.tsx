'use client';

import { Home, User, Image, Mail, Menu, X, FileText } from 'lucide-react'
import { Facebook, Github } from 'lucide-react'
import { useEffect, useState } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navigation = [
        { name: 'Home', icon: <Home className="w-6 h-6" />, href: '#home' },
        { name: 'About', icon: <User className="w-6 h-6" />, href: '#about' },
        { name: 'Skill', icon: <FileText className="w-6 h-6"/>, href: '#skill' },
        { name: 'Project', icon: <Image className="w-6 h-6" />, href: '#project' },
        { name: 'Contact', icon: <Mail className="w-6 h-6" />, href: '#contact' },
    ]

    useEffect(() => {
        try {
            document.documentElement.style.scrollBehavior = 'smooth'
            return () => {
                document.documentElement.style.scrollBehavior = 'auto'
            }
        } catch (error) {
            console.error(error)
        }
    }, [])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        
        try {
            // Kiểm tra href có bắt đầu bằng # và có tồn tại trong danh sách navigation
            if (!href.startsWith('#')) return
            const targetSection = navigation.find(item => item.href === href)
            if (!targetSection) return

            const element = document.querySelector(href)
            if (!element) {
                console.error(`Section ${href} not found`)
                return
            }

            const isMobile = window.innerWidth < 768
            const offsetTop = (element as HTMLElement).offsetTop
            
            // Close mobile menu first
            setIsOpen(false)

            // Add a small delay for mobile to allow menu closing animation
            if (isMobile) {
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    })
                }, 300)
            } else {
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                })
            }
        } catch (error) {
            console.error('Error scrolling to section:', error)
        }
    }

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 z-[60] p-2 rounded-lg bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors md:hidden"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <nav className={`
                fixed top-0 w-64 text-white h-screen bg-gray-900 transition-transform duration-300
                md:translate-x-0 md:w-1/5 z-50
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex flex-col h-full items-center pt-8">
                    <div className="w-32 h-32 rounded-full border-4 border-gray-700 overflow-hidden">
                        <img
                            src="/meme-meo.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-2xl font-bold mt-5">Khanh</h1>

                    <div className="flex space-x-4 mb-4 mt-5">
                        <a
                            href="https://github.com/KhucKhanh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:opacity-80 transition-opacity"
                        >
                            <Github className="w-8 h-8 text-white" />
                        </a>
                        <a
                            href="https://github.com/KhucKhanh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:opacity-80 transition-opacity"
                        >
                            <Facebook className="w-8 h-8 text-white" />
                        </a>
                    </div>

                    <div className="w-full mt-8">
                        {navigation.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="flex items-center space-x-3 px-6 py-3 text-sm
                                     hover:text-white hover:bg-gray-800/50 transition-colors duration-300"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}

export default Nav;