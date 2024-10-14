// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz@0,9..40;1,9..40&family=Outfit:wght@100..900&display=swap"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        ></meta>

        <title>DNAHANI | EB-5 International Regional Center</title>
        <meta
          name="description"
          content="DHANANI EB-5 International is a Texas-based Regional Center with over 14 years of profitable and zero losses experience in real estate developing and investing."
        ></meta>

        <meta
          property="og:url"
          content="https://next-dha-luwo.vercel.app/"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="DNAHANI | EB-5 International Regional Center"
        ></meta>
        <meta
          property="og:description"
          content="DHANANI EB-5 International is a Texas-based Regional Center with over 14 years of profitable and zero losses experience in real estate developing and investing."
        ></meta>
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/37bfcb4a-d104-4f1c-98a9-f5468bc1a467.jpg?token=qj5WU_dEfXBHLkdOp4DWjUp4A5nIm4o9q5ZV8SB9mJs&height=800&width=1200&expires=33264917098"
        ></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:domain"
          content="next-dha-luwo.vercel.app"
        ></meta>
        <meta
          property="twitter:url"
          content="https://next-dha-luwo.vercel.app/"
        ></meta>
        <meta
          name="twitter:title"
          content="DNAHANI | EB-5 International Regional Center"
        ></meta>
        <meta
          name="twitter:description"
          content="DHANANI EB-5 International is a Texas-based Regional Center with over 14 years of profitable and zero losses experience in real estate developing and investing."
        ></meta>
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/37bfcb4a-d104-4f1c-98a9-f5468bc1a467.jpg?token=qj5WU_dEfXBHLkdOp4DWjUp4A5nIm4o9q5ZV8SB9mJs&height=800&width=1200&expires=33264917098"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
