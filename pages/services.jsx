import Link from 'next/link';
import { CardOne, CardTwo, CardThree } from '../components/cards/cards';

const Services = () => {
  // Page Content
  const cards = [
    {
      title: 'Service One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Quis vel eros donec ac odio tempor orci dapibus ultrices.',
      price: 50,
      button: 'Schedule Now',
    },
    {
      title: 'Service Two',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque gravida in fermentum et sollicitudin ac. Arcu non odio euismod lacinia at.',
      price: 100,
      button: 'Schedule Now',
    },
    {
      title: 'Service Three',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin. Eu turpis egestas pretium aenean.',
      price: 150,
      button: 'Schedule Now',
    },
  ];

  return (
    <div className='container bg-success page'>
      <h1>Services</h1>
      <p>Card Set 1</p>
      {cards.map(({ title, description, price, button, key }) => (
        <CardOne title={title} description={description} price={price} />
      ))}
      <p>Card Set 2</p>
      {cards.map(({ title, description, price, button, key }) => (
        <CardTwo title={title} description={description} price={price} />
      ))}
      <p>Card Set 3</p>
      {cards.map(({ title, description, price, button, key }) => (
        <CardThree title={title} description={description} price={price} />
      ))}

      <Link href='/'>
        <a className='btn btn-light'>Go back home</a>
      </Link>
    </div>
  );
};

export default Services;
