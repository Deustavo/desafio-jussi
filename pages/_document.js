import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;700&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="https://jussi.com.br/br.com.jussi/img/favicon.ico" />
          
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="https://desafio-jussi.vercel.app/" />
          <meta property="og:title" content="Jüssi | The Business Agency." />
          <meta property="og:site_name" content="Jüssi" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument