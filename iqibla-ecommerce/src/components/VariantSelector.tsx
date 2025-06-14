'use client';

import { ProductVariant } from '@/src/services/productService';
import { formatPrice } from '@/src/services/productService';

interface VariantSelectorProps {
  variants: ProductVariant[];
  onSelect: (variant: ProductVariant) => void;
  selectedVariantId?: string;
}

export default function VariantSelector({ variants, onSelect, selectedVariantId }: VariantSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Available Variants</h3>
      <div className="grid gap-3">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onSelect(variant)}
            className={`w-full flex items-center justify-between p-3 border rounded-lg transition-colors text-left ${selectedVariantId === variant.id ? 'border-neutral-800 bg-neutral-50' : 'hover:border-gray-400'}`}
          >
            <div>
              <p className="font-medium">{variant.name}</p>
              <p className="text-sm text-gray-500">
                {Object.entries(variant.attribute_values)
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(', ')}
              </p>
            </div>
            <p className="font-bold">{formatPrice(variant.price)}</p>
          </button>
        ))}
      </div>
    </div>
  );
}