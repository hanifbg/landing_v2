import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid, Card, CardMedia, Button, CircularProgress, Alert } from '@mui/material';
import { getProductById } from '../../services/productService';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        const data = await getProductById(id);
        setProduct(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '400px' 
      }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }

  const images = product.ImageURLs || 
                 (product.variants?.[0]?.ImageURL ? [product.variants[0].ImageURL] : []);

  return (
    <Box sx={{ p: 4, marginTop: 10, backgroundColor: '#fff' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            border: 'none',
          }}>
            <CardMedia
              component="img"
              image={images[selectedImage] || '/images/placeholder.jpg'}
              alt={product.name}
              sx={{ 
                height: 500, 
                objectFit: 'contain', 
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            />
            <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
              {images.map((image, index) => (
                <Grid item key={index}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`${product.name} - ${index + 1}`}
                    onClick={() => setSelectedImage(index)}
                    sx={{
                      width: 80,
                      height: 80,
                      cursor: 'pointer',
                      objectFit: 'cover',
                      borderRadius: 1,
                      border: index === selectedImage ? '2px solid #1976d2' : '2px solid transparent',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            {product.name}
          </Typography>

          <Typography variant="h5" color="primary" sx={{ mb: 3 }}>
            ${product.price?.toFixed(2) || '0.00'}
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            {product.description}
          </Typography>

          {product.variants && product.variants.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Available Variants
              </Typography>
              <Grid container spacing={2}>
                {product.variants.map((variant, index) => (
                  <Grid item key={index}>
                    <Button
                      variant="outlined"
                      sx={{
                        minWidth: 120,
                        textTransform: 'none',
                      }}
                    >
                      {variant.name}
                      {variant.price && ` - $${variant.price.toFixed(2)}`}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;
