// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://localhost:8081/api/v1',
  ENDPOINTS: {
    // Product endpoints
    PRODUCTS: '/products',
    
    // Cart endpoints
    CART: '/cart',
    CART_ADD: '/cart/add',
    CART_UPDATE_QUANTITY: '/cart/update-quantity',
    CART_REMOVE: '/cart/remove',
    
    // Shipping endpoints
    SHIPPING_PROVINCES: '/shipping/provinces',
    SHIPPING_CITIES: '/shipping/cities',
    SHIPPING_COST: '/shipping/cost',
    
    // Order endpoints
    ORDERS: '/orders'
  }
};

// Helper function to build full API URLs
export const buildApiUrl = (endpoint: string, params?: Record<string, string | number>): string => {
  let url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, value.toString());
    });
    url += `?${searchParams.toString()}`;
  }
  
  return url;
};