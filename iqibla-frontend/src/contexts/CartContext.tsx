'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { API_CONFIG } from '@/config/api';
import * as localStorage from '@/utils/localStorage';

type JSONMap = { [key: string]: unknown };

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

// Define the shape of our cart context
interface CartContextType {
    cartItemCount: number; // The total number of items in the cart
    loadingCartCount: boolean; // For initial re-sync fetch
    errorCartCount: string | null; // For initial re-sync fetch
    // Function to update the cart item count from other components
    setCartItemCount: (count: number) => void;
    // Function to trigger a full re-sync with the backend (optional, but good to expose)
    reSyncCartCount: () => void;
}

// Create the context with undefined as default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Props for the CartProvider component
interface CartProviderProps {
    children: ReactNode;
}

// CartProvider component to wrap around the app
export function CartProvider({ children }: CartProviderProps) {
    // Initialize state
    const [cartItemCount, setCartItemCountState] = useState<number>(0);
    const [loadingCartCount, setLoadingCartCount] = useState<boolean>(true);
    const [errorCartCount, setErrorCartCount] = useState<string | null>(null);
    const [reSyncTrigger, setReSyncTrigger] = useState<number>(0);
    const [initialLoadDone, setInitialLoadDone] = useState<boolean>(false);

    // Immediately try to read count_cart from localStorage
    useEffect(() => {
        try {
            const storedCount = localStorage.getItem<string>('count_cart');
            console.log('Initial localStorage read:', storedCount);
            if (storedCount) {
                const count = parseInt(storedCount, 10);
                if (!isNaN(count)) {
                    setCartItemCountState(count);
                }
            }
        } catch (error) {
            console.error('Error reading count_cart from localStorage:', error);
        } finally {
            setInitialLoadDone(true);
        }
    }, []);

    // Function to fetch cart count from backend
    const fetchBackendCartCount = useCallback(async () => {
        console.log('Fetching backend cart count...');
        setLoadingCartCount(true);
        setErrorCartCount(null);

        try {
            const cartId = localStorage.getItem<string>('cart_id');
            console.log('Cart ID from localStorage:', cartId);

            if (!cartId) {
                console.log('No cart ID found in localStorage');
                setCartItemCountState(0);
                localStorage.removeItem('count_cart');
                return;
            }

            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART}/${cartId}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch cart: ${response.status} ${response.statusText}`);
            }

            const data: CartResponse = await response.json();
            console.log('Backend cart data:', data);

            // Update state and localStorage with the total_items from backend
            setCartItemCountState(data.total_items);
            localStorage.setItem('count_cart', data.total_items.toString());
        } catch (error) {
            console.error('Error fetching cart count:', error);
            setErrorCartCount(error instanceof Error ? error.message : 'An unknown error occurred');
        } finally {
            setLoadingCartCount(false);
        }
    }, []);

    // Effect to fetch cart count from backend when reSyncTrigger changes
    useEffect(() => {
        if (initialLoadDone) {
            console.log('Initial load done, fetching from backend...');
            fetchBackendCartCount();
        }
    }, [reSyncTrigger, fetchBackendCartCount, initialLoadDone]);

    // Function to update cart item count (exposed via context)
    const setCartItemCount = useCallback((count: number) => {
        console.log('Setting cart item count:', count);
        setCartItemCountState(count);
        localStorage.setItem('count_cart', count.toString());
    }, []);

    // Function to trigger a re-sync with the backend (exposed via context)
    const reSyncCartCount = useCallback(() => {
        console.log('Triggering cart re-sync');
        setReSyncTrigger(prev => prev + 1);
    }, []);

    // Create the context value object
    const value: CartContextType = {
        cartItemCount,
        loadingCartCount,
        errorCartCount,
        setCartItemCount,
        reSyncCartCount,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook to use the cart context
export function useCart(): CartContextType {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}