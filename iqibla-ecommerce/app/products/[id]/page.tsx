import Image from 'next/image';
import { Suspense } from 'react';
import { getProductById } from '@/src/services/productService';
import ProductInteraction from '@/src/components/ProductInteraction';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/800x800/f3f4f6/000000?text=No+Image';

async function ProductDetail({ id }: { id: string }) {
  try {
    const product = await getProductById(id);
    const mainImageUrl = product.variants[0]?.image_url || product.image_urls[0] || PLACEHOLDER_IMAGE;

    // Filter out null/undefined image URLs and deduplicate
    const galleryImages = Array.from(new Set(
      product.variants
        .map(variant => variant.image_url)
        .filter(url => url && url !== mainImageUrl)
    ));

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image Container */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 shadow-md">
              <Image
                src={mainImageUrl}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority={true}
                quality={90}
              />
            </div>

            {/* Image Gallery Grid */}
            {galleryImages.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {galleryImages.map((imageUrl, index) => (
                  <div 
                    key={`${imageUrl}-${index}`} 
                    className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.name} - View ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Client Components for Interactive Elements */}
            <ProductInteraction product={product} />

            {/* Additional Product Details */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {product.brand && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <dt className="text-sm text-gray-500">Brand</dt>
                    <dd className="text-sm font-medium text-gray-900">{product.brand}</dd>
                  </div>
                )}
                {product.category && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <dt className="text-sm text-gray-500">Category</dt>
                    <dd className="text-sm font-medium text-gray-900">{product.category}</dd>
                  </div>
                )}
                {product.variants[0]?.dimensions && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <dt className="text-sm text-gray-500">Dimensions</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {`${product.variants[0].dimensions.length}x${product.variants[0].dimensions.width}x${product.variants[0].dimensions.height} ${product.variants[0].dimensions.unit || 'm'}`}
                    </dd>
                  </div>
                )}
                {product.variants[0]?.weight && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <dt className="text-sm text-gray-500">Weight</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {`${product.variants[0].weight} kg`}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center bg-red-50 p-6 rounded-lg">
          <p className="text-red-600 text-lg">Failed to load product details. Please try again later.</p>
        </div>
      </div>
    );
  }
}

function LoadingProductDetail() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg bg-gray-200 animate-pulse shadow" />
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="aspect-square rounded-lg bg-gray-200 animate-pulse shadow-sm" />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-3/4" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
          </div>
          <div className="space-y-4 pt-6">
            <div className="h-[120px] bg-gray-200 rounded-lg animate-pulse" />
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-16 bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <Suspense fallback={<LoadingProductDetail />}>
      <ProductDetail id={params.id} />
    </Suspense>
  );
}