import '../styles/globals.css'

import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';

// import aos styles
import 'aos/dist/aos.css';

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

  return (<>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="google-site-verification" content="oBBIMFWApUZ3BcN2IAf42CUJU94PjCrceLQUuiH-d6M" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#25294A" />
      <meta name="description" content="dsfghj" />
      <meta name="twitter:site" content="@herukan" />
      <meta name="twitter:creator" content="@herukan" />
      <meta property="keywords" content="Herukan, Herukan Bot, Discord Bot, Discord Chat, Bots, Music, Moderation, Community, Gaming, Discord, Developers, Bot list, Herukan.xyz" />
    </Head>

    <Component {...pageProps} />
  </>
  )
}