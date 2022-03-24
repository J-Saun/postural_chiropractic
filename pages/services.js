import Link from 'next/link';

const Services = () => {
  return (
    <div className="container bg-success page">
      <h1>Services</h1>
      <p>Services page cards</p>
      <Link href="/">
        <a className="btn btn-light">Go back home</a>
      </Link>
    </div>
  );
};

export default Services;
