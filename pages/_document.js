import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Iqibla - Your ultimate app for prayer timings and Qibla direction" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
