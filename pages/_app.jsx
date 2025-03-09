import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import AppShell from "../components/layouts/AppShell/index";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

function IqiblaApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <AppShell>{page}</AppShell>);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { fbclid, ...cleanQuery } = router.query;
    if (fbclid) {
      router.replace(
        {
          pathname: router.pathname,
          query: cleanQuery,
        },
        undefined,
        { shallow: true }
      );
    }
  }, [router]);

  return getLayout(
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/assets/icon/logo.png" />

        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="language" content="id" />
        <meta name="description" content="Iqibla - Your ultimate app for prayer timings and Qibla direction" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; media-src 'self' https://cvf.shopee.co.id; connect-src 'self' https://www.google-analytics.com;" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta property="og:title" content="Iqibla" />
        <meta property="og:description" content="Iqibla - Your ultimate app for prayer timings and Qibla direction" />
        <meta property="og:image" content="https://www.iqibla-indonesia.com/assets/icon/logo.png" />
        <meta property="og:url" content="https://www.iqibla-indonesia.com" />

        {/* Allow iframe in Instagram/Telegram */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta httpEquiv="X-Frame-Options" content="ALLOWALL" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://cvf.shopee.co.id" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://cvf.shopee.co.id" />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-35CBZ0NB70"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-35CBZ0NB70');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default IqiblaApp;
