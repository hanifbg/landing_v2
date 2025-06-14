'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-neutral-800 text-white z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/iqibla-logo.png"
            alt="iQibla Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/products" className="hover:text-gray-300 transition-colors">
            Products
          </Link>
          <Link href="/accessories" className="hover:text-gray-300 transition-colors">
            Accessories
          </Link>
          <Link href="/iqibla-life" className="hover:text-gray-300 transition-colors">
            iQibla Life
          </Link>
          <Link href="/brand-story" className="hover:text-gray-300 transition-colors">
            Brand Story
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6">
          {/* Language Selector */}
          <select className="bg-transparent border-none text-white cursor-pointer hover:text-gray-300 transition-colors focus:outline-none">
            <option value="en" className="text-black">EN</option>
            <option value="id" className="text-black">ID</option>
          </select>

          {/* Search Icon */}
          <button className="hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Shopping Cart Icon */}
          <button className="hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          {/* User Profile Icon */}
          <button className="hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;