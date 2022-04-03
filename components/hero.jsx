import Image from 'next/image';
import { CTAButton } from './buttons/button';

export default function Hero(props) {
  const classes = 'hero-wrapper bg-primary-gradient';

  const { img, title, subtitle, content } = props;

  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero-img fade-in'>
          <Image
            src={img}
            alt='Picture of the author'
            width='750px'
            height='500px'
            layout='responsive' // layout="fill", layout="intrinsic"
          />
        </div>
        <div className='hero-content'>
          <h1 className='hero__title mb-4'>{title}</h1>
          <p className='hero__subtitle mb-4'>{subtitle}</p>
          <CTAButton href={'services'} label={'Call To Action'} />
        </div>
      </div>
    </section>
  );
}
