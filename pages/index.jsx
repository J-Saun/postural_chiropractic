import Link from 'next/dist/client/link';
import Head from 'next/head';
import { SectionBg } from '../components/sectionBackground';
import Hero from '../components/hero';
import Quote from '../components/section/quote';
import Footer from '../components/footer';
import CTA from '../components/section/cta';

export default function Home() {
  // Hero
  const heroImg = '/elder_golfer.jpg';
  // const heroImg = '#';
  const heroTitle = 'Auto Accident Specialist, Spinal Rehab and Wellness Care';
  const heroSubTitle = 'Nature needs no help, just no interference.';
  const heroContent = '';
  const header = 'Auto Accident Specialist, Spinal Rehab and Wellness Care';
  const subHeader = 'Nature needs no help, just no interference.';
  const quote = [
    'The ',
    'preservation ',
    'of ',
    'health ',
    'is ',
    'easier ',
    'than ',
    'the ',
    'cure ',
    'of ',
    'disease.',
    '- B.J. Palmer',
  ];
  // const quoteAuthor = '- B.J. Palmer';

  const pledge =
    'Here at Postural Chiropractic, we customize every individual care plan to meet your needs. The key is to identify the root cause of your health issue/s your facing, not to put a “band-aid on it” (masking the symptoms), and send you on your way. We will take the time to address your concerns so you feel confident when leaving the office.';

  const supplementCTA =
    'Check out this great line of supplements. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';

  const subSlogan =
    'Chiropractic adjustment to align the spine and restore proper posture in order to relieve nerve interference within the nervous and musculoskeletal system';
  const aboutService =
    'The Chiropractic adjustment is a means to restore proper posture and relieve nerve interference within the nervous and musculoskeletal system. Relieving nerve interference can help with ';

  return (
    <>
      <Head
      // className='page__header'
      >
        <title>Postural Chiropractic</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossorigin='anonymous'
        ></link>
      </Head>
      <div className=''>
        <Hero
          img={heroImg}
          title={heroTitle}
          subtitle={heroSubTitle}
          // content={heroContent}
        />
        <Quote />

        <Footer />
      </div>
    </>
  );
}
{
  /* <div className=''>
         
          <Quote quote={quote} quoteAuthor={quoteAuthor} />
          {/* <section className='section'>
          <div className='hero'>
          <img className='hero__media' src='/elder_golfer.avif' />
          <h1 className='hero__title'>{header}</h1>
            <div className='section__subtitle'>
            <p className='hero__subtitle'>{subHeader}</p>
            </div>
            <div className='hero__copy'>{quote}</div>
            <button className='hero__actions'>CTA</button>
            </div>
          </section> */
}
{
  /* <div className='has-cover'>
          <img className='cover-img' src='/elder_golfer.avif' />
        </div> */
}
{
  /* <div className='pledge container--large mt-6'> */
}
//   <div>
//     <img src='/elder_golfer.jpg' />
//     <div className='pledge-content'>{pledge}</div>
//   </div>
//   <CTA content={supplementCTA} />
//   <section className='section container'>
//     <div>{pledge}</div>
//     <div>{subSlogan}</div>
//     <div>
//       {aboutService}
//       <ul>
//         <li>Neck & Back Pain</li>
//         <li>Sciatica</li>
//         <li>Sleep Disturbance</li>
//         <li>Breathing Difficulties Such as Asthma</li>
//         <li>Ear Infections</li>
//         <li>Bed-wetting</li>
//         <li>Sports-related Injuries</li>
//         <li>Automobile Injuries</li>

//         <li>Slip-and-fall Injuries</li>
//         <li>Migraines</li>
//         <li>Dizziness</li>
//         <li>Fatigue</li>
//         <li>Mental Clarity (brain fog)</li>
//         <li>Chemical, Physical and Emotional Stress</li>
//         <li>Depression</li>
//         <li>and Anxiety (to name a few)</li>
//       </ul>
//     </div>
//   </section>
// </div> */}
