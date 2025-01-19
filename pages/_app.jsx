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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default IqiblaApp;
