// src/components/Header.tsx
'use client'; // This component will need to be a Client Component due to potential future interactivity (like a mobile menu, or if we add a client-side search later)

import Link from 'next/link';
import Image from 'next/image';
import { User, ShoppingCart } from 'lucide-react'; // Assuming lucide-react is installed

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-neutral-800 text-white z-50">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/iqibla-logo.png"
                        alt="iQibla Logo"
                        width={120} // Adjusted width for better visibility with a dark background
                        height={40}
                        priority // Prioritize loading for LCP
                        className="h-10 w-auto" // Ensures consistent height and auto-width
                    />
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Products Link */}
                    <Link href="/shop" className="hover:text-gray-300 transition-colors">
                        Products
                    </Link>
                    {/* Contact Us Link */}
                    <a
                        href="https://api.whatsapp.com/send?phone=6285179766847&text=Halo iQibla Indonesia, saya ingin bertanya lebih lanjut mengenai produk Anda. Bisakah Anda bantu?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>

                {/* Right Side Icons */}
                <div className="flex items-center space-x-6">
                    {/* Account Icon */}
                    <Link href="/account" className="hover:text-gray-300 transition-colors">
                        <User size={24} />
                    </Link>
                    {/* Shopping Cart Icon */}
                    <Link href="/cart" className="hover:text-gray-300 transition-colors">
                        <ShoppingCart size={24} />
                    </Link>
                </div>
            </nav>
        </header>
    );
}
