import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to yai!</title>
      </Head>
      <main className="bg-slate-700 h-screen w-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
