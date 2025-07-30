'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { API_CONFIG } from '@/config/api';
import { useTranslation } from '@/contexts/LanguageContext';
import * as localStorage from '@/utils/localStorage';
import { useCart } from '@/contexts/CartContext';

type JSONMap = { [key: string]: unknown }; // Use unknown for safety

// Exact backend CartItemResponse DTO
interface CartItemResponse {
    id: string; // This is the cart_item_id
    variant_id: string;
    variant_name: string;
    variant_price: number;
    quantity: number;
    image_url: string; // URL for the variant's image
    product_attributes: JSONMap; // e.g., { "color": "Black", "size": "18mm" }
}

// Exact backend CartResponse DTO
interface CartResponse {
    cart_id: string; // The cart ID returned by backend
    total_items: number;
    subtotal_amount: number;
    discount_amount?: number; // Use optional property for nullable
    discount_code_applied?: string; // Use optional property for nullable
    items: CartItemResponse[]; // Crucial: 'items' array
}

// Error response from the API
interface ErrorResponse {
    error: string;
    [key: string]: unknown; // Allow for other properties
}

export default function CartPage() {
    const router = useRouter();
    const { t } = useTranslation();
    const { setCartItemCount } = useCart();
    
    // State management
    const [cart, setCart] = useState<CartResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    // Function to fetch cart data
    const fetchCart = async () => {
        setLoading(true);
        setError(null);

        try {
            const cartId = localStorage.getItem('cart_id');
            
            if (!cartId) {
                setCart(null);
                setLoading(false);
                return;
            }

            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART}/${cartId}`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch cart: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setCart(data);
        } catch (error) {
            console.error('Error fetching cart:', error);
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    // Function to update item quantity
    const handleUpdateQuantity = async (cartItemId: string, variantId: string, newQuantity: number) => {
        try {
            const cartId = localStorage.getItem('cart_id');
            
            if (!cartId) {
                setNotification({
                    message: 'Error: Cart not found',
                    type: 'error'
                });
                return;
            }

            // If quantity is 0, remove the item instead
            if (newQuantity === 0) {
                handleRemoveItem(cartItemId, variantId);
                return;
            }

            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART_UPDATE_QUANTITY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cart_id: cartId,
                    variant_id: variantId,
                    quantity: newQuantity
                })
            });

            const data = await response.json();

            if (response.ok) {
                const cartData = data as CartResponse;
                setNotification({
                    message: 'Item quantity updated successfully!',
                    type: 'success'
                });
                // Update cart count immediately
                setCartItemCount(cartData.total_items);
                fetchCart(); // Refresh cart data
            } else {
                const errorData = data as ErrorResponse;
                setNotification({
                    message: `Error: ${errorData.error || 'Failed to update item quantity'}`,
                    type: 'error'
                });
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
            setNotification({
                message: `${t('common.error')}: ${t('cart.errorNetwork')}`,
                type: 'error'
            });
        }

        // Clear notification after 3 seconds
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    // Function to remove item from cart
    const handleRemoveItem = async (cartItemId: string, variantId: string) => {
        try {
            const cartId = localStorage.getItem('cart_id');
            
            if (!cartId) {
                setNotification({
                    message: 'Error: Cart not found',
                    type: 'error'
                });
                return;
            }

            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART_REMOVE}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cart_id: cartId,
                    variant_id: variantId
                })
            });

            const data = await response.json();

            if (response.ok) {
                const cartData = data as CartResponse;
                setNotification({
                    message: 'Item removed from cart!',
                    type: 'success'
                });
                
                // Update cart count immediately
                setCartItemCount(cartData.total_items);
                
                // Check if cart is now empty
                if (cartData.total_items === 0) {
                    localStorage.removeItem('cart_id');
                    localStorage.removeItem('count_cart');
                    setCartItemCount(0);
                    setCart(null);
                } else {
                    fetchCart(); // Refresh cart data
                }
            } else {
                const errorData = data as ErrorResponse;
                setNotification({
                    message: `${t('common.error')}: ${errorData.error || t('cart.errorRemove')}`,
                    type: 'error'
                });
            }
        } catch (error) {
            console.error('Error removing item:', error);
            setNotification({
                message: 'Error: Could not connect to the server',
                type: 'error'
            });
        }

        // Clear notification after 3 seconds
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    // Fetch cart data on component mount
    useEffect(() => {
        fetchCart();
    }, []);

    // Format price to Rupiah
    const formatPrice = (price: number) => {
        return `Rp ${price?.toLocaleString('id-ID')}`;
    };

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8 pt-20">
                <p className="text-gray-600 text-xl font-semibold">{t('cart.loading')}</p>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 pt-20">
                <p className="text-red-600 text-xl font-semibold mb-4">
                    {t('common.error')}: {error}. {t('common.tryAgain')}
                </p>
                <Link href="/shop" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                    {t('common.continueShopping')}
                </Link>
            </div>
        );
    }

    // Empty cart state
    if (!cart || cart.items?.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 pt-20">
                <p className="text-gray-600 text-xl font-semibold mb-4">{t('cart.empty')}</p>
                <Link href="/shop" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                    {t('common.continueShopping')}
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-100 py-8 page-content-padding">
            {/* Notification */}
            {notification && (
                <div className={`fixed top-20 right-4 p-3 rounded-md shadow-lg z-50 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                    {notification.message}
                </div>
            )}

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('cart.title')}</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cart.items.map((item) => (
                            <div key={item.variant_id} className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4">
                                {/* Product Image */}
                                <div className="relative w-full sm:w-32 h-32 rounded-md overflow-hidden">
                                    <Image
                                        src={item.image_url || '/placeholder-product.jpg'}
                                        alt={item.variant_name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1 flex flex-col">
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold text-gray-900">{item.variant_name}</h2>
                                        {/* Display product attributes if available */}
                                        {Object.entries(item.product_attributes || {}).length > 0 && (
                                            <div className="text-sm text-gray-600 mb-2">
                                                {Object.entries(item.product_attributes).map(([key, value]) => (
                                                    <span key={key} className="mr-2">{key}: {String(value)}</span>
                                                ))}
                                            </div>
                                        )}
                                        <p className="text-blue-600 font-semibold">{formatPrice(item.variant_price)}</p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-4">
                                        {/* Quantity Selector */}
                                        <div className="flex items-center space-x-2">
                                            <button 
                                                className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => handleUpdateQuantity(item.id, item.variant_id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) => handleUpdateQuantity(item.id, item.variant_id, parseInt(e.target.value, 10))}
                                                className="w-16 text-center border border-gray-300 rounded-md py-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <button 
                                                className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => handleUpdateQuantity(item.id, item.variant_id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Item Total & Remove Button */}
                                        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                                            <p className="font-semibold text-gray-900">
                                                {formatPrice(item.variant_price * item.quantity)}
                                            </p>
                                            <button 
                                                className="text-red-600 hover:text-red-800 transition-colors"
                                                onClick={() => handleRemoveItem(item.id, item.variant_id)}
                                            >
                                                {t('common.remove')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">{t('cart.orderSummary')}</h2>
                        
                        <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
                            <div className="flex justify-between">
                                <p className="text-gray-600">{t('common.subtotal')}</p>
                                <p className="text-blue-600 font-semibold">{formatPrice(cart.subtotal_amount)}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-600">{t('common.shipping')}</p>
                                <p className="text-blue-600 font-semibold">{t('cart.calculatedAtCheckout')}</p>
                            </div>
                            {cart.discount_amount !== undefined && cart.discount_amount > 0 && (
                                <div className="flex justify-between">
                                    <p className="text-gray-600">{t('common.discount')} {cart.discount_code_applied ? `(${cart.discount_code_applied})` : ''}</p>
                                    <p className="text-green-600">-{formatPrice(cart.discount_amount)}</p>
                                </div>
                            )}
                        </div>
                        
                        <div className="flex justify-between mb-6">
                            <p className="text-lg font-bold text-gray-900">{t('common.total')}</p>
                            <p className="text-lg font-bold text-blue-600">
                                {formatPrice(cart.subtotal_amount - (cart.discount_amount || 0))}
                            </p>
                        </div>
                        
                        <div className="space-y-3">
                            <button 
                                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                                onClick={() => router.push('/checkout')}
                            >
                                {t('cart.proceedToCheckout')}
                            </button>
                            <Link 
                                href="/shop" 
                                className="block w-full text-center text-blue-600 py-2 hover:underline transition-colors font-semibold"
                            >
                                {t('common.continueShopping')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}