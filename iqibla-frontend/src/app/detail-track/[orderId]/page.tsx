"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { API_CONFIG } from "@/config/api";

// TypeScript Interfaces
interface OrderItemDetails {
  id: string; // order_item_id
  product_variant_id: string;
  product_name: string;
  product_image: string;
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
  order_items: OrderItemDetails[];
  created_at: string;
  updated_at: string;
  shipping_city_name: string;
  shipping_province_name: string;
  shipping_district_name: string;
  tracking_number?: string; // Added tracking number field
}

export default function OrderDetailTrackPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const { t } = useTranslation();
  
  const [order, setOrder] = useState<OrderDetailsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [trackingNumber, setTrackingNumber] = useState<string>("");

  const fetchOrder = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setErrorKey(null);
      setErrorMessage(null);

      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ORDERS}/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          setErrorKey("order.orderNotFound");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return;
      }

      const orderData: OrderDetailsResponse = await response.json();
      setOrder(orderData);
      
      // Set tracking number if it exists
      if (orderData.tracking_number) {
        setTrackingNumber(orderData.tracking_number);
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      setErrorMessage(error instanceof Error ? error.message : "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (orderId) {
      fetchOrder(orderId);
    }
  }, [orderId, fetchOrder]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 page-content-padding flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-xl font-semibold">
            {t("order.loadingOrderDetails")}
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (errorKey || errorMessage) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 page-content-padding flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("order.errorLoadingOrder")}
          </h1>
          <p className="text-red-600 mb-6">
            {errorMessage || (errorKey ? t(errorKey) : "")}
          </p>
          <Link
            href="/category/zikr-rings"
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            {t("order.continueShopping")}
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
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("order.orderNotFound")}
          </h1>
          <p className="text-gray-600 mb-6">
            {t("order.orderNotFoundDescription")}
          </p>
          <Link
            href="/category/zikr-rings"
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            {t("order.continueShopping")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8 page-content-padding">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Order Detail Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">
              {order.order_status === "paid" ? "✅" : "📋"}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t("order.orderDetails")}
            </h1>
            <h2 className="text-xl text-gray-600">
              {t("order.orderNumber", { number: order.order_number })}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Order Details */}
            <div className="space-y-6">
              {/* Customer Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t("order.customerInformation")}
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-gray-800">
                      {t("order.name")}:
                    </span>{" "}
                    <span className="text-gray-700">{order.customer_name}</span>
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">
                      {t("order.email")}:
                    </span>{" "}
                    <span className="text-gray-700">
                      {order.customer_email}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">
                      {t("order.phone")}:
                    </span>{" "}
                    <span className="text-gray-700">
                      {order.customer_phone}
                    </span>
                  </p>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t("order.shippingAddress")}
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-700">{order.shipping_address}</p>
                  <p className="text-gray-700">
                    {t("city")} : {order.shipping_city_name}
                  </p>
                  <p className="text-gray-700">
                    {t("province")} : {order.shipping_province_name}
                  </p>
                  <p className="text-gray-700">
                    {t("district")} : {order.shipping_district_name}
                  </p>
                  <p className="text-gray-700">
                    {t("postalCode")} : {order.shipping_postal_code}
                  </p>
                </div>
              </div>

              {/* Order Status */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t("order.status")}
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-gray-800">
                      {t("order.orderStatus")}:
                    </span>
                    <span
                      className={`ml-2 px-2 py-1 rounded-full text-sm ${
                        order.order_status === "processing"
                          ? "bg-green-100 text-green-800"
                          : order.order_status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.order_status
                        ? t(`common.${order.order_status}`)
                        : "N/A"}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">
                      {t("order.orderDate")}:
                    </span>{" "}
                    <span className="text-gray-700">
                      {formatDate(order.created_at)}
                    </span>
                  </p>
                </div>
              </div>

              {/* Tracking Number */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t("order.trackingNumber") || "Tracking Number"}
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-gray-800">
                      {t("order.trackingNumber") || "Tracking Number"}:
                    </span>{" "}
                    <span className="text-gray-700 font-mono">
                      {trackingNumber || "Not available yet"}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Order Items */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t("order.orderItems")}
              </h3>
              <div className="space-y-4">
                {order.order_items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.product_image}
                        alt={item.product_name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {item.product_name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t("order.quantity")}: {item.quantity}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t("order.price")}:{" "}
                        {formatPrice(item.price_at_purchase)}
                      </p>
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
                  <span className="text-gray-800">{t("order.subtotal")}:</span>
                  <span className="text-gray-700">
                    {formatPrice(order.subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800">{t("order.shipping")}:</span>
                  <span className="text-gray-700">
                    {formatPrice(order.shipping_cost)}
                  </span>
                </div>
                {order.discount_amount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span className="text-gray-800">
                      {t("order.discount")}:
                    </span>
                    <span className="text-gray-700">
                      -{formatPrice(order.discount_amount)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span className="text-gray-800">{t("order.total")}:</span>
                  <span className="text-gray-700">
                    {formatPrice(order.total_amount)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Continue Shopping Link */}
            <Link
              href="/category/zikr-rings"
              className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors font-semibold text-center"
            >
              {t("order.continueShopping")}
            </Link>

            {/* Back to Track Page */}
            <Link
              href="/track"
              className="bg-gray-600 text-white py-3 px-8 rounded-md hover:bg-gray-700 transition-colors font-semibold text-center"
            >
              Back to Track
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 