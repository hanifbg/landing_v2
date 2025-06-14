'use client';

import { useState } from 'react';
import { Product, ProductVariant } from '@/src/services/productService';
import VariantSelector from './VariantSelector';
import AddToCartForm from './AddToCartForm';

interface ProductInteractionProps {
  product: Product;
}

export default function ProductInteraction({ product }: ProductInteractionProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="space-y-6">
      <VariantSelector
        variants={product.variants}
        onSelect={handleVariantSelect}
        selectedVariantId={selectedVariant?.id}
      />
      <AddToCartForm selectedVariant={selectedVariant} />
    </div>
  );
}