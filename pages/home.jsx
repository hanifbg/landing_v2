import React from 'react';
import Box from '@mui/material/Box';
import HeroSection from '../components/home/HeroSection';
import ProductList from '../components/products/ProductList';
import ServiceSection from '../components/home/ServiceSection';

const HomePage = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#ffffff',
    }}>
      <HeroSection />
      <ProductList />
      <ServiceSection />
    </Box>
  );
};

export default HomePage;
