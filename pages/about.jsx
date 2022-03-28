import Link from 'next/link';
import Head from 'next/head';

const About = () => {
  return (
    <div className='about-page'>
      <Head>
        <title>About Us</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h1>About us</h1>
      <h3>Dr. Evan P. Welfare, DC</h3>
      <h5>
        Here at Postural Chiropractic we provide therapeutic modalities to help
        the recovery and healing process.
      </h5>
      <p>
        Chiropractic adjustment to align the spine and restore proper posture in
        order to relieve nerve interference within the nervous and
        musculoskeletal system.
      </p>
      <p>
        Write about yourself here: Dr. Evan P. Welfare, DC is a Board Certified
        Chiropractic Physician in the state of Florida with an emphasis on
        musculoskeletal spine disorders and postural correction by utilizing
        chiropractic manipulation, myofascial release, and rehabilitative
        techniques. Dr. Welfare is a graduate of Blank College of Chiropractic
        in City, State. He completed his Doctor of Chiropractic degree in August
        of 2006 and currently practices in the Orange Park area. Dr. Welfare has
        an evidence based practice that utilizes the latest research in
        biomechanics, nutrition, rehabilitation, and treatment protocols. He
        combines this unique skill set to provide the highest quality of care
        for his patients.
        <h5>Education:</h5>
        <ul>
          <li>BS, (This) University DC, Logan University</li>
          <li>Years Practicing: 10</li>
        </ul>
        <h5>Memberships & Associations:</h5>
        <ul>
          <li>
            Example: Associations Florida Chiropractic Physicians
            Association(2010) Florida
          </li>
          <li>Example: Chiropractic Association(2006)</li>
          <li>Example: Another Association(2006)</li>
        </ul>
      </p>
      <Link href='/'>
        <a className='btn btn-light'>Go back home</a>
      </Link>
    </div>
  );
};

export default About;
