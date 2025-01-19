import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import AppShell from "../components/layouts/AppShell/index";
import Head from "next/head";

function IqiblaApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <AppShell>{page}</AppShell>);

  return getLayout(
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/assets/icon/logo.png" />

        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Iqibla - Your ultimate app for prayer timings and Qibla direction" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Allow iframe in Instagram/Telegram */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta httpEquiv="X-Frame-Options" content="ALLOWALL" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-35CBZ0NB70"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-35CBZ0NB70');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default IqiblaApp;
