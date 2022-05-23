import { AppProps } from 'next/app';
import Head from 'next/head';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AF Windows</title>
      </Head>

      <main>
        {/*<aside>*/}
        {/*  <Sidebar />*/}
        {/*</aside>*/}

        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
