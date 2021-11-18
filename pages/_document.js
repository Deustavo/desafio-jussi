import Document, { Html, Head, Main, NextScript } from 'next/document'

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Jüssi | The Business Agency.</title>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
          <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;700&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="https://jussi.com.br/br.com.jussi/img/favicon.ico" />
          
          <meta property="og:locale" content="pt_BR" />
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