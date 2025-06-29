// src/types/cart.ts

// Product attributes type for JSONB data from backend
export type ProductAttributes = Record<string, string | number | boolean | string[] | undefined | null>;

// Cart item response from backend
export interface CartItemResponse {
  id: string; // Unique ID of the cart item from cart_items table
  variant_id: string;
  variant_name: string;
  variant_price: number;
  quantity: number;
  image_url: string;
  product_attributes: ProductAttributes;
  product_name: string;
}

// Complete cart response from backend
export interface CartResponse {
  cart_id: string | null;
  total_items: number;
  subtotal_amount: number;
  discount_amount: number | null;
  discount_code_applied: string | null;
  items: CartItemResponse[];
}

// Request types matching backend expectations
export interface AddItemRequest {
  cart_id: string | null;
  variant_id: string;
  quantity: number;
}

export interface UpdateItemRequest {
  cart_id: string;
  variant_id: string;
  quantity: number;
}

export interface RemoveItemRequest {
  cart_id: string;
  variant_id: string;
}

export interface ApplyDiscountRequest {
  cart_id: string;
  discount_code: string;
}