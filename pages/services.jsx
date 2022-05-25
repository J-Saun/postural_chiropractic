import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/footer';
import {
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
} from '../components/cards/cards';

// import styles from '../components/cards/cards.module.scss';

const Services = () => {
  // Page Content
  const cards = [
    {
      title: 'New Patient Special',
      description: 'If this is your first visit Lorem ipsum dolor sit amet!',
      includes1: 'Chiropractic Therapies',
      includes2: 'Consultation',
      includes3: 'Postural Analyses',
      oldPrice: '$120',
      price: '$40',
      priceUnit: ' 1st visit',
      key: 1,
    },
    {
      title: ' Graston Technique',
      description:
        'A form of manual therapy known as soft-tissue instrument-assisted mobilization.',
      includes1: 'Vibratory Massage Treatment',
      includes2: 'Chiropractic Alignment',
      includes3: '',
      oldPrice: null,
      price: '$75',
      priceUnit: ' per visit',
      key: 2,
    },
    {
      title: 'Wellness Plan',
      description: 'Subscribe to our  wellness plan for even better prices!',
      includes1: 'Chiropractic Therapy',
      includes2: 'Alignment',
      includes3: 'Vibratory Massage',
      price: '$100',
      priceUnit: ' per month',
      note: '2 Month Minimum',
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

  //   SERVICES
  // Conditions Treated:
  // Neck PainLower Back PainSports InjuriesSciaticaShoulder Injuries
  // Procedures
  // Spinal Manipulation: Hands-on adjusting, Flexion-Distraction
  // Spinal Decompression: Dedicated spinal decompression equipment.
  // Massage Therapy: Multiple Massage Therapists

  return (
    <>
      <Head className='page__header'>
        <title>Services</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossorigin='anonymous'
        ></link> */}
      </Head>
      <div className='services-page'>
        {/* <h2>Card Set 1</h2> */}
        <div className='container card-wrapper'>
          {cards.map(
            ({ title, description, price, priceUnit, button, key }) => (
              <CardOne
                // className='price-card'
                title={title}
                description={description}
                price={price}
                priceUnit={priceUnit}
                key={key}
              />
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
