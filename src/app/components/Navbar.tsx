import { ArrowRight } from 'lucide-react'
import React from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
    return (
        <div className='flex justify-between my-6 dark:text-gray-100 text-gray-800'>
            <div className='flex justify-between items-center relative border-y w-full mx-20 py-4'>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
                {/* Logo */}
                <div>
                    <h1 className='text-xl'>
                        NeuraBoost AI
                    </h1>
                </div>

                {/* Navigation Links */}
                <div className='flex flex-row gap-6 text-sm'>
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact</a>
                </div>

                {/* User Actions */}
                <div className='flex flex-row gap-4'>
                    <button className='text-md flex items-center'>Get Started <ArrowRight size={20} /></button>
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
