import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} passHref legacyBehavior>
      <a style={{ textDecoration: 'none' }}>
        <Card
          sx={{
            maxWidth: 200,
            m: 1,
            boxShadow: 1,
            borderRadius: 2,
            border: '1px solid #ddd',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={product.cover}
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${product.price}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
};

export default ProductCard;
