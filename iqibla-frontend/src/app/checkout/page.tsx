'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { API_CONFIG } from '@/config/api';
import { useTranslation } from '@/contexts/LanguageContext';

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
    totalWeight?: number; // Total weight in grams
}

// Province response from API
interface ProvinceResponseItem {
    province_id: string;
    province: string;
}

// City response from API
interface CityResponseItem {
    city_id: string;
    province_id: string;
    province: string;
    type: string; // e.g., "Kabupaten", "Kota"
    city_name: string;
    postal_code: string;
}

// Shipping cost request payload
interface ShippingCostRequestPayload {
    origin: string; // City ID Origin (hardcode to a default origin City ID for now)
    destination: string; // City ID Destination (from selected city)
    weight: number; // Total weight in grams (calculated from cart items)
    courier: string; // "jne" (as per your backend)
}

// Shipping option response from API
interface ShippingOptionResponse {
    service: string;
    description: string;
    cost: number;
    etd: string;
}

// Order request payload
interface CreateOrderRequestPayload {
    cart_id: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    shipping_address: string; // The street address
    shipping_city_id: string;
    shipping_province_id: string;
    shipping_postal_code: string;
    shipping_courier: string; // e.g., "jne"
    shipping_service: string; // e.g., "REG", "OKE", "YES"
    shipping_cost: number;
    total_weight: number; // In grams
    notes?: string; // Optional
}

// Order payment response
// interface OrderPaymentResponse {
//     id: string; // Payment ID
//     order_id: string;
//     amount: number;
//     status: string; // e.g., "pending"
//     payment_method: string; // e.g., "gopay", "credit_card"
//     transaction_id: string; // From Midtrans
//     payment_token: string; // SNAP token
//     payment_url: string; // SNAP redirect URL
//     expiry_time: string; // ISO 8601
//     created_at: string;
// }

// Order success response
interface CreateOrderSuccessResponse {
    id: string; // This is the order_id
    order_number: string;
    total_amount: number;
    message?: string; // Optional message field
}

// Full API response interfaces
interface ProvincesApiResponse {
    data: ProvinceResponseItem[];
    message: string;
}

interface CitiesApiResponse {
    data: CityResponseItem[];
    message: string;
}

interface ShippingCostApiResponse {
    data: ShippingOptionResponse[];
    message: string;
}

