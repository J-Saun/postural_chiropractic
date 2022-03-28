import Link from 'next/link';
import Head from 'next/head';

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
    <div className='contact-page'>
      <Head>
        <title>Contact Us</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
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
      <p>
        Make An Appointment For A Free Consultation North Florida Chiropractic
        Physical Therapy is a leading provider of Orange Park chiropractic
        services. Call us today to schedule your free consultation and begin
        your custom treatment plan.
      </p>
      <Link href='/'>
        <a className='btn btn-light'>Go back home</a>
      </Link>
    </div>
  );
};

export default Contact;
