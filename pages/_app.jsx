// _app.js

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import AppShell from "../components/layouts/AppShell/index";

function IqiblaApp({ Component, pageProps }) {
  // Use the page's layout if available, otherwise default to AppShell
  const getLayout = Component.getLayout || ((page) => <AppShell>{page}</AppShell>);

  return getLayout(<Component {...pageProps} />);
}

export default IqiblaApp;
