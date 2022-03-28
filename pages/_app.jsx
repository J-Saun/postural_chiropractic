// import '../styles.scss';
import Layout from '../components/layout';
import '/stylesheets/main.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
