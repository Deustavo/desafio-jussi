import "../styles/index.scss";
import Head from 'next/head';

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Jüssi | The Business Agency.</title>
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
