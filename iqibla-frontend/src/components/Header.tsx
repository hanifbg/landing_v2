// src/components/Header.tsx
'use client'; // This component needs to be a client component for interactivity (e.g., future mobile menu, dropdowns)

import Link from 'next/link';
import Image from 'next/image';
// Importing icons from lucide-react.
import { ChevronDown, Search, User, ShoppingCart } from 'lucide-react';

export default function Header() {
    return (
        // Changed background to a dark gray/black matching the screenshot
        // Added shadow-md for a subtle lift
        <header className="fixed top-0 left-0 right-0 bg-neutral-800 text-white z-50 shadow-md">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Left Section: Left Nav + Logo + Right Nav */}
                <div className="flex items-center justify-start w-full md:w-auto"> {/* Adjusted for flexible width */}
                    {/* Left Navigation */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {/* Shop with Dropdown (placeholder for now) */}
                        <div className="relative group">
                            <Link href="/shop" className="flex items-center text-sm lg:text-base font-medium hover:text-gray-400 transition-colors duration-200">
                                Shop <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                            </Link>
                            {/* Dropdown content would go here, hidden by default */}
                        </div>
                        {/* Order Tracker */}
                        <Link href="#" className="text-sm lg:text-base font-medium hover:text-gray-400 transition-colors duration-200">
                            Order Tracker
                        </Link>
                        {/* Affiliate Program */}
                        <Link href="#" className="text-sm lg:text-base font-medium hover:text-gray-400 transition-colors duration-200">
                            Affiliate Program
                        </Link>
                    </div>

                    {/* Logo (Centered within this flex container) */}
                    {/* Removed absolute positioning, now part of the flex flow */}
                    <Link href="/" className="flex-shrink-0 mx-auto md:mx-8 lg:mx-12"> {/* Added horizontal margin for spacing */}
                        <Image
                            src="/iqibla-logo.png" // Ensure this image is in your /public folder
                            alt="iQibla Logo"
                            width={120} // Adjust based on your logo size for optimal display
                            height={40} // Adjust based on your logo size
                            priority // Prioritize loading for LCP
                            className="h-10 w-auto" // Ensures consistent height and auto-width
                        />
                    </Link>

                    {/* Right Navigation (moved here, to the right of the logo) */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {/* iQIBLA Life */}
                        <Link href="#" className="text-sm lg:text-base font-medium hover:text-gray-400 transition-colors duration-200">
                            iQIBLA Life
                        </Link>
                        {/* Brand Story */}
                        <Link href="#" className="text-sm lg:text-base font-medium hover:text-gray-400 transition-colors duration-200">
                            Brand Story
                        </Link>
                        {/* Contact Us (your existing WhatsApp link) */}
                        <a
                            href="https://api.whatsapp.com/send?phone=6285179766847&text=Halo iQibla Indonesia, saya ingin bertanya lebih lanjut mengenai produk Anda. Bisakah Anda bantu?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm lg:text-base font-medium hover:text-gray-400 transition-colors duration-200"
                        >
                            Contact Us
                        </a>
                        {/* Language Selector */}
                        <select className="bg-transparent border-none text-white cursor-pointer text-sm lg:text-base hover:text-gray-400 transition-colors focus:outline-none">
                            <option value="en" className="text-black">English</option>
                            <option value="id" className="text-black">Bahasa Indonesia</option>
                        </select>
                    </div>
                </div>

                {/* Rightmost Icons */}
                <div className="flex items-center space-x-4 lg:space-x-6 pl-4 border-l border-gray-700"> {/* Added border-l for separator */}
                    {/* Search Icon */}
                    <Link href="#" className="hover:text-gray-400 transition-colors duration-200">
                        <Search size={22} />
                    </Link>
                    {/* User Icon */}
                    <Link href="/account" className="hover:text-gray-400 transition-colors duration-200">
                        <User size={22} />
                    </Link>
                    {/* Shopping Cart Icon */}
                    <Link href="/cart" className="hover:text-gray-400 transition-colors duration-200">
                        <ShoppingCart size={22} />
                    </Link>
                </div>

                {/* Mobile Menu Icon (Placeholder, hidden on md and up) */}
                {/* This would be for a hamburger menu on smaller screens */}
                {/* <div className="md:hidden">
                    <button className="text-white hover:text-gray-400">
                        <Menu size={24} />
                    </button>
                </div> */}
            </nav>
        </header>
    );
}
