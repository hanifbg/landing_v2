import React from 'react';
import ProductCatalog from '@components/products/ProductCatalog';
import categories from '@api/constants/products.json';

const ProductPages = () => {
  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductCatalog categories={categories} />
    </div>
  );
};

export default ProductPages;
