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
      title: 'Service One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Quis vel eros donec.',
      price: '$50',
      priceUnit: ' per visit',
      key: 1,
    },
    {
      title: 'Service Two',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque gravida in fermentum et sollicitudin ac. Arcu non odio euismod lacinia at.',
      price: '$100',
      priceUnit: ' per visit',
      key: 2,
    },
    {
      title: 'Service Three',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin. Eu turpis egestas pretium aenean.',
      price: '$150',
      priceUnit: ' per month',
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
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossorigin='anonymous'
        ></link>
      </Head>
      <div className='services-page'>
        <h2>Card Set 1</h2>
        <div className='container flex flex-wrap'>
          {cards.map(
            ({ title, description, price, priceUnit, button, key }) => (
              <CardOne
                title={title}
                description={description}
                price={price}
                priceUnit={priceUnit}
                key={key}
              />
            )
          )}
        </div>

        {/* <Link href='/'>
          <a className='btn btn-light'>Go back home</a>
        </Link> */}
      </div>
      <Footer />
    </>
  );
};

export default Services;
