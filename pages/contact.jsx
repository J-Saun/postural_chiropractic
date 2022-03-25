import Link from 'next/link';

const Contact = () => {
  // Page Content
  const headline = 'Contact us';
  const subHeadline = 'Appointments Only';
  const phone = '(904)330-4727';
  const fax = '(904)330-4727';
  const email = 'dcwelfare@gmail.com';
  const days = 'Monday - Friday';
  const hours = '9:00 AM - 6:00 PM';
  const hoursMsg = 'Extended hours upon request';
  const streetAddress = '1543 Kingsley Ave Bldg. 12';
  const cityStateZip = 'Orange Park, Fl 32073';

  return (
    <div className="container page">
      <h1>{headline}</h1>
      <h3>{subHeadline}</h3>
      <div>
        <ul>
          <li>
            phone:<a> {phone}</a>
          </li>
          <li>
            fax:<a> {fax}</a>
          </li>
          <li>
            email:<a> {email}</a>
          </li>
        </ul>
        <div>
          <h4>{days}</h4>
          <p>{hours}</p>
          <p>{hoursMsg}</p>
        </div>
        <div>
          <p>{streetAddress}</p>
          <p>{cityStateZip}</p>
        </div>
      </div>

      <Link href="/">
        <a className="btn btn-light">Go back home</a>
      </Link>
    </div>
  );
};

export default Contact;
