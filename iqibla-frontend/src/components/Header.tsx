// src/components/Header.tsx
'use client'; // This component needs to be a client component for interactivity (e.g., future mobile menu, dropdowns)

import Link from 'next/link';
import Image from 'next/image';
// Importing icons from lucide-react.
import { ChevronDown, Search, User, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const { cartItemCount } = useCart();
    
    return (
        // Changed background to a dark gray/black matching the screenshot
        // Added shadow-md for a subtle lift
        <header className="fixed top-0 left-0 right-0 bg-neutral-800 text-white z-50 shadow-md">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
                {/* Left Navigation */}
                <div className="flex-1 flex items-center justify-start">
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {/* Shop with Dropdown */}
                        <div className="relative group">
                            <Link href="/category/zikr-rings" className="flex items-center text-sm lg:text-base font-medium hover:text-gray-400 transition-colors duration-200">
                                {t('header.shop')} <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                            </Link>
                            {/* Dropdown content */}
                            <div
                                className="absolute left-0 top-full mt-2 w-[880px] bg-[#121212] border border-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="shopMenuButton"
                                >
                                <div className="flex px-8 py-6 gap-x-20">
                                    <div className="flex flex-col space-y-6 w-48">
                                        <Link href="/category/zikr-rings" className="font-bold text-lg leading-6 hover:text-yellow-400" role="menuitem" tabIndex={-1}>Zikr Rings</Link>
                                        <Link href="/category/qwatch" className="font-bold text-lg leading-6 hover:text-yellow-400" role="menuitem" tabIndex={-1}>Qwatch</Link>
                                        <Link href="/category/salat-counter" className="font-bold text-lg leading-6 hover:text-yellow-400" role="menuitem" tabIndex={-1}>Salat Counter</Link>
                                        <Link href="/category/qphone" className="font-bold text-lg leading-6 hover:text-yellow-400" role="menuitem" tabIndex={-1}>Qphone</Link>
                                        <Link href="/category/accessories" className="font-bold text-lg leading-6 hover:text-yellow-400" role="menuitem" tabIndex={-1}>Accessories</Link>
                                    </div>
                                    <div className="flex gap-x-6">
                                        <Image
                                            alt="Hand wearing silver ring with square face on white robe background"
                                            className="rounded-md w-40 h-40 object-cover"
                                            height={160}
                                            src="/images/dropdown-image-1.webp"
                                            width={160}
                                            role="menuitem"
                                            tabIndex={-1}
                                        />
                                        <Image
                                            alt="Hand wearing black smartwatch with Arabic clock face on white robe background"
                                            className="rounded-md w-40 h-40 object-cover"
                                            height={160}
                                            src="/images/dropdown-image-2.webp"
                                            width={160}
                                            role="menuitem"
                                            tabIndex={-1}
                                        />
                                        <Image
                                            alt="Hand holding black square device with number 7 on blue background"
                                            className="rounded-md w-40 h-40 object-cover"
                                            height={160}
                                            src="/images/dropdown-image-3.webp"
                                            width={160}
                                            role="menuitem"
                                            tabIndex={-1}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Order Tracker */}
                        <Link href="#" className="text-sm lg:text-base font-medium hover:text-gray-400 transition-colors duration-200">
                            {t('header.orderTracker')}
                        </Link>
                    </div>
                </div>

                {/* Centered Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2 z-10">
                    <Image
                        src="/iqibla-logo.png" // Ensure this image is in your /public folder
                        alt="iQibla Logo"
                        width={120} // Adjust based on your logo size for optimal display
                        height={40} // Adjust based on your logo size
                        priority // Prioritize loading for LCP
                        className="w-auto" // Ensures consistent height and auto-width
                    />
                </Link>

                {/* Right Navigation and Icons */}
                <div className="flex-1 flex items-center justify-end">
                    {/* Right Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {/* iQIBLA Life */}
                        <Link href="#" className="text-sm lg:text-base font-medium hover:text-gray-400 transition-colors duration-200">
                            {t('header.iqiblaLife')}
                        </Link>
                        {/* Contact Us (your existing WhatsApp link) */}
                        <a
                            href="https://api.whatsapp.com/send?phone=6285179766847&text=Halo iQibla Indonesia, saya ingin bertanya lebih lanjut mengenai produk Anda. Bisakah Anda bantu?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm lg:text-base font-medium hover:text-gray-400 transition-colors duration-200"
                        >
                            {t('header.contactUs')}
                        </a>
                        {/* Language Selector */}
                        <select 
                            value={language}
                            onChange={(e) => setLanguage(e.target.value as 'en' | 'id')}
                            className="bg-transparent border-none text-white cursor-pointer text-sm lg:text-base hover:text-gray-400 transition-colors focus:outline-none"
                            aria-label={t('header.language')}
                        >
                            <option value="en" className="text-black">English</option>
                            <option value="id" className="text-black">Bahasa Indonesia</option>
                        </select>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-4 lg:space-x-6 pl-4 border-l border-gray-700 ml-4">
                        {/* Search Icon */}
                        <Link href="#" className="hover:text-gray-400 transition-colors duration-200">
                            <Search size={22} />
                        </Link>
                        {/* User Icon */}
                        <Link href="/account" className="hover:text-gray-400 transition-colors duration-200">
                            <User size={22} />
                        </Link>
                        {/* Shopping Cart Icon with Counter Badge */}
                        <Link href="/cart" className="hover:text-gray-400 transition-colors duration-200">
                            <div className="relative">
                                <ShoppingCart size={22} />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </div>
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
