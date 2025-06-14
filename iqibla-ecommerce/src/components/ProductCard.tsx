'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/src/services/productService';
import { formatPrice } from '@/src/services/productService';

interface ProductCardProps {
  product: Product;
}

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x400/f3f4f6/000000?text=No+Image';

export default function ProductCard({ product }: ProductCardProps) {
  // Get the main image URL with fallbacks
  const mainImageUrl = 
    product.variants[0]?.image_url ||
    product.image_urls[0] ||
    PLACEHOLDER_IMAGE;

  // Get the price from the first variant
  const price = product.variants[0]?.price || 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container with fixed aspect ratio */}
      <Link 
        href={`/products/${product.id}`} 
        className="block relative w-full aspect-square overflow-hidden"
      >
        <Image
          src={mainImageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={false}
          quality={85}
        />
      </Link>

      <div className="p-4 space-y-2">
        <Link 
          href={`/products/${product.id}`}
          className="block text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors line-clamp-2"
        >
          {product.name}
        </Link>

        <p className="text-lg font-bold text-gray-900">
          {formatPrice(price)}
        </p>

        <div className="flex justify-between items-center pt-2">
          <Link
            href={`/products/${product.id}`}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            View Details
          </Link>

          <button
            className="px-4 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-colors text-sm"
            onClick={() => console.log('Add to cart clicked', product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}