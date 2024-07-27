import React from 'react';
import ProductCard from './ProductCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ProductCatalog = ({ categories }) => {
  return (
    <Box sx={{ m: 3, 
      marginTop: 10,
      backgroundColor: '#f9f9f9', 
      padding: 5,
    }}>
      {categories.map((category) => (
        <Box key={category.name} sx={{ mb: 5 }}>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            {category.name}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 5 }}>
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProductCatalog;
