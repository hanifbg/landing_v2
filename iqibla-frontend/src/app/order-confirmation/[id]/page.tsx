'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { API_CONFIG } from '@/config/api';
import { OrderResponse, PaymentStatusResponse, PAYMENT_STATUS, ORDER_STATUS } from '@/types/payment';

export default function OrderConfirmationPage() {
    const params = useParams();
    const router = useRouter();
    const orderId = params.id as string;

    const [order, setOrder] = useState<OrderResponse | null>(null);
    const [payment, setPayment] = useState<PaymentStatusResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [checkingPayment, setCheckingPayment] = useState(false);

    // Format price to Rupiah
    const formatPrice = (price: number) => {
        return `Rp ${price?.toLocaleString('id-ID')}`;
    };

    // Get payment status color
    const getPaymentStatusColor = (status: string) => {
        switch (status) {
            case PAYMENT_STATUS.SETTLEMENT:
            case PAYMENT_STATUS.CAPTURE:
                return 'text-green-600 bg-green-100';
            case PAYMENT_STATUS.PENDING:
                return 'text-yellow-600 bg-yellow-100';
            case PAYMENT_STATUS.DENY:
            case PAYMENT_STATUS.CANCEL:
            case PAYMENT_STATUS.EXPIRE:
                return 'text-red-600 bg-red-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    // Get payment status text
    const getPaymentStatusText = (status: string) => {
        switch (status) {
            case PAYMENT_STATUS.SETTLEMENT:
                return 'Payment Successful';
            case PAYMENT_STATUS.CAPTURE:
                return 'Payment Captured';
            case PAYMENT_STATUS.PENDING:
                return 'Payment Pending';
            case PAYMENT_STATUS.DENY:
                return 'Payment Denied';
            case PAYMENT_STATUS.CANCEL:
                return 'Payment Cancelled';
            case PAYMENT_STATUS.EXPIRE:
                return 'Payment Expired';
            default:
                return 'Unknown Status';
        }
    };

    // Fetch order details
    const fetchOrderDetails = useCallback(async () => {
        if (!orderId) return;

        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ORDERS}/${orderId}`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch order: ${response.status} ${response.statusText}`);
            }

            const orderData: OrderResponse = await response.json();
            setOrder(orderData);
        } catch (error) {
            console.error('Error fetching order:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch order details');
        }
    }, [orderId]);

    // Fetch payment status
    const fetchPaymentStatus = useCallback(async () => {
        if (!orderId) return;

        setCheckingPayment(true);
        try {
            // First, get the payment ID from the order
            const orderResponse = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ORDERS}/${orderId}`);
            if (!orderResponse.ok) {
                throw new Error('Failed to fetch order for payment status');
            }
            
            const orderData: OrderResponse = await orderResponse.json();
            
            // Then get payment status (assuming we need to find payment by order_id)
            // Note: This might need adjustment based on actual backend API structure
            const paymentResponse = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PAYMENT_STATUS}?order_id=${orderId}`);
            
            if (paymentResponse.ok) {
                const paymentData: PaymentStatusResponse = await paymentResponse.json();
                setPayment(paymentData);
            }
        } catch (error) {
            console.error('Error fetching payment status:', error);
            // Don't set error here as payment might not exist yet
        } finally {
            setCheckingPayment(false);
        }
    }, [orderId]);

    // Load data on component mount
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await Promise.all([
                fetchOrderDetails(),
                fetchPaymentStatus()
            ]);
            setLoading(false);
        };

        if (orderId) {
            loadData();
        } else {
            setError('Invalid order ID');
            setLoading(false);
        }
    }, [orderId, fetchOrderDetails, fetchPaymentStatus]);

    // Refresh payment status
    const refreshPaymentStatus = () => {
        fetchPaymentStatus();
    };

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8 pt-20">
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
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 pt-20">
                <div className="text-center max-w-md">
                    <div className="text-red-600 text-6xl mb-4">⚠️</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
                    <p className="text-red-600 text-lg mb-6">{error}</p>
                    <div className="space-y-3">
                        <Link href="/shop" className="block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                            Continue Shopping
                        </Link>
                        <button 
                            onClick={() => router.back()}
                            className="block w-full text-blue-600 py-2 hover:underline transition-colors font-semibold"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // No order found
    if (!order) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 pt-20">
                <div className="text-center max-w-md">
                    <div className="text-gray-400 text-6xl mb-4">📋</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
                    <p className="text-gray-600 text-lg mb-6">The order you're looking for doesn't exist or has been removed.</p>
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
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="text-6xl mb-4">
                        {payment && (payment.transaction_status === PAYMENT_STATUS.SETTLEMENT || payment.transaction_status === PAYMENT_STATUS.CAPTURE) ? '✅' : '📋'}
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {payment && (payment.transaction_status === PAYMENT_STATUS.SETTLEMENT || payment.transaction_status === PAYMENT_STATUS.CAPTURE) 
                            ? 'Order Confirmed!' 
                            : 'Order Details'
                        }
                    </h1>
                    <p className="text-gray-600">Order #{order.order_number}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Order Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Payment Status */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-gray-900">Payment Status</h2>
                                <button 
                                    onClick={refreshPaymentStatus}
                                    disabled={checkingPayment}
                                    className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
                                >
                                    {checkingPayment ? 'Checking...' : 'Refresh'}
                                </button>
                            </div>
                            
                            {payment ? (
                                <div className="space-y-3">
                                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getPaymentStatusColor(payment.transaction_status)}`}>
                                        {getPaymentStatusText(payment.transaction_status)}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600">Payment Method</p>
                                            <p className="font-medium text-gray-900">{payment.payment_type || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Amount</p>
                                            <p className="font-medium text-gray-900">{formatPrice(payment.gross_amount)}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-gray-600">
                                    <p>Payment information not available yet.</p>
                                    <p className="text-sm mt-1">If you just completed payment, please wait a moment and refresh.</p>
                                </div>
                            )}
                        </div>

                        {/* Customer Information */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Customer Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-600">Name</p>
                                    <p className="font-medium text-gray-900">{order.customer_name}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Email</p>
                                    <p className="font-medium text-gray-900">{order.customer_email}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Phone</p>
                                    <p className="font-medium text-gray-900">{order.customer_phone}</p>
                                </div>
                            </div>
                        </div>

                        {/* Shipping Information */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Information</h2>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-gray-600">Address</p>
                                    <p className="font-medium text-gray-900">{order.shipping_address}</p>
                                    <p className="text-gray-600">{order.shipping_postal_code}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-600">Courier</p>
                                        <p className="font-medium text-gray-900">{order.shipping_courier.toUpperCase()}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Service</p>
                                        <p className="font-medium text-gray-900">{order.shipping_service}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Items</h2>
                            <div className="space-y-4">
                                {order.items.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900">{item.product_name}</h3>
                                            {item.product_variant_name && (
                                                <p className="text-sm text-gray-600">{item.product_variant_name}</p>
                                            )}
                                            <p className="text-sm text-gray-600">Qty: {item.quantity} × {formatPrice(item.unit_price)}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium text-gray-900">{formatPrice(item.total_price)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                            
                            <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Subtotal</p>
                                    <p className="text-gray-900">{formatPrice(order.subtotal_amount)}</p>
                                </div>
                                
                                {order.discount_amount > 0 && (
                                    <div className="flex justify-between">
                                        <p className="text-gray-600">Discount</p>
                                        <p className="text-green-600">-{formatPrice(order.discount_amount)}</p>
                                    </div>
                                )}
                                
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Shipping</p>
                                    <p className="text-gray-900">{formatPrice(order.shipping_cost)}</p>
                                </div>
                            </div>
                            
                            <div className="flex justify-between mb-6">
                                <p className="text-lg font-bold text-gray-900">Total</p>
                                <p className="text-lg font-bold text-blue-600">{formatPrice(order.total_amount)}</p>
                            </div>
                            
                            <div className="space-y-3">
                                <Link 
                                    href="/shop" 
                                    className="block w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold text-center"
                                >
                                    Continue Shopping
                                </Link>
                                
                                <button 
                                    onClick={() => window.print()}
                                    className="block w-full text-blue-600 py-2 hover:underline transition-colors font-semibold"
                                >
                                    Print Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}