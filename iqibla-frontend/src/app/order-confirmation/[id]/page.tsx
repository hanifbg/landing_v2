'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// TypeScript Interfaces
interface OrderPaymentResponse {
    id: string; // Payment ID
    order_id: string;
    amount: number;
    status: string; // e.g., "pending"
    payment_method: string; // e.g., "gopay", "credit_card"
    transaction_id: string; // From Midtrans
    payment_token: string; // SNAP token
    payment_url: string; // SNAP redirect URL
    expiry_time: string; // ISO 8601
    created_at: string;
}

interface OrderItemDetails {
    id: string; // order_item_id
    product_variant_id: string;
    product_name: string; // Added
    product_image: string; // Added
    quantity: number;
    price_at_purchase: number;
}

interface OrderDetailsResponse {
    id: string; // Order ID
    order_number: string;
    cart_id: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    shipping_address: string; // Street address
    shipping_city_id: string;
    shipping_province_id: string;
    shipping_postal_code: string;
    subtotal: number;
    discount_amount: number;
    discount_code_applied?: string;
    shipping_cost: number;
    total_amount: number;
    currency: string;
    order_status: string; // e.g., "pending", "paid", "shipped"
    payment_processor: string;
    payment_gateway_transaction_id: string;
    source_channel: string;
    notes?: string;
    order_items: OrderItemDetails[]; // Uses the updated interface
    payment: OrderPaymentResponse; // Crucial: Includes payment_token and payment_url
    created_at: string;
    updated_at: string;
}

