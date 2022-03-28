import Link from 'next/link';
import Head from 'next/head';
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
    },
    {
      title: 'Service Two',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque gravida in fermentum et sollicitudin ac. Arcu non odio euismod lacinia at.',
      price: '$100',
      priceUnit: ' per visit',
    },
    {
      title: 'Service Three',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin. Eu turpis egestas pretium aenean.',
      price: '$150',
      priceUnit: ' per month',
    },
    {
      title: 'Service Four',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin. Eu turpis egestas pretium aenean.',
      price: 'Call For Pricing',
      priceUnit: '',
    },
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
      <Head>
        <title>Services</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='services-page'>
        <h2>Card Set 1</h2>
        <div className='card-group'>
          {cards.map(
            ({ title, description, price, priceUnit, button, key }) => (
              <CardOne
                title={title}
                description={description}
                price={price}
                priceUnit={priceUnit}
              />
            )
          )}
        </div>
        <h2>Card Set 2</h2>
        <div className='card-group'>
          {cards.map(
            ({ title, description, price, priceUnit, button, key }) => (
              <CardTwo
                title={title}
                description={description}
                price={price}
                priceUnit={priceUnit}
              />
            )
          )}
        </div>

        <h2>Card Set 3</h2>
        <div className='card-group'>
          {cards.map(
            ({ title, description, price, priceUnit, button, key }) => (
              <CardThree
                title={title}
                description={description}
                price={price}
                priceUnit={priceUnit}
              />
            )
          )}
        </div>
        <Link href='/'>
          <a className='btn btn-light'>Go back home</a>
        </Link>
      </div>
    </>
  );
};

export default Services;
