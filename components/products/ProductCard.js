import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  // Calculate price range if variants exist
  const getPriceDisplay = () => {
    if (product.variants && product.variants.length > 0) {
      const prices = product.variants.map(variant => variant.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      return minPrice === maxPrice ? 
        `Rp. ${Math.floor(minPrice).toLocaleString()}` : 
        `Rp. ${Math.floor(minPrice).toLocaleString()} - Rp. ${Math.floor(maxPrice).toLocaleString()}`;
    }
    return `Rp. ${Math.floor(product.price || 0).toLocaleString()}`;
  };

  // Get the main product image
  const mainImage = product.image_urls?.[0] || 
                   (product.variants?.[0]?.image_url) || 
                   '/images/placeholder.jpg';

  return (
    <Card
      sx={{
        maxWidth: 280,
        width: '100%',
        m: 1,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderRadius: 2,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        },
      }}
    >
      <Link href={`/products/${product.id}`} passHref legacyBehavior>
        <a style={{ textDecoration: 'none', color: 'inherit' }}>
          <CardMedia
            component="img"
            height="200"
            image={mainImage}
            alt={product.name}
            sx={{
              objectFit: 'cover',
              backgroundColor: '#f5f5f5',
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography 
              variant="h6" 
              component="div"
              sx={{
                fontSize: '1.1rem',
                fontWeight: 500,
                mb: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {product.name}
            </Typography>
            <Typography 
              variant="body1" 
              color="primary"
              sx={{ 
                fontWeight: 600,
                mb: 1
              }}
            >
              {getPriceDisplay()}
            </Typography>
          </CardContent>
        </a>
      </Link>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          variant="contained" 
          fullWidth
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
