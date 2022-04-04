import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/footer';

const About = () => {
  const owner = 'Dr. Evan P. Welfare, DC';
  const aboutOwner =
    'My name is Dr. Evan P. Welfare, DC. I am a Board Certified Chiropractic Physician in the state of Florida, with an emphasis on musculoskeletal spinal disorders and postural correction. I will take a thorough case history and go over a report of findings with you in order to determine the best care plan for you as an individual. My approach is designed to meet your needs through a number of services: Chiropractic manipulation, myofascial release, mechanical traction and rehabilitative techniques.';
  const edOne =
    'Bachelor of Arts in English at The Florida State University Class of 2005';
  const edTwo = 'Doctor of Chiropractic at Life University Class of 2015';
  const yrsPracticing = 'Years Practicing: 7';

  return (
    <>
      <Head className='page__header'>
        <title>About Us</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossorigin='anonymous'
        ></link> */}
      </Head>

      {/* <h1>About us</h1> */}
      {/* <h3>{companySlogan}</h3> */}
      {/* <p>{subSlogan}</p> */}
      {/* <p>{aboutService}</p> */}

      <div className='page'>
        <div className='container container--medium'>
          <div className='section about-page'>
            {/* <div className='has-cover'> */}
            {/* <img className='cover-img' src='/family_photo.avif' alt='' /> */}
            {/* </div> */}
            <div className='owner-content'>
              <h4>{owner}</h4>
              <p>{aboutOwner}</p>
              <p>
                <h5>Education:</h5>
                <ul>
                  <li>{edOne}</li>
                  <li>{edTwo}</li>
                  <li>{yrsPracticing}</li>
                </ul>
              </p>
            </div>
            <div>
              <img className='' src='/family_photo.avif' alt='' />
            </div>
          </div>
          {/* <Link href='/'>
          <a className='btn btn-light'>Go back home</a>
        </Link> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
