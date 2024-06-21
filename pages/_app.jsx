
import Layout from "../components/template/Layout"
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from "./_theme";
import '../styles/globals.css';

export default function TransporterApp({  Component,  pageProps }) {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps}></Component>
        </Layout>
      </ThemeProvider>
    )
  }