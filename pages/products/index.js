import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductList from '@components/products/ProductList';

const ProductPages = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
        Product Catalog
      </Typography>
      <ProductList />
    </Box>
  );
};

export default ProductPages;
