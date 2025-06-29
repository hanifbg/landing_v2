// src/services/cartService.ts

import type {
  CartResponse,
  AddItemRequest,
  UpdateItemRequest,
  RemoveItemRequest,
  ApplyDiscountRequest,
} from '@/types/cart';

// Custom error class for cart API errors
export class CartApiError extends Error {
  public statusCode: number;
  public statusText: string;
  public backendMessage?: string;

  constructor(statusCode: number, statusText: string, backendMessage?: string) {
    super(`Cart API Error: ${statusCode} ${statusText}${backendMessage ? ` - ${backendMessage}` : ''}`);
    this.name = 'CartApiError';
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.backendMessage = backendMessage;
  }
}

const API_BASE_URL = 'http://localhost:8080/api/v1';

// Helper function to create empty cart response
const createEmptyCartResponse = (): CartResponse => ({
  cart_id: null,
  total_items: 0,
  subtotal_amount: 0,
  discount_amount: null,
  discount_code_applied: null,
  items: [],
});

// Helper function to handle fetch errors
const handleFetchError = async (response: Response): Promise<never> => {
  let backendMessage: string | undefined;
  
  try {
    const errorDetails = await response.json();
    backendMessage = errorDetails.message || errorDetails.error || JSON.stringify(errorDetails);
  } catch {
    // If we can't parse the error response, use the status text
    backendMessage = response.statusText;
  }
  
  throw new CartApiError(response.status, response.statusText, backendMessage);
};

// Get cart details
export const getCart = async (cartId: string | null | undefined): Promise<CartResponse> => {
  try {
    // Validation: Return empty cart if no valid cart ID
    if (!cartId || cartId === "undefined") {
      return createEmptyCartResponse();
    }

    const response = await fetch(`${API_BASE_URL}/cart/${cartId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      await handleFetchError(response);
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof CartApiError) {
      throw error;
    }
    
    if (error.message && error.message.includes('Failed to fetch')) {
      throw new Error("Network error: Could not connect to API.");
    }
    
    throw new Error("An unexpected error occurred.");
  }
};

// Add item to cart
export const addItemToCart = async (
  cartId: string | null | undefined,
  variantId: string,
  quantity: number
): Promise<CartResponse> => {
  try {
    // Validation
    if (!variantId) {
      throw new Error("Product variant ID cannot be empty.");
    }
    
    if (!quantity || quantity <= 0) {
      throw new Error("Quantity must be positive.");
    }

    // Handle cart ID - generate new one if not provided
    let effectiveCartId = cartId;
    if (!cartId || cartId === "undefined") {
      effectiveCartId = crypto.randomUUID();
    }

    const requestBody: AddItemRequest = {
      cart_id: effectiveCartId,
      variant_id: variantId,
      quantity: quantity,
    };

    const response = await fetch(`${API_BASE_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      await handleFetchError(response);
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof CartApiError) {
      throw error;
    }
    
    if (error.message && error.message.includes('Failed to fetch')) {
      throw new Error("Network error: Could not connect to API.");
    }
    
    throw new Error("An unexpected error occurred.");
  }
};

// Update cart item quantity
export const updateCartItemQuantity = async (
  cartId: string,
  variantId: string,
  quantity: number
): Promise<CartResponse> => {
  try {
    // Validation
    if (!cartId || !variantId || quantity < 0) {
      throw new Error("Invalid parameters for update.");
    }

    const requestBody: UpdateItemRequest = {
      cart_id: cartId,
      variant_id: variantId,
      quantity: quantity,
    };

    const response = await fetch(`${API_BASE_URL}/cart/update-quantity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      await handleFetchError(response);
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof CartApiError) {
      throw error;
    }
    
    if (error.message && error.message.includes('Failed to fetch')) {
      throw new Error("Network error: Could not connect to API.");
    }
    
    throw new Error("An unexpected error occurred.");
  }
};

// Remove item from cart
export const removeCartItem = async (
  cartId: string,
  variantId: string
): Promise<CartResponse> => {
  try {
    // Validation
    if (!cartId || !variantId) {
      throw new Error("Cart ID or Variant ID cannot be empty for removal.");
    }

    const requestBody: RemoveItemRequest = {
      cart_id: cartId,
      variant_id: variantId,
    };

    const response = await fetch(`${API_BASE_URL}/cart/remove`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      await handleFetchError(response);
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof CartApiError) {
      throw error;
    }
    
    if (error.message && error.message.includes('Failed to fetch')) {
      throw new Error("Network error: Could not connect to API.");
    }
    
    throw new Error("An unexpected error occurred.");
  }
};

// Apply discount to cart
export const applyDiscountToCart = async (
  cartId: string,
  discountCode: string
): Promise<CartResponse> => {
  try {
    // Validation
    if (!cartId || !discountCode) {
      throw new Error("Cart ID or discount code cannot be empty.");
    }

    const requestBody: ApplyDiscountRequest = {
      cart_id: cartId,
      discount_code: discountCode,
    };

    const response = await fetch(`${API_BASE_URL}/cart/apply-discount`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      await handleFetchError(response);
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof CartApiError) {
      throw error;
    }
    
    if (error.message && error.message.includes('Failed to fetch')) {
      throw new Error("Network error: Could not connect to API.");
    }
    
    throw new Error("An unexpected error occurred.");
  }
};