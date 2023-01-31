
import Layout from "../components/layout"
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from "./_theme";

export default function TransporterApp({  Component,  pageProps }) {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <Component {...Component}></Component>
        </Layout>
      </ThemeProvider>
    )
  }