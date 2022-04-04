// import '../styles.scss';
// import Script from 'next/script';
// import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/stylesheets/master.scss';
import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   typeof document !== undefined
  //     ? require('bootstrap/dist/js/bootstrap')
  //     : null;
  // }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
