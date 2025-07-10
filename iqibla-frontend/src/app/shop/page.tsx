import ProductCard from '@/components/ProductCard';
import { API_CONFIG } from '@/config/api';
import Image from 'next/image';
import Link from 'next/link';

type JSONArray = string[];
type JSONMap = { [key: string]: unknown };

interface ProductVariant {
    id: string;
    product_id: string;
    sku: string;
    name: string;
    price: number;
    stock_quantity: number;
    image_url: string;
    weight: number;
    dimensions?: {
        length: number;
        width: number;
        height: number;
        unit: string;
    };
    attribute_values: JSONMap;
    specifications: JSONMap;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    features: JSONArray;
    in_box_items: JSONArray;
    image_urls: JSONArray;
    tokopedia_url?: string;
    shopee_url?: string;
    is_active: boolean;
    variants: ProductVariant[];
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

async function getProducts() {
    try {
        const res = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}`, {
            next: { revalidate: 60 }
        });
        
        if (!res.ok) throw new Error('Failed to fetch products');
        
        return res.json();
    } catch (error: unknown) {
        console.error("An error occurred during product fetch:", error);
    
        let errorMessage = 'Failed to fetch products';
        if (error instanceof Error) {
            errorMessage += `: ${error.message}`;
        } else if (typeof error === 'string') {
            errorMessage += `: ${error}`;
        }
        throw new Error(errorMessage);
    }
}

export default async function ShopPage() {
    let products: Product[] = [];
    let error = null;

    try {
        products = await getProducts();
    } catch (e) {
        error = e instanceof Error ? e.message : 'Failed to load products';
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-xl">
                    Failed to load products. Please try again later.
                </p>
            </div>
        );
    }

    // Sample "You May Also Like" products (you can modify this logic)
    const featuredProducts = products.slice(0, 4);

    return (
        <main className="bg-white text-gray-900">
            {/* Hero Banner */}
            <section className="relative bg-black">
                <Image
                    alt="Zikr Rings displayed on dark rocky surface with spotlight"
                    className="w-full object-cover object-center max-h-[280px]"
                    height={280}
                    src="https://storage.googleapis.com/a1aa/image/a7749f44-0629-45d2-7df6-df99bb77a0b5.jpg"
                    width={1280}
                    priority
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-20">
                    <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl max-w-md leading-tight">
                        Our Products
                    </h1>
                    <p className="text-white text-xs sm:text-sm mt-1 max-w-xs">
                        Discover our complete range of Islamic smart devices.
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="max-w-[1280px] mx-auto px-4 py-3 text-xs text-gray-400 select-none">
                <ol className="flex flex-wrap gap-1">
                    <li>
                        <Link className="hover:underline text-gray-300" href="/">
                            Home
                        </Link>
                        <span className="mx-1">/</span>
                    </li>
                    <li aria-current="page" className="text-gray-500">
                        Shop
                    </li>
                </ol>
            </nav>

            {/* Products Grid */}
            <section className="max-w-[1280px] mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Info Section */}
            <section className="bg-gray-50 py-10">
                <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
                    <Image
                        alt="Hand wearing Zikr ring on blue book with golden Arabic calligraphy"
                        className="rounded-md w-full max-w-[400px] object-cover"
                        height={280}
                        src="https://storage.googleapis.com/a1aa/image/cecdecfa-f0a4-4293-f852-1cac5fae8b55.jpg"
                        width={400}
                    />
                    <h2 className="text-xl md:text-2xl font-semibold max-w-md leading-snug">
                        Elevate Your Spiritual Practice with Innovative Smart Technology
                    </h2>
                </div>
            </section>

            {/* You May Also Like */}
            {featuredProducts.length > 0 && (
                <section className="max-w-[1280px] mx-auto px-4 py-6">
                    <h3 className="text-center font-semibold text-lg mb-6">
                        You May Also Like
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <ProductCard key={`featured-${product.id}`} product={product} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