export default function OrderConfirmationPage() {
    const params = useParams();
    const router = useRouter();
    const orderId = params.id as string;

    // State Management
    const [order, setOrder] = useState<OrderDetailsResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [notification, setNotification] = useState<string | null>(null);
    const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);

    // Data Fetching
    const fetchOrder = async (orderId: string) => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:8081/api/v1/orders/${orderId}`);
            
            if (response.status === 404) {
                notFound();
                return;
            }
            
            if (!response.ok) {
                throw new Error(`Failed to fetch order: ${response.status} ${response.statusText}`);
            }
            
            const data: OrderDetailsResponse = await response.json();
            setOrder(data);
        } catch (err) {
            console.error('Error fetching order:', err);
            setError(err instanceof Error ? err.message : 'Failed to fetch order details');
        } finally {
            setLoading(false);
        }
    };

    // Pay Now Button Logic
    const handlePayNow = async () => {
        if (!order) return;
        
        setIsProcessingPayment(true);
        
        try {
            if (order.payment && order.payment.payment_url) {
                setNotification('Redirecting to payment gateway...');
                window.location.href = order.payment.payment_url;
            } else {
                setNotification('Payment link not available or order already paid/processed.');
            }
        } catch (err) {
            console.error('Error processing payment:', err);
            setNotification('Error processing payment. Please try again.');
        } finally {
            setIsProcessingPayment(false);
        }
    };

    // Proceed to Payment Button Logic
    const handleProceedToPayment = () => {
        console.log("Proceed to Payment clicked for order:", order?.id);
        console.log("Payment URL:", order?.payment?.payment_url);
    };

    // Format price to Indonesian Rupiah
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(price);
    };

    // Effect to fetch order on mount
    useEffect(() => {
        if (orderId) {
            fetchOrder(orderId);
        }
    }, [orderId]);

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 py-8 page-content-padding flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-xl font-semibold">Loading order details...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen bg-gray-100 py-8 page-content-padding flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
                    <div className="text-red-600 text-6xl mb-4">⚠️</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Order</h1>
                    <p className="text-red-600 mb-6">{error}</p>
                    <Link href="/shop" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    // Order not found
    if (!order) {
        return (
            <div className="min-h-screen bg-gray-100 py-8 page-content-padding flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
                    <div className="text-gray-400 text-6xl mb-4">📋</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
                    <p className="text-gray-600 mb-6">The order you're looking for doesn't exist or has been removed.</p>
                    <Link href="/shop" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-100 py-8 page-content-padding">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Notification */}
                {notification && (
                    <div className="mb-6 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-md">
                        {notification}
                    </div>
                )}

                {/* Order Confirmation Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="text-6xl mb-4">
                            {order.order_status === 'paid' ? '✅' : '📋'}
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank you for your order!</h1>
                        <h2 className="text-xl text-gray-600">Order #{order.order_number}</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Order Details */}
                        <div className="space-y-6">
                            {/* Customer Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Information</h3>
                                <div className="space-y-2">
                                    <p><span className="font-medium text-gray-800">Name:</span> <span className="text-gray-700">{order.customer_name}</span></p>
                                    <p><span className="font-medium text-gray-800">Email:</span> <span className="text-gray-700">{order.customer_email}</span></p>
                                    <p><span className="font-medium text-gray-800">Phone:</span> <span className="text-gray-700">{order.customer_phone}</span></p>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Address</h3>
                                <div className="space-y-1">
                                    <p className="text-gray-700">{order.shipping_address}</p>
                                    <p className="text-gray-700">City ID: {order.shipping_city_id}</p>
                                    <p className="text-gray-700">Province ID: {order.shipping_province_id}</p>
                                    <p className="text-gray-700">Postal Code: {order.shipping_postal_code}</p>
                                </div>
                            </div>

                            {/* Order Status */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Status</h3>
                                <div className="space-y-2">
                                    <p><span className="font-medium text-gray-800">Order Status:</span> 
                                        <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                                            order.order_status === 'paid' ? 'bg-green-100 text-green-800' :
                                            order.order_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {order.order_status}
                                        </span>
                                    </p>
                                    <p><span className="font-medium text-gray-800">Payment Status:</span> 
                                        <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                                            order.payment?.status === 'paid' ? 'bg-green-100 text-green-800' :
                                            order.payment?.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {order.payment?.status || 'N/A'}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Order Items */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Items</h3>
                            <div className="space-y-4">
                                {order.order_items.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                                        <div className="relative w-16 h-16 flex-shrink-0">
                                            <Image
                                                src={item.product_image}
                                                alt={item.product_name}
                                                fill
                                                className="object-cover rounded-md"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-900">{item.product_name}</h4>
                                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                            <p className="text-sm text-gray-600">Price: {formatPrice(item.price_at_purchase)}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium text-gray-900">
                                                {formatPrice(item.quantity * item.price_at_purchase)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Financial Summary */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="max-w-md ml-auto">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-800">Subtotal:</span>
                                    <span className="text-gray-700">{formatPrice(order.subtotal)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-800">Shipping:</span>
                                    <span className="text-gray-700">{formatPrice(order.shipping_cost)}</span>
                                </div>
                                {order.discount_amount > 0 && (
                                    <div className="flex justify-between text-green-600">
                                        <span className="text-gray-800">Discount:</span>
                                        <span className="text-gray-700">-{formatPrice(order.discount_amount)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-lg font-bold border-t pt-2">
                                    <span className="text-gray-800">Total:</span>
                                    <span className="text-gray-700">{formatPrice(order.total_amount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Pay Now Button - Only show if order is pending and payment URL exists */}
                        {order.order_status === 'pending' && order.payment?.payment_url && (
                            <button
                                onClick={handlePayNow}
                                disabled={isProcessingPayment}
                                className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isProcessingPayment ? 'Processing Payment...' : 'Pay Now'}
                            </button>
                        )}
                        
                        {/* Proceed to Payment Button */}
                        <button
                            onClick={handleProceedToPayment}
                            disabled={isProcessingPayment}
                            className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isProcessingPayment ? 'Processing Payment...' : 'Proceed to Payment'}
                        </button>
                        
                        {/* Continue Shopping Link */}
                        <Link 
                            href="/shop" 
                            className="bg-gray-600 text-white py-3 px-8 rounded-md hover:bg-gray-700 transition-colors font-semibold text-center"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}