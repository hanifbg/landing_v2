// src/app/shop/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { use } from "react";
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
    tokopedia_url?: string; // Added: Optional string for Tokopedia URL
    shopee_url?: string;    // Added: Optional string for Shopee URL
    is_active: boolean;
    variants: ProductVariant[];
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

async function getProduct(id: string) {
    try {
        const res = await fetch(`https://iqibla-backend.onrender.com/api/v1/products/${id}`, {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            if (res.status === 404) return null;
            throw new Error(`Failed to fetch product: ${res.status} ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching product:", error);
        throw new Error('Failed to load product. Please check server logs.');
    }
}

export default function ProductPage({ params }: {params: Promise<{ id: string }>}) {
    let product: Product | null = null;
    let fetchError: string | null = null;
    const { id } = use(params);
    try {
        product =  use(getProduct(id));
        if (!product) {
            notFound();
        }
    } catch (e: unknown) { // 'e' is now 'unknown'
        if (e instanceof Error) {
            fetchError = e.message; // Safe: 'e' is an Error, so it has 'message'
        } else {
            // Handle cases where 'e' is not an Error object (e.g., a string, number, or plain object)
            fetchError = 'An unknown error occurred';
            // Optionally, log the actual 'e' if you want to inspect its value
            console.error("Caught non-Error type:", e);
        }
    }

    if (fetchError || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
                <p className="text-red-600 text-xl font-semibold">
                    Error: {fetchError || "Product data could not be loaded."} Please try again later.
                </p>
            </div>
        );
    }

    const defaultVariant = product.variants[0];

    const whatsappMessage = encodeURIComponent(`Halo, saya ingin tahu lebih lanjut tentang Zikr Ring ${product.name}.`);
    const whatsappLink = `https://api.whatsapp.com/send?phone=6285179766847&text=${whatsappMessage}`;

    return (
        <main className="min-h-screen bg-gray-100 py-8 pt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">
                    {/* Product Images */}
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                        <Image
                            src={product.image_urls[0] || '/placeholder-product.jpg'}
                            alt={product.name}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6 text-gray-800">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                            <p className="text-lg text-gray-700 mt-2">{product.brand}</p>
                            <p className="text-sm text-gray-600">Category: {product.category}</p>
                        </div>

                        <div className="text-2xl font-bold text-blue-600">
                            Rp {defaultVariant.price.toLocaleString('id-ID')}
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">Description</h2>
                            <p className="text-gray-700">{product.description}</p>
                        </div>

                        {/* Variant Selection */}
                        <div>
                            <label htmlFor="variant-select" className="block text-sm font-medium text-gray-700 mb-2">
                                Select Variant
                            </label>
                            <select
                                id="variant-select"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                defaultValue={defaultVariant.id}
                            >
                                {product.variants.map((variant) => (
                                    <option key={variant.id} value={variant.id}>
                                        {variant.name} - Rp {variant.price.toLocaleString('id-ID')}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Stock Quantity */}
                        <div>
                            <p className="text-sm text-gray-600">
                                Stock Available: {defaultVariant.stock_quantity}
                            </p>
                        </div>

                        {/* Quantity Selector */}
                        <div>
                            <label htmlFor="quantity-input" className="block text-sm font-medium text-gray-700 mb-2">
                                Quantity
                            </label>
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">-</button>
                                <input
                                    id="quantity-input"
                                    type="number"
                                    min="1"
                                    max={defaultVariant.stock_quantity}
                                    defaultValue="1"
                                    className="w-20 text-center border border-gray-300 rounded-md py-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">+</button>
                            </div>
                        </div>

                        {/* Add to Cart Button and WhatsApp Button */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <button className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                                Add to Cart
                            </button>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 block text-center bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors font-semibold"
                            >
                                Chat via WhatsApp
                            </a>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">Key Features</h2>
                            <ul className="list-disc list-inside space-y-1">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="text-gray-700">{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* In Box Items */}
                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">In the Box</h2>
                            <ul className="list-disc list-inside space-y-1">
                                {product.in_box_items.map((item, index) => (
                                    <li key={index} className="text-gray-700">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Specifications */}
                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">Specifications</h2>
                            <dl className="space-y-2">
                                {Object.entries(defaultVariant.specifications).map(([key, value]) => (
                                    <div key={key} className="grid grid-cols-2">
                                        <dt className="text-gray-600">{key}</dt>
                                        <dd className="text-gray-800">{String(value)}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        {/* Marketplace Links */}
                        {/* Only render links if the URL exists in the product data */}
                        {(product.tokopedia_url || product.shopee_url) && (
                            <div className="space-y-4 pt-6 border-t border-gray-200">
                                <div className="text-center">
                                    <p className="text-gray-600 mb-2">Also available on:</p>
                                    <div className="flex justify-center space-x-4">
                                        {product.tokopedia_url && (
                                            <a
                                                href={product.tokopedia_url}
                                                className="text-blue-600 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Tokopedia
                                            </a>
                                        )}
                                        {product.shopee_url && (
                                            <a
                                                href={product.shopee_url}
                                                className="text-orange-600 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Shopee
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
