import "../styles/index.scss";
import Head from 'next/head';

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { SearchProvider } from "../provider/search";

function MyApp({ Component, pageProps }) {
  return <>
    <SearchProvider>
      <Head>
        <title>Jüssi | The Business Agency.</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SearchProvider>
  </>
}

export default MyApp
