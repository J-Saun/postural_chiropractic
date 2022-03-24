import Link from 'next/link';

const Contact = () => {
  return (
    <div className="container bg-success page">
      <h1>Contact us</h1>
      <p>Appointments Only</p>
      <div>
        <ul>
          <li>
            phone:<a>(904)330-4727</a>
          </li>
          <li>
            fax:<a>(904)330-4727</a>
          </li>
          <li>
            email:<a>dcwelfare@gmail.com</a>
          </li>
        </ul>
        <div>
          <h4>Monday - Friday</h4>
          <p>9:00 AM - 6:00 PM</p>
          <p>Extended hours upon request</p>
        </div>
      </div>

      <Link href="/">
        <a className="btn btn-light">Go back home</a>
      </Link>
    </div>
  );
};

export default Contact;
