import Link from 'next/dist/client/link';
import Script from 'next/script';

import Head from 'next/head';
import { SectionBg } from '../components/sectionBackground';
import {
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
} from '../components/cards/cards';
import Hero from '../components/hero';
import Quote from '../components/section/quote';
import Info from '../components/section/info';
import InfoReverse from '../components/section/info-reverse';
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

  const infoOne = `Here at Postural Chiropractic, we customize every individual care plan to meet your needs. The key is to identify the root cause of your health issue/s that you're facing, not to put a “band-aid on it” (masking the symptoms), and send you on your way.`;
  const infoTwo =
    'We will take the time to address your concerns so you feel confident when leaving the office.';
  const gymCTA =
    'Getting in shape is important when it comes to your health. We have partnered with Training Evolved to enhance our wellness goals.';
  const supplementCTA =
    'Check out this great line of wellness products! For more details check out the website and feel free to inquire during your next visit.';

  const subSlogan =
    'Chiropractic adjustment to align the spine and restore proper posture in order to relieve nerve interference within the nervous and musculoskeletal system';
  const aboutService =
    'The Chiropractic adjustment is a means to restore proper posture and relieve nerve interference within the nervous and musculoskeletal system. Relieving nerve interference can help with ';

  const cards = [
    {
      title: 'Graston Technique',
      description: '',
      // description: 'Soft-tissue instrument-assisted mobilization.',
      includes1: 'Consultation',
      includes2: 'Postural Analysis',
      includes3: 'Chiropractic Alignment',
      includes4: 'Soft Tissue Mobilization',
      oldPrice: '$150',
      price: '$75',
      priceUnit: ' per visit',
      key: 1,
    },
    {
      title: 'New Patient Special',
      // description: 'For first time patients',
      includes1: 'Consultation & Exam',
      includes2: 'Postural Analysis',
      includes3: 'Chiropractic Alignment',
      includes4: 'Vibro-Massage Treatment',
      includes5: 'X-ray if required is handled out of office',
      oldPrice: '$120',
      price: '$40',
      priceUnit: ' (first visit only)',

      key: 2,
    },
    {
      title: 'Wellness Plan Subscription',
      description: 'Subscribe to our  wellness plan for even better prices!',
      includes1: 'Chiropractic Therapy',
      includes2: 'Chiropractic Alignment',
      includes3: 'Vibro-Massage',
      includes4: 'Includes 1 visit per week. Each additional visit only $20!',
      price: '$100',
      priceUnit: ' per month (2 mo. min)',
      key: 3,
    },
    // {
    //   title: 'Service Four',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin. Eu turpis egestas pretium aenean.',
    //   price: 'Call For Pricing',
    //   priceUnit: '',
    //   key: 4,
    // },
  ];
  return (
    <>
      <Head
      // className='page__header'
      >
        <title>Postural Chiropractic</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <Script
          type='text/javascript'
          src='./public/javascripts/animations.js'
        />
        {/* <Script type='text/javascript' src='./assets/js/main.js' /> */}
      </Head>
      <div className=''>
        <Hero
          img={heroImg}
          title={heroTitle}
          subtitle={heroSubTitle}
          // content={heroContent}
        />
        <Quote />
        {/* <div className='break-line container' /> */}
        <Info id='about' content={infoOne} img={'/checkup-female.jpg'} />
        <InfoReverse content={infoTwo} img={'/yoga-female.jpg'} />
        <CTA content={gymCTA} />
        <div id='services' className='container card-wrapper'>
          {cards.map(
            ({
              title,
              description,
              price,
              priceUnit,
              includes1,
              includes2,
              includes3,
              includes4,
              button,
              key,
            }) => (
              <CardOne
                // className='price-card'
                title={title}
                description={description}
                price={price}
                priceUnit={priceUnit}
                includes1={includes1}
                includes2={includes2}
                includes3={includes3}
                includes4={includes4}
                key={key}
              />
            )
          )}
        </div>
        <CTA content={supplementCTA} />

        <Footer />
      </div>
    </>
  );
}

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
