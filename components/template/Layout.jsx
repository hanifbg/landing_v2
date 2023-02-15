import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import Header from '../header';
import "@fontsource/poppins";


export default function Layout({ children }) {
    return (
      <Container  maxWidth="lg" disableGutters={true}>
        <Header />
        <Box sx={{padding:5}}>
          <main>{children}</main>
        </Box>
      </Container>
    )
        
  }