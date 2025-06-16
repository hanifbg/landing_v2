import { notFound } from 'next/navigation';
import Image from 'next/image';

type JSONArray = string[];
type JSONMap = { [key: string]: any };

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
    is_active: boolean;
    variants: ProductVariant[];
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

async function getProduct(id: string) {
    try {
        const res = await fetch(`http://localhost:8081/api/v1/products/${id}`, {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            if (res.status === 404) return null;
            throw new Error('Failed to fetch product');
        }

        return res.json();
    } catch (error) {
        throw new Error('Failed to fetch product');
    }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    let product: Product | null = null;
    let error = null;

    try {
        product = await getProduct(params.id);
        if (!product) return notFound();
    } catch (e) {
        error = e instanceof Error ? e.message : 'Failed to load product';
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-xl">
                    Failed to load product. Please try again later.
                </p>
            </div>
        );
    }

    const defaultVariant = product.variants[0];

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="relative aspect-square w-full">
                    <Image
                        src={product.image_urls[0] || '/placeholder-product.jpg'}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                        <p className="text-lg text-gray-600 mt-2">{product.brand}</p>
                        <p className="text-sm text-gray-500">Category: {product.category}</p>
                    </div>

                    <div className="text-2xl font-bold text-blue-600">
                        ${defaultVariant.price.toFixed(2)}
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Description</h2>
                        <p className="text-gray-700">{product.description}</p>
                    </div>

                    {/* Variant Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Variant
                        </label>
                        <select 
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            defaultValue={defaultVariant.id}
                        >
                            {product.variants.map((variant) => (
                                <option key={variant.id} value={variant.id}>
                                    {variant.name} - ${variant.price.toFixed(2)}
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Quantity
                        </label>
                        <div className="flex items-center space-x-2">
                            <button className="px-3 py-1 border rounded-md">-</button>
                            <input
                                type="number"
                                min="1"
                                max={defaultVariant.stock_quantity}
                                defaultValue="1"
                                className="w-20 text-center border rounded-md py-1"
                            />
                            <button className="px-3 py-1 border rounded-md">+</button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                        Add to Cart
                    </button>

                    {/* Features */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Key Features</h2>
                        <ul className="list-disc list-inside space-y-1">
                            {product.features.map((feature, index) => (
                                <li key={index} className="text-gray-700">{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* In Box Items */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">In the Box</h2>
                        <ul className="list-disc list-inside space-y-1">
                            {product.in_box_items.map((item, index) => (
                                <li key={index} className="text-gray-700">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Specifications */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Specifications</h2>
                        <dl className="space-y-2">
                            {Object.entries(defaultVariant.specifications).map(([key, value]) => (
                                <div key={key} className="grid grid-cols-2">
                                    <dt className="text-gray-600">{key}</dt>
                                    <dd className="text-gray-900">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4 pt-6 border-t">
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors"
                        >
                            Chat via WhatsApp
                        </a>

                        <div className="text-center">
                            <p className="text-gray-600 mb-2">Also available on:</p>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Tokopedia
                                </a>
                                <a
                                    href="#"
                                    className="text-orange-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Shopee
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}