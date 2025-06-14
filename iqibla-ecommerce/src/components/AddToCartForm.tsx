'use client';

import { useState } from 'react';
import { ProductVariant } from '@/src/services/productService';

interface AddToCartFormProps {
  selectedVariant: ProductVariant | null;
}

export default function AddToCartForm({ selectedVariant }: AddToCartFormProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedVariant) {
      alert('Please select a variant first');
      return;
    }
    
    console.log('Adding to cart:', {
      variantId: selectedVariant.id,
      quantity,
      price: selectedVariant.price
    });
    // TODO: Implement actual cart functionality
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
        />
      </div>

      <button
        className="w-full py-3 px-8 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={handleAddToCart}
        disabled={!selectedVariant}
      >
        {selectedVariant ? 'Add to Cart' : 'Select a Variant'}
      </button>
    </div>
  );
}