// src/components/Header.tsx
'use client'; // This component needs to be a client component for interactivity (e.g., future mobile menu, dropdowns)

import { useState, useEffect } from 'react';
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
    const [iqiblaLifeAppUrl, setIqiblaLifeAppUrl] = useState('https://play.google.com/store/apps/details?id=com.umeox.qibla&hl=en');
    
    useEffect(() => {
        // Detect device type and set appropriate app store URL
        if (typeof navigator !== 'undefined' && navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            setIqiblaLifeAppUrl('https://apps.apple.com/id/app/iqibla-life/id1577515422');
        } else {
            setIqiblaLifeAppUrl('https://play.google.com/store/apps/details?id=com.umeox.qibla&hl=en');
        }
    }, []);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Reset shop dropdown state when closing the mobile menu
        if (isMobileMenuOpen) {
            setIsShopDropdownOpen(false);
        }
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
                setIsMobileMenuOpen(false);
                setIsShopDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);
    
    return (
        <header className="fixed top-0 left-0 right-0 bg-neutral-800 text-white z-50 shadow-md">
            <nav className="container mx-auto px-4 py-3 lg:py-4 flex items-center justify-between relative">
                {/* Mobile Menu Button - Left side */}
                <button 
                    className="lg:hidden text-white hover:text-gray-400 transition-colors duration-200 p-2" 
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <Menu size={24} />
                </button>

                {/* Left Navigation - Desktop Only */}
                <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    {/* Shop with Dropdown */}
                    <div className="relative group">
                        <Link href="/category/zikr-rings" className="flex items-center text-sm xl:text-base font-medium hover:text-gray-400 transition-colors duration-200 py-2 px-1">
                            {t('header.shop')} <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                        </Link>
                        {/* Invisible bridge to prevent dropdown from closing */}
                        <div className="absolute left-0 top-full w-full h-4 bg-transparent"></div>
                        {/* Dropdown content with improved hover area */}
                        <div
                            className="absolute left-0 top-full pt-4 w-[880px] bg-[#121212] border border-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="shopMenuButton"
                        >
                            <div className="flex px-8 py-6 gap-x-20">
                                <div className="flex flex-col space-y-6 w-48">
                                    <Link href="/category/zikr-rings" className="font-bold text-lg leading-6 hover:text-yellow-400 transition-colors duration-200" role="menuitem" tabIndex={-1}>Zikr Rings</Link>
                                    <Link href="/category/qwatch" className="font-bold text-lg leading-6 hover:text-yellow-400 transition-colors duration-200" role="menuitem" tabIndex={-1}>Qwatch</Link>
                                    <Link href="/category/salat-counter" className="font-bold text-lg leading-6 hover:text-yellow-400 transition-colors duration-200" role="menuitem" tabIndex={-1}>Salat Counter</Link>
                                    <Link href="/category/qphone" className="font-bold text-lg leading-6 hover:text-yellow-400 transition-colors duration-200" role="menuitem" tabIndex={-1}>Qphone</Link>
                                    <Link href="/category/accessories" className="font-bold text-lg leading-6 hover:text-yellow-400 transition-colors duration-200" role="menuitem" tabIndex={-1}>Accessories</Link>
                                </div>
                                <div className="flex gap-x-6">
                                    <Image
                                        alt="Hand wearing silver ring with square face on white robe background"
                                        className="rounded-md w-40 h-40 object-cover hover:opacity-90 transition-opacity duration-200"
                                        height={160}
                                        src="/images/dropdown-image-1.webp"
                                        width={160}
                                        role="menuitem"
                                        tabIndex={-1}
                                    />
                                    <Image
                                        alt="Hand wearing black smartwatch with Arabic clock face on white robe background"
                                        className="rounded-md w-40 h-40 object-cover hover:opacity-90 transition-opacity duration-200"
                                        height={160}
                                        src="/images/dropdown-image-2.webp"
                                        width={160}
                                        role="menuitem"
                                        tabIndex={-1}
                                    />
                                    <Image
                                        alt="Hand holding black square device with number 7 on blue background"
                                        className="rounded-md w-40 h-40 object-cover hover:opacity-90 transition-opacity duration-200"
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
                    <Link href="/track" className="text-sm xl:text-base font-medium hover:text-gray-400 transition-colors duration-200">
                        {t('header.orderTracker')}
                    </Link>
                    {/* iQIBLA Life */}
                    <Link 
                        href={iqiblaLifeAppUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm xl:text-base font-medium hover:text-gray-400 transition-colors duration-200"
                    >
                        {t('header.iqiblaLife')}
                    </Link>
                </div>

                {/* Logo - Centered on all screens */}
                <Link 
                    href="/" 
                    className="absolute left-1/2 -translate-x-1/2 z-10"
                >
                    <Image
                        src="/iqibla-logo.png"
                        alt="iQibla Logo"
                        width={120}
                        height={40}
                        priority
                        className="w-auto h-8 lg:h-10"
                    />
                </Link>

                {/* Right Navigation and Icons */}
                <div className="flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
                    {/* Right Navigation Links - Desktop Only */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {/* Brand Story */}
                        {/* <Link 
                            href="/pages/brand-story" 
                            className="text-sm xl:text-base font-medium hover:text-gray-400 transition-colors duration-200"
                        >
                            {t('header.brandStory')}
                        </Link> */}
                        {/* Contact Us */}
                        <a
                            href="https://api.whatsapp.com/send?phone=6285179766847&text=Halo iQibla Indonesia, saya ingin bertanya lebih lanjut mengenai produk Anda. Bisakah Anda bantu?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm xl:text-base font-medium hover:text-gray-400 transition-colors duration-200"
                        >
                            {t('header.contactUs')}
                        </a>
                        {/* Language Selector */}
                        <select 
                            value={language}
                            onChange={(e) => setLanguage(e.target.value as 'en' | 'id')}
                            className="bg-transparent border-none text-white cursor-pointer text-sm xl:text-base hover:text-gray-400 transition-colors focus:outline-none"
                            aria-label={t('header.language')}
                        >
                            <option value="en" className="text-black">English</option>
                            <option value="id" className="text-black">Bahasa Indonesia</option>
                        </select>
                    </div>

                    {/* Icons - All screen sizes */}
                    <div className="flex items-center space-x-3 lg:space-x-4 xl:space-x-6 lg:pl-4 lg:border-l lg:border-gray-700">
                        {/* Search Icon */}
                        <Link href="#" className="hover:text-gray-400 transition-colors duration-200 p-1">
                            <Search size={20} className="lg:w-5 lg:h-5" />
                        </Link>
                        {/* User Icon */}
                        <Link href="/account" className="hover:text-gray-400 transition-colors duration-200 p-1">
                            <User size={20} className="lg:w-5 lg:h-5" />
                        </Link>
                        {/* Shopping Cart Icon with Counter Badge */}
                        <Link href="/cart" className="hover:text-gray-400 transition-colors duration-200 p-1">
                            <div className="relative">
                                <ShoppingCart size={20} className="lg:w-5 lg:h-5" />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-neutral-900 z-40 mobile-menu-container ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="container mx-auto px-4 pt-20 flex flex-col h-full">
                    {/* Close Button */}
                    <button 
                        className="absolute top-4 right-4 text-white hover:text-gray-400 transition-colors duration-200 p-2" 
                        onClick={toggleMobileMenu}
                        aria-label="Close mobile menu"
                    >
                        <X size={24} />
                    </button>
                    
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-4 pt-8">
                        {/* Shop Accordion (mobile) */}
                        <div className="w-full">
                            <button 
                                className="text-white text-lg py-3 w-full text-left hover:bg-neutral-700 transition-colors duration-200 flex items-center justify-between px-4 rounded-md"
                                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                            >
                                <span>{t('header.shop')}</span>
                                <ChevronDown 
                                    size={20} 
                                    className={`transition-transform duration-200 ${isShopDropdownOpen ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            
                            {/* Shop Dropdown Categories */}
                            {isShopDropdownOpen && (
                                <div className="bg-neutral-800 w-full mt-2 rounded-md overflow-hidden">
                                    <Link 
                                        href="/category/zikr-rings" 
                                        className="text-white text-base px-6 py-3 w-full block hover:bg-neutral-700 transition-colors duration-200"
                                        onClick={toggleMobileMenu}
                                    >
                                        Zikr Rings
                                    </Link>
                                    <Link 
                                        href="/category/qwatch" 
                                        className="text-white text-base px-6 py-3 w-full block hover:bg-neutral-700 transition-colors duration-200"
                                        onClick={toggleMobileMenu}
                                    >
                                        Qwatch
                                    </Link>
                                    <Link 
                                        href="/category/salat-counter" 
                                        className="text-white text-base px-6 py-3 w-full block hover:bg-neutral-700 transition-colors duration-200"
                                        onClick={toggleMobileMenu}
                                    >
                                        Salat Counter
                                    </Link>
                                    <Link 
                                        href="/category/qphone" 
                                        className="text-white text-base px-6 py-3 w-full block hover:bg-neutral-700 transition-colors duration-200"
                                        onClick={toggleMobileMenu}
                                    >
                                        Qphone
                                    </Link>
                                    <Link 
                                        href="/category/accessories" 
                                        className="text-white text-base px-6 py-3 w-full block hover:bg-neutral-700 transition-colors duration-200"
                                        onClick={toggleMobileMenu}
                                    >
                                        Accessories
                                    </Link>
                                </div>
                            )}
                        </div>
                        
                        {/* Order Tracker */}
                        <Link 
                            href="/track" 
                            className="text-white text-lg py-3 w-full text-left hover:bg-neutral-700 transition-colors duration-200 px-4 rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            {t('header.orderTracker')}
                        </Link>
                        
                        {/* iQIBLA Life */}
                        <Link 
                            href={iqiblaLifeAppUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white text-lg py-3 w-full text-left hover:bg-neutral-700 transition-colors duration-200 px-4 rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            {t('header.iqiblaLife')}
                        </Link>
                        
                        {/* Brand Story */}
                        {/* <Link 
                            href="/pages/brand-story" 
                            className="text-white text-lg py-3 w-full text-left hover:bg-neutral-700 transition-colors duration-200 px-4 rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            {t('header.brandStory')}
                        </Link> */}
                        
                        {/* Contact Us */}
                        <a
                            href="https://api.whatsapp.com/send?phone=6285179766847&text=Halo iQibla Indonesia, saya ingin bertanya lebih lanjut mengenai produk Anda. Bisakah Anda bantu?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-lg py-3 w-full text-left hover:bg-neutral-700 transition-colors duration-200 px-4 rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            {t('header.contactUs')}
                        </a>
                    </div>
                    
                    {/* Mobile Icons */}
                    <div className="flex justify-center space-x-8 mt-8 pt-8 border-t border-gray-700">
                        {/* Search Icon */}
                        <Link 
                            href="#" 
                            className="text-white hover:text-gray-400 transition-colors duration-200 p-2"
                            onClick={toggleMobileMenu}
                        >
                            <Search size={24} />
                        </Link>
                        
                        {/* User Icon */}
                        <Link 
                            href="/account" 
                            className="text-white hover:text-gray-400 transition-colors duration-200 p-2"
                            onClick={toggleMobileMenu}
                        >
                            <User size={24} />
                        </Link>
                        
                        {/* Shopping Cart Icon with Counter Badge */}
                        <Link 
                            href="/cart" 
                            className="text-white hover:text-gray-400 transition-colors duration-200 p-2"
                            onClick={toggleMobileMenu}
                        >
                            <div className="relative">
                                <ShoppingCart size={24} />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </div>
                    
                    {/* Mobile Language Selector */}
                    <div className="mt-6 flex justify-center">
                        <select 
                            value={language}
                            onChange={(e) => {
                                setLanguage(e.target.value as 'en' | 'id');
                                toggleMobileMenu();
                            }}
                            className="bg-transparent border border-gray-700 rounded-md text-white cursor-pointer text-base py-2 px-4 hover:bg-neutral-700 transition-colors focus:outline-none"
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