export default function CheckoutPage() {
    const router = useRouter();
    const { t } = useTranslation();
    
    // State management for cart data
    const [cart, setCart] = useState<CartResponse | null>(null);
    const [totalWeight, setTotalWeight] = useState<number>(0); // in grams
    
    // State management for shipping data
    const [provinces, setProvinces] = useState<ProvinceResponseItem[]>([]);
    const [cities, setCities] = useState<CityResponseItem[]>([]);
    const [shippingOptions, setShippingOptions] = useState<ShippingOptionResponse[]>([]);
    const [selectedShippingOption, setSelectedShippingOption] = useState<ShippingOptionResponse | null>(null);
    
    // State management for customer details
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        email: '',
        phone: ''
    });
    
    // State management for shipping address
    const [shippingAddress, setShippingAddress] = useState({
        province_id: '',
        city_id: '',
        street: '',
        postalCode: '',
        country: 'Indonesia' // Default to Indonesia
    });
    
    // Loading states
    const [loadingCart, setLoadingCart] = useState<boolean>(true);
    const [loadingProvinces, setLoadingProvinces] = useState<boolean>(false);
    const [loadingCities, setLoadingCities] = useState<boolean>(false);
    const [loadingShippingCosts, setLoadingShippingCosts] = useState<boolean>(false);
    const [isPlacingOrder, setIsPlacingOrder] = useState<boolean>(false);
    
    // Error and notification states
    const [error, setError] = useState<string | null>(null);
    const [errorKey, setErrorKey] = useState<string | null>(null);
    const [notification, setNotification] = useState<string | null>(null);

    // Function to fetch cart data
    const fetchCartData = useCallback(async () => {
        setLoadingCart(true);
        setError(null);

        try {
            const cartId = localStorage.getItem('cart_id');
            
            if (!cartId) {
                setCart(null);
                setLoadingCart(false);
                router.push('/cart'); // Redirect to cart if no cart ID
                return;
            }

            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART}/${cartId}`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch cart: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setCart(data);
            
            // Calculate total weight (assuming each item weighs 500g for now)
            // In a real application, you would get the weight from the product data
            const weight = data.items.reduce((total: number, item: CartItemResponse) => {
                return total + (item.quantity * 500); // 500g per item
            }, 0);
            
            setTotalWeight(weight);
        } catch (error) {
            console.error('Error fetching cart:', error);
            setError(error instanceof Error ? error.message : `${t('common.error')}. ${t('common.tryAgain')}`);
        } finally {
            setLoadingCart(false);
        }
    }, [router]);

    // Function to fetch provinces
    const fetchProvinces = useCallback(async () => {
        setLoadingProvinces(true);
        setError(null);
        setErrorKey(null);

        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SHIPPING_PROVINCES}`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch provinces: ${response.status} ${response.statusText}`);
            }
            
            const data: ProvincesApiResponse = await response.json();
            setProvinces(data.data);
        } catch (error) {
            console.error('Error fetching provinces:', error);
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setErrorKey('common.error');
            }
        } finally {
            setLoadingProvinces(false);
        }
    }, []);

    // Function to fetch cities based on province
    const fetchCities = useCallback(async (provinceId: string) => {
        if (!provinceId) return;
        
        setLoadingCities(true);
        setError(null);
        setErrorKey(null);

        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SHIPPING_CITIES}?province_id=${provinceId}`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch cities: ${response.status} ${response.statusText}`);
            }

            const data: CitiesApiResponse = await response.json();
            setCities(data.data);
        } catch (error) {
            console.error('Error fetching cities:', error);
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setErrorKey('common.error');
            }
        } finally {
            setLoadingCities(false);
        }
    }, []);

    // Function to calculate shipping costs
    const calculateShippingCosts = useCallback(async () => {
        if (!shippingAddress.city_id || totalWeight <= 0) return;
        
        setLoadingShippingCosts(true);
        setError(null);
        setErrorKey(null);

        try {
            const payload: ShippingCostRequestPayload = {
                origin: '154', // Jakarta Pusat as default origin
                destination: shippingAddress.city_id,
                weight: totalWeight,
                courier: 'jne' // Using JNE as the courier
            };

            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SHIPPING_COST}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            
            if (!response.ok) {
                throw new Error(`Failed to calculate shipping costs: ${response.status} ${response.statusText}`);
            }

            const data: ShippingCostApiResponse = await response.json();
            setShippingOptions(data.data);
            
            // Set the first shipping option as default
            if (data.data.length > 0) {
                setSelectedShippingOption(data.data[0]);
                setNotification('Shipping costs calculated successfully!');
            } else {
                setNotification('No shipping options available for this destination.');
            }
        } catch (error) {
            console.error('Error calculating shipping costs:', error);
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setErrorKey('common.error');
            }
        } finally {
            setLoadingShippingCosts(false);
            
            // Clear notification after 3 seconds
            setTimeout(() => {
                setNotification(null);
            }, 3000);
        }
    }, [shippingAddress.city_id, totalWeight, setNotification]);

    // Handle customer details input change
    const handleCustomerDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCustomerDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle shipping address input change
    const handleShippingAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setShippingAddress(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Reset city and shipping options when province changes
        if (name === 'province_id') {
            setShippingAddress(prev => ({
                ...prev,
                city_id: ''
            }));
            setShippingOptions([]);
            setSelectedShippingOption(null);
        }
    };

    // Handle shipping option selection
    const handleShippingOptionChange = (option: ShippingOptionResponse) => {
        setSelectedShippingOption(option);
    };

    // Handle place order
    const handlePlaceOrder = async () => {
        // Validate form
        if (!cart || cart.items.length === 0) {
            setError('Your cart is empty');
            setErrorKey(null);
            return;
        }

        if (!customerDetails.name || !customerDetails.email || !customerDetails.phone) {
            setError('Please fill in all customer details');
            setErrorKey(null);
            return;
        }
        
        if (!shippingAddress.province_id || !shippingAddress.city_id || !shippingAddress.street || !shippingAddress.postalCode) {
            setError('Please fill in all shipping address details');
            setErrorKey(null);
            return;
        }
        
        if (!selectedShippingOption) {
            setError('Please select a shipping option');
            setErrorKey(null);
            return;
        }

        if (totalWeight <= 0) {
            setError('Invalid total weight');
            setErrorKey(null);
            return;
        }

        setIsPlacingOrder(true);
        setError(null);
        setErrorKey(null);

        try {
            // Get cart_id from localStorage
            const cartId = localStorage.getItem('cart_id');
            if (!cartId) {
                throw new Error('Cart ID not found');
            }

            // Construct the order payload
            const orderPayload: CreateOrderRequestPayload = {
                cart_id: cartId,
                customer_name: customerDetails.name,
                customer_email: customerDetails.email,
                customer_phone: customerDetails.phone,
                shipping_address: shippingAddress.street,
                shipping_city_id: shippingAddress.city_id,
                shipping_province_id: shippingAddress.province_id,
                shipping_postal_code: shippingAddress.postalCode,
                shipping_courier: 'jne', // Hardcoded to jne for now
                shipping_service: selectedShippingOption.service,
                shipping_cost: selectedShippingOption.cost,
                total_weight: totalWeight,
                notes: ''
            };

            // Make the API call
            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ORDERS}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderPayload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to place order');
            }

            // Parse the response
            const orderResponse: CreateOrderSuccessResponse = await response.json();

            // Clear cart
            localStorage.removeItem('cart_id');

            // Set success notification
            setNotification('Order placed successfully! Redirecting to order confirmation...');

            // Redirect to order confirmation page
            router.push('/order-confirmation/' + orderResponse.id);
        } catch (error) {
            console.error('Error placing order:', error);
            if (error instanceof Error) {
                setError(error.message);
                setErrorKey(null);
            } else {
                setError(null);
                setErrorKey('common.error');
            }
            
            // Clear notification after 5 seconds
            setTimeout(() => {
                setError(null);
                setErrorKey(null);
            }, 5000);
        } finally {
            setIsPlacingOrder(false);
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handlePlaceOrder();
    };

    // Format price to Rupiah
    const formatPrice = (price: number) => {
        return `Rp ${price?.toLocaleString('id-ID')}`;
    };

    // Calculate total amount
    const calculateTotal = () => {
        if (!cart) return 0;
        const subtotal = cart.subtotal_amount;
        const discount = cart.discount_amount || 0;
        const shipping = selectedShippingOption ? selectedShippingOption.cost : 0;
        
        return subtotal - discount + shipping;
    };

    // Fetch cart data and provinces on component mount
    useEffect(() => {
        fetchCartData();
        fetchProvinces();
    }, [fetchCartData, fetchProvinces]);

    // Fetch cities when province changes
    useEffect(() => {
        if (shippingAddress.province_id) {
            fetchCities(shippingAddress.province_id);
        }
    }, [shippingAddress.province_id, fetchCities]);

    // Calculate shipping costs when city changes
    useEffect(() => {
        if (shippingAddress.city_id && totalWeight > 0) {
            calculateShippingCosts();
        }
    }, [shippingAddress.city_id, totalWeight, calculateShippingCosts]);

    // Loading state
    if (loadingCart) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8 pt-20">
                <p className="text-gray-600 text-xl font-semibold">{t('checkout.loading')}</p>
            </div>
        );
    }

    // Error state
    if (error || errorKey) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 pt-20">
                <p className="text-red-600 text-xl font-semibold mb-4">
                    Error: {error || (errorKey && t(errorKey))}. Please try again later.
                </p>
                <Link href="/cart" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                    Return to Cart
                </Link>
            </div>
        );
    }

    // Empty cart state
    if (!cart || cart.items.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 pt-20">
                <p className="text-gray-600 text-xl font-semibold mb-4">Your cart is empty.</p>
                <Link href="/shop" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-100 py-8 page-content-padding">
            {/* Notification */}
            {notification && (
                <div className="fixed top-20 right-4 p-3 rounded-md shadow-lg z-50 bg-green-500 text-white">
                    {notification}
                </div>
            )}

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('checkout.title')}</h1>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Customer & Shipping Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Customer Details Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('checkout.customerDetails')}</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('checkout.fullName')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={customerDetails.name}
                                        onChange={handleCustomerDetailsChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('checkout.emailAddress')}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={customerDetails.email}
                                        onChange={handleCustomerDetailsChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('checkout.phoneNumber')}</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={customerDetails.phone}
                                        onChange={handleCustomerDetailsChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('checkout.shippingAddress')}</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                                    <input
                                        type="text"
                                        id="street"
                                        name="street"
                                        value={shippingAddress.street}
                                        onChange={handleShippingAddressChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="province_id" className="block text-sm font-medium text-gray-700 mb-1">Province</label>
                                    <select
                                        id="province_id"
                                        name="province_id"
                                        value={shippingAddress.province_id}
                                        onChange={handleShippingAddressChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                        required
                                    >
                                        <option value="">Select Province</option>
                                        {loadingProvinces ? (
                                            <option value="" disabled>Loading provinces...</option>
                                        ) : (
                                            provinces.map(province => (
                                                <option key={province.province_id} value={province.province_id}>
                                                    {province.province}
                                                </option>
                                            ))
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="city_id" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                    <select
                                        id="city_id"
                                        name="city_id"
                                        value={shippingAddress.city_id}
                                        onChange={handleShippingAddressChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                        required
                                        disabled={!shippingAddress.province_id || loadingCities}
                                    >
                                        <option value="">Select City</option>
                                        {loadingCities ? (
                                            <option value="" disabled>Loading cities...</option>
                                        ) : (
                                            cities.map(city => (
                                                <option key={city.city_id} value={city.city_id}>
                                                    {city.type} {city.city_name}
                                                </option>
                                            ))
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                    <input
                                        type="text"
                                        id="postalCode"
                                        name="postalCode"
                                        value={shippingAddress.postalCode}
                                        onChange={handleShippingAddressChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={shippingAddress.country}
                                        readOnly
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-900"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary & Shipping Options */}
                    <div className="space-y-6">
                        {/* Order Summary */}
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('checkout.orderSummary')}</h2>
                            
                            <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Items ({cart.total_items})</p>
                                    <p className="text-blue-600 font-semibold">{formatPrice(cart.subtotal_amount)}</p>
                                </div>
                                
                                {cart.discount_amount !== undefined && cart.discount_amount > 0 && (
                                    <div className="flex justify-between">
                                        <p className="text-gray-600">Discount {cart.discount_code_applied ? `(${cart.discount_code_applied})` : ''}</p>
                                        <p className="text-green-600">-{formatPrice(cart.discount_amount)}</p>
                                    </div>
                                )}
                            </div>
                            
                            {/* Shipping Options */}
                            <div className="border-b border-gray-200 pb-4 mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Options</h3>
                                
                                {loadingShippingCosts ? (
                                    <p className="text-gray-600">Calculating shipping costs...</p>
                                ) : shippingOptions.length > 0 ? (
                                    <div className="space-y-3">
                                        {shippingOptions.map((option) => (
                                            <div 
                                                key={option.service} 
                                                className={`p-3 border rounded-md cursor-pointer transition-colors ${selectedShippingOption?.service === option.service ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
                                                onClick={() => handleShippingOptionChange(option)}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-gray-900 font-semibold">{option.service}</p>
                                                        <p className="text-sm text-gray-600">{option.description}</p>
                                                        <p className="text-sm text-gray-600">Est. {option.etd} days</p>
                                                    </div>
                                                    <p className="text-blue-600 font-semibold">{formatPrice(option.cost)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : shippingAddress.city_id ? (
                                    <p className="text-yellow-600">No shipping options available for this destination.</p>
                                ) : (
                                    <p className="text-gray-600">Please select your city to see shipping options.</p>
                                )}
                            </div>
                            
                            {/* Total */}
                            <div className="flex justify-between mb-6">
                                <p className="text-lg font-bold text-gray-900">Total</p>
                                <p className="text-lg font-bold text-blue-600">{formatPrice(calculateTotal())}</p>
                            </div>
                            
                            {/* Place Order Button */}
                            <button 
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                                disabled={loadingShippingCosts || isPlacingOrder || !selectedShippingOption || 
                                    !customerDetails.name || !customerDetails.email || !customerDetails.phone || 
                                    !shippingAddress.street || !shippingAddress.province_id || 
                                    !shippingAddress.city_id || !shippingAddress.postalCode}
                            >
                                {isPlacingOrder ? t('checkout.placingOrder') : t('checkout.placeOrder')}
                            </button>
                            
                            {/* Return to Cart */}
                            <Link 
                                href="/cart" 
                                className="block w-full text-center text-blue-600 py-2 mt-3 hover:underline transition-colors font-semibold"
                            >
                                {t('checkout.returnToCart')}
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}