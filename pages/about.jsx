import Link from 'next/link';

const About = () => {
  return (
    <div className="container page">
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
      <Link href="/">
        <a className="btn btn-light">Go back home</a>
      </Link>
    </div>
  );
};

export default About;
