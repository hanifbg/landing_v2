// src/components/Header.tsx
'use client'; // This component needs to be a client component for interactivity (e.g., future mobile menu, dropdowns)

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Importing icons from lucide-react.
import { ChevronDown, Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const { cartItemCount } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Reset shop dropdown state when closing the mobile menu
        if (isMobileMenuOpen) {
            setIsShopDropdownOpen(false);
        }
    };
    
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

                {/* Logo - Centered on desktop, right of hamburger on mobile */}
                <Link 
                    href="/" 
                    className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 ml-12 md:ml-0"
                >
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

                {/* Mobile Menu Icon moved to the left (visible only on small screens) */}
                <button 
                    className="md:hidden absolute left-4 text-white hover:text-gray-400 transition-colors duration-200" 
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <Menu size={24} />
                </button>
            </nav>
            
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-neutral-900 z-40 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="container mx-auto px-4 pt-24 flex flex-col h-full">
                    {/* Close Button */}
                    <button 
                        className="absolute top-4 right-4 text-white hover:text-gray-400 transition-colors duration-200" 
                        onClick={toggleMobileMenu}
                        aria-label="Close mobile menu"
                    >
                        <X size={24} />
                    </button>
                    
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col items-center space-y-6">
                        {/* Shop Accordion (mobile) */}
                        <div className="w-full">
                            <button 
                                className="text-white text-xl py-4 w-full text-center hover:bg-neutral-700 transition-colors duration-200 flex items-center justify-center"
                                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                            >
                                {t('header.shop')}
                                <ChevronDown 
                                    size={20} 
                                    className={`ml-2 transition-transform duration-200 ${isShopDropdownOpen ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            
                            {/* Shop Dropdown Categories */}
                            {isShopDropdownOpen && (
                                <div className="bg-neutral-800 w-full">
                                    <Link 
                                        href="/category/zikr-rings" 
                                        className="text-white text-base pl-8 py-2 w-full block hover:bg-neutral-700 transition-colors duration-200"
                                        onClick={toggleMobileMenu}
                                    >
                                        Zikr Rings
                                    </Link>
                                    <Link 
                                        href="/category/qwatch" 
                                        className="text-white text-base pl-8 py-2 w-full block hover:bg-neutral-700 transition-colors duration-200"
                                        onClick={toggleMobileMenu}
                                    >
                                        Qwatch
                                    </Link>
                                    <Link 
                                        href="/category/salat-counter" 
                                        className="text-white text-base pl-8 py-2 w-full block hover:bg-neutral-700 transition-colors duration-200"
                                        onClick={toggleMobileMenu}
                                    >
                                        Salat Counter
                                    </Link>
                                    <Link 
                                        href="/category/qphone" 
                                        className="text-white text-base pl-8 py-2 w-full block hover:bg-neutral-700 transition-colors duration-200"
                                        onClick={toggleMobileMenu}
                                    >
                                        Qphone
                                    </Link>
                                    <Link 
                                        href="/category/accessories" 
                                        className="text-white text-base pl-8 py-2 w-full block hover:bg-neutral-700 transition-colors duration-200"
                                        onClick={toggleMobileMenu}
                                    >
                                        Accessories
                                    </Link>
                                </div>
                            )}
                        </div>
                        
                        {/* Order Tracker */}
                        <Link 
                            href="#" 
                            className="text-white text-xl py-4 w-full text-center hover:bg-neutral-700 transition-colors duration-200"
                            onClick={toggleMobileMenu}
                        >
                            {t('header.orderTracker')}
                        </Link>
                        
                        {/* iQIBLA Life */}
                        <Link 
                            href="#" 
                            className="text-white text-xl py-4 w-full text-center hover:bg-neutral-700 transition-colors duration-200"
                            onClick={toggleMobileMenu}
                        >
                            {t('header.iqiblaLife')}
                        </Link>
                        
                        {/* Contact Us */}
                        <a
                            href="https://api.whatsapp.com/send?phone=6285179766847&text=Halo iQibla Indonesia, saya ingin bertanya lebih lanjut mengenai produk Anda. Bisakah Anda bantu?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-xl py-4 w-full text-center hover:bg-neutral-700 transition-colors duration-200"
                            onClick={toggleMobileMenu}
                        >
                            {t('header.contactUs')}
                        </a>
                    </div>
                    
                    {/* Mobile Icons */}
                    <div className="flex justify-center space-x-8 mt-8">
                        {/* Search Icon */}
                        <Link 
                            href="#" 
                            className="text-white hover:text-gray-400 transition-colors duration-200"
                            onClick={toggleMobileMenu}
                        >
                            <Search size={28} />
                        </Link>
                        
                        {/* User Icon */}
                        <Link 
                            href="/account" 
                            className="text-white hover:text-gray-400 transition-colors duration-200"
                            onClick={toggleMobileMenu}
                        >
                            <User size={28} />
                        </Link>
                        
                        {/* Shopping Cart Icon with Counter Badge */}
                        <Link 
                            href="/cart" 
                            className="text-white hover:text-gray-400 transition-colors duration-200"
                            onClick={toggleMobileMenu}
                        >
                            <div className="relative">
                                <ShoppingCart size={28} />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </div>
                    
                    {/* Mobile Language Selector */}
                    <div className="mt-8 flex justify-center">
                        <select 
                            value={language}
                            onChange={(e) => {
                                setLanguage(e.target.value as 'en' | 'id');
                                toggleMobileMenu();
                            }}
                            className="bg-transparent border border-gray-700 rounded-md text-white cursor-pointer text-lg py-2 px-4 hover:bg-neutral-700 transition-colors focus:outline-none"
                            aria-label={t('header.language')}
                        >
                            <option value="en" className="text-black">English</option>
                            <option value="id" className="text-black">Bahasa Indonesia</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}
