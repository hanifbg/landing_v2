// src/app/shop/[id]/page.tsx
'use client'; // This needs to be a client component for interactivity

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { API_CONFIG } from '@/config/api';
import { useTranslation } from '@/contexts/LanguageContext';

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

// Assuming the backend's CartResponse structure for the AddItem endpoint
interface AddItemResponse {
    cart_id: string;
    total_items: number;
    subtotal_amount: number;
    items: Array<{
        id: string;
        variant_id: string;
        variant_name: string;
        variant_price: number;
        quantity: number;
        image_url: string;
        product_attributes: JSONMap;
    }>;
}


async function fetchProductData(id: string): Promise<Product | null> {
    try {
        const res = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`, {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            if (res.status === 404) {
                console.warn(`Product with ID ${id} not found (404).`);
                return null;
            }
            console.error(`Failed to fetch product ${id}: ${res.status} ${res.statusText}`);
            throw new Error(`Server responded with status ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error("Network or parsing error fetching product:", error);
        throw new Error('Failed to load product due to a network or data issue.');
    }
}

export default function ProductPage() {
    const { id } = useParams(); // Get ID from URL params in client component
    const { t } = useTranslation();
    const productId = Array.isArray(id) ? id[0] : id; // Handle potential array for id

    const [product, setProduct] = useState<Product | null>(null);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [notification, setNotification] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Effect for fetching product data
    useEffect(() => {
        if (!productId) {
            setLoading(false);
            setFetchError("Product ID is missing.");
            return;
        }

        const loadProduct = async () => {
            try {
                const fetchedProduct = await fetchProductData(productId);
                if (!fetchedProduct) {
                    notFound(); // Triggers Next.js not-found page
                }
                setProduct(fetchedProduct);
                // Set initial selected variant to the first one
                if (fetchedProduct && fetchedProduct.variants && fetchedProduct.variants.length > 0) {
                    setSelectedVariant(fetchedProduct.variants[0]);
                }
            } catch (e: unknown) { // Change 'any' to 'unknown'
                // Now, 'e' is of type 'unknown'.
                // You need to assert or check its type before accessing properties like 'message'.
                if (e instanceof Error) {
                    setFetchError(e.message);
                } else if (typeof e === 'string') {
                    setFetchError(e); // If the error is a plain string
                } else {
                    setFetchError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [productId]); // Depend on productId to re-fetch if URL param changes

    // Handle variant selection change
    const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const variantId = e.target.value;
        const newSelectedVariant = product?.variants.find(v => v.id === variantId);
        if (newSelectedVariant) {
            setSelectedVariant(newSelectedVariant);
            setQuantity(1); // Reset quantity when variant changes
        }
    };

    // Handle quantity change
    const handleQuantityChange = (type: 'increase' | 'decrease') => {
        if (!selectedVariant) return;

        setQuantity(prevQty => {
            let newQty = prevQty;
            if (type === 'increase') {
                newQty = Math.min(prevQty + 1, selectedVariant.stock_quantity);
            } else {
                newQty = Math.max(prevQty - 1, 1); // Quantity cannot go below 1
            }
            return newQty;
        });
    };

    // Handle Add to Cart
    const handleAddToCart = async () => {
        if (!product || !selectedVariant || quantity <= 0 || quantity > selectedVariant.stock_quantity) {
            setNotification("Please select a valid variant and quantity.");
            setTimeout(() => setNotification(null), 3000);
            return;
        }

        setNotification("Adding to cart..."); // Provide immediate feedback

        try {
            // *** FIX: Retrieve cart_id from localStorage ***
            const currentCartId = localStorage.getItem('cart_id');

            const payload = {
                cart_id: currentCartId || undefined, // Send undefined if no cart_id exists
                variant_id: selectedVariant.id,
                quantity: quantity,
            };

            const res = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART_ADD}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data: AddItemResponse = await res.json();

            if (res.ok) {
                // *** FIX: Store the cart_id from the response ***
                if (data.cart_id) {
                    localStorage.setItem('cart_id', data.cart_id);
                }
                setNotification(t('product.addedToCart'));
            } else {
                setNotification(t('product.errorAddToCart'));
            }
        } catch (e: unknown) {
            console.error("Error adding to cart:", e);
            setNotification(t('product.errorNetwork'));
        } finally {
            setTimeout(() => setNotification(null), 3000); // Clear notification after 3 seconds
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8 pt-20">
                <p className="text-gray-600 text-xl font-semibold">{t('product.loading')}</p>
            </div>
        );
    }

    if (fetchError || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8 pt-20">
                <p className="text-red-600 text-xl font-semibold">
                    {t('common.error')}: {fetchError || t('product.errorLoadData')} {t('product.errorBackend')}
                </p>
            </div>
        );
    }

    // Ensure selectedVariant is not null before rendering main content
    if (!selectedVariant) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8 pt-20">
                <p className="text-red-600 text-xl font-semibold">
                    {t('common.error')}: {t('product.noVariants')}
                </p>
            </div>
        );
    }

    const whatsappMessage = encodeURIComponent(`Halo, saya ingin tahu lebih lanjut tentang Zikr Ring ${product.name}.`);
    const whatsappLink = `https://api.whatsapp.com/send?phone=6285179766847&text=${whatsappMessage}`;

    return (
        <main className="min-h-screen bg-gray-100 py-8 page-content-padding">
            <div className="container mx-auto px-4">
                {notification && (
                    <div className={`fixed top-20 right-4 p-3 rounded-md shadow-lg transition-opacity duration-300 ${notification.includes("Error") ? 'bg-red-500' : 'bg-green-500'} text-white`}>
                        {notification}
                    </div>
                )}
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
                            <p className="text-sm text-gray-600">{t('product.category')}: {product.category}</p>
                        </div>

                        <div className="text-2xl font-bold text-blue-600">
                            Rp {selectedVariant.price.toLocaleString('id-ID')} {/* Display price of selected variant */}
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">{t('product.description')}</h2>
                            <p className="text-gray-700">{product.description}</p>
                        </div>

                        {/* Variant Selection */}
                        <div>
                            <label htmlFor="variant-select" className="block text-sm font-medium text-gray-700 mb-2">
                                {t('product.selectVariant')}
                            </label>
                            <select
                                id="variant-select"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={selectedVariant.id} // Controlled component
                                onChange={handleVariantChange}
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
                                {t('product.stockAvailable')}: {selectedVariant.stock_quantity}
                            </p>
                        </div>

                        {/* Quantity Selector */}
                        <div>
                            <label htmlFor="quantity-input" className="block text-sm font-medium text-gray-700 mb-2">
                                {t('product.quantity')}
                            </label>
                            <div className="flex items-center space-x-2">
                                <button
                                    className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={() => handleQuantityChange('decrease')}
                                    disabled={quantity <= 1}
                                >
                                    -
                                </button>
                                <input
                                    id="quantity-input"
                                    type="number"
                                    min="1"
                                    max={selectedVariant.stock_quantity}
                                    value={quantity} // Controlled component
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value);
                                        if (!isNaN(value)) {
                                            setQuantity(Math.max(1, Math.min(value, selectedVariant.stock_quantity)));
                                        }
                                    }}
                                    className="w-20 text-center border border-gray-300 rounded-md py-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={() => handleQuantityChange('increase')}
                                    disabled={quantity >= selectedVariant.stock_quantity}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart Button and WhatsApp Button */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <button
                                className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={handleAddToCart}
                                disabled={selectedVariant.stock_quantity <= 0 || quantity <= 0}
                            >
                                {t('product.addToCart')}
                            </button>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 block text-center bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors font-semibold"
                            >
                                {t('product.chatWhatsApp')}
                            </a>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">{t('product.keyFeatures')}</h2>
                            <ul className="list-disc list-inside space-y-1">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="text-gray-700">{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* In Box Items */}
                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">{t('product.inTheBox')}</h2>
                            <ul className="list-disc list-inside space-y-1">
                                {product.in_box_items.map((item, index) => (
                                    <li key={index} className="text-gray-700">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Specifications */}
                        <div>
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">{t('product.specifications')}</h2>
                            <dl className="space-y-2">
                                {Object.entries(selectedVariant.specifications).map(([key, value]) => ( // Use selectedVariant specs
                                    <div key={key} className="grid grid-cols-2">
                                        <dt className="text-gray-600">{key}</dt>
                                        <dd className="text-gray-800">{String(value)}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        {/* Marketplace Links */}
                        {(product.tokopedia_url || product.shopee_url) && (
                            <div className="space-y-4 pt-6 border-t border-gray-200">
                                <div className="text-center">
                                    <p className="text-gray-600 mb-2">{t('product.alsoAvailableOn')}:</p>
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
