import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, TextField, MenuItem, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import categories from '@api/constants/products';

const ProductDetailPage = () => {
  const { query } = useRouter();
  const { id } = query;

  const product = categories.reduce((acc, category) => {
    const foundProduct = category.products.find((product) => product.id === parseInt(id, 10));
    if (foundProduct) {
      return foundProduct;
    }
    return acc;
  }, {});

  if (!product || !product.name) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Box sx={{ p: 4,  marginTop: 10, backgroundColor: '#fff' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}
        >
          <Card sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            border: 'none',
          }}>
            <CardMedia
              component="img"
              image={product.cover}
              alt={product.name}
              sx={{ height: 500, objectFit: 'scale-down', backgroundColor: 'transparent', }}
            />
            <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
              {product.images.map((image, index) => (
                <Grid item key={index}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`${product.name} - ${index}`}
                    sx={{ width: 80, height: 80, cursor: 'pointer', objectFit: 'cover' }}
                  />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
            {product.name}
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            ${product.price.toFixed(2)}
            {product.originalPrice && (
              <Typography component="span" sx={{ textDecoration: 'line-through', ml: 2, color: 'grey' }}>
                ${product.originalPrice.toFixed(2)}
              </Typography>
            )}
          </Typography>
          {product.options && (
            <TextField
              select
              label="Color"
              defaultValue={product.options[0]}
              sx={{ mb: 2, width: '100%' }}
            >
              {product.options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <TextField
              type="number"
              defaultValue={1}
              inputProps={{ min: 1 }}
              sx={{ width: 60, mr: 2 }}
            />
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Add To Cart
            </Button>
            <Button variant="contained" color="secondary">
              Beli Sekarang
            </Button>
          </Box>
          {product.description && (
            <Accordion sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Highlights</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{product.description}</Typography>
              </AccordionDetails>
            </Accordion>
          )}
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What's in the Box?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Details about the contents of the box.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Shipping and Return Policy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Details about the shipping and return policy.</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;
