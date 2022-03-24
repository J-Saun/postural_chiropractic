import Link from 'next/link';

const Contact = () => {
  return (
    <div className="container bg-success page">
      <h1>Contact us</h1>
      <p>contact page and forms</p>
      <Link href="/">
        <a className="btn btn-light">Go back home</a>
      </Link>
    </div>
  );
};

export default Contact;
