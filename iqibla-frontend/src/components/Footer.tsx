'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Categories Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/zikr-rings" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Zikr Rings
                </Link>
              </li>
              <li>
                <Link href="/category/qwatch" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Qwatch
                </Link>
              </li>
              <li>
                <Link href="/category/salat-counter" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Salat Counter
                </Link>
              </li>
              <li>
                <Link href="/category/qphone" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Qphone
                </Link>
              </li>
              <li>
                <Link href="/category/accessories" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support/Info Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Manuals & Tutorials
                </Link>
              </li>
              <li>
                <Link 
                  href="https://api.whatsapp.com/send?phone=6285179766847&text=Halo%20iQibla%20Indonesia,%20saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20produk%20Anda.%20Bisakah%20Anda%20bantu?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Marketplace Icons Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                Tokopedia
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                Shopee
              </Link>
            </div>
          </div>

          {/* Copyright Section */}
          <div>
            <p className="text-gray-700 text-sm">
              © 2025 iQibla Indonesia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}