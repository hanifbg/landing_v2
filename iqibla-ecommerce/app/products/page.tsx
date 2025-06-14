import { Suspense } from 'react';
import { getAllProducts } from '@/src/services/productService';
import ProductCard from '@/src/components/ProductCard';

async function ProductList() {
  try {
    const products = await getAllProducts();

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">Failed to load products. Please try again later.</p>
      </div>
    );
  }
}

function LoadingProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div 
          key={index} 
          className="bg-gray-100 rounded-lg shadow-md h-[400px] animate-pulse"
        />
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      <Suspense fallback={<LoadingProducts />}>
        <ProductList />
      </Suspense>
    </div>
  );
}