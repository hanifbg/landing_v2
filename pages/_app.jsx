// _app.js

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import AppShell from "../components/layouts/AppShell/index";
import Head from "next/head";

function IqiblaApp({ Component, pageProps }) {
  // Use the page's layout if available, otherwise default to AppShell
  const getLayout = Component.getLayout || ((page) => <AppShell>{page}</AppShell>);

  return getLayout(
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/assets/icon/logo.png" />
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Iqibla - Your ultimate app for prayer timings and Qibla direction" />
        <meta name="keywords" content="Iqibla, prayer times, qibla direction, Islam, Islamic app" />
        <meta name="author" content="Iqibla Team" />
        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Iqibla" />
        <meta property="og:description" content="Your ultimate app for prayer timings and Qibla direction" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.iqibla-indonesia.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Iqibla" />
        <meta name="twitter:description" content="Your ultimate app for prayer timings and Qibla direction" />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default IqiblaApp;
