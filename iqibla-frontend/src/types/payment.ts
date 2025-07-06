// Payment-related TypeScript interfaces

// Request interfaces
export interface CreatePaymentRequest {
  order_id: string;
}

// Response interfaces
export interface CreatePaymentResponse {
  id: string;
  order_id: string;
  payment_token: string;
  redirect_url: string;
  transaction_status: string;
  payment_type: string;
  gross_amount: number;
  created_at: string;
  updated_at: string;
}

export interface PaymentStatusResponse {
  id: string;
  order_id: string;
  payment_token: string;
  redirect_url: string;
  transaction_status: string;
  payment_type: string;
  gross_amount: number;
  created_at: string;
  updated_at: string;
}

// Order-related interfaces for order confirmation page
export interface OrderResponse {
  id: string;
  order_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  shipping_address: string;
  shipping_city_id: string;
  shipping_province_id: string;
  shipping_postal_code: string;
  shipping_courier: string;
  shipping_service: string;
  shipping_cost: number;
  subtotal_amount: number;
  discount_amount: number;
  total_amount: number;
  total_weight: number;
  status: string;
  notes: string;
  created_at: string;
  updated_at: string;
  items: OrderItemResponse[];
}

export interface OrderItemResponse {
  id: string;
  order_id: string;
  product_id: string;
  product_variant_id: string;
  product_name: string;
  product_variant_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  weight: number;
  created_at: string;
  updated_at: string;
}

// Payment status constants
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  CAPTURE: 'capture',
  SETTLEMENT: 'settlement',
  DENY: 'deny',
  CANCEL: 'cancel',
  EXPIRE: 'expire',
  REFUND: 'refund'
} as const;

export type PaymentStatusType = typeof PAYMENT_STATUS[keyof typeof PAYMENT_STATUS];

// Order status constants
export const ORDER_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
} as const;

export type OrderStatusType = typeof ORDER_STATUS[keyof typeof ORDER_STATUS];