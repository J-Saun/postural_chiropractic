import Link from 'next/dist/client/link';
import Head from 'next/head';

export default function Home() {
  const header = 'Auto Accident Specialist, Spinal Rehab and Wellness Care';
  const subHeader = 'Nature needs no help, just no interference.';

  return (
    <div className='home-page'>
      <Head>
        <title>Postural Chiropractic</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='container'>
        <h1>{header}</h1>
        <h2>{subHeader}</h2>
      </div>
    </div>
  );
}
