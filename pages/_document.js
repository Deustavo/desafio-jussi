import Document, { Html, Head, Main, NextScript } from 'next/document'

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
          <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;700&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <body>
          <Main />
          <NextScript />
        </body>
        <Footer />
      </Html>
    )
  }
}

export default MyDocument