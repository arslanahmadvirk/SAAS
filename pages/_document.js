/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
        />
      </Head>
      <body>
        {/* <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"></script> */}
        <Main />
        <NextScript />
        <Script
          id="googlemaps"
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"
        />
      </body>
    </Html>
  );
}

export default Document;
