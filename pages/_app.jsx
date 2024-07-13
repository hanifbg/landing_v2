import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";

import AppShell from "../components/layouts/AppShell/index,";

export default function IqiblaApp({ Component, pageProps }) {
  return (
    <AppShell>
      <Component {...pageProps}></Component>
    </AppShell>
  );
}
