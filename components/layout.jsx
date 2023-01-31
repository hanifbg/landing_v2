import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import Header from './header';

export default function Layout({ children }) {
    return (
      <React.Fragment>
      <Container fixed>
        <Header />
        <Box sx={{ height: '100vh', padding:7}} >
          <main>{children}</main>
        </Box>
      </Container>
    </React.Fragment>
    )
        
  }