// Import external CSS for libraries
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import global styles
import "../styles/globals.css";
// Import components
import AppShell from "../components/layouts/AppShell/index";

// Define the main App component
export default function IqiblaApp({ Component, pageProps }) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}