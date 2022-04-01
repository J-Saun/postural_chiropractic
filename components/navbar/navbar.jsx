import Image from 'next/image';
import Link from '../buttons/Link';
import Logo from '../logo';

export default function Navbar() {
  const logoWidth = 70;
  const logoHeight = 70;
  // Company Name
  const brandFirst = 'Postural';
  const brandLast = 'Chiropractic';
  const attrs = '';

  return (
    <nav class='container navbar navbar-expand-lg navbar-light bg-light'>
      <div className='navbar__logo mr-2'>
        <Logo width={logoWidth} height={logoHeight} />
      </div>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarTogglerDemo01'
        aria-controls='navbarTogglerDemo01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse ' id='navbarTogglerDemo01'>
        <div className='navbar__title h4 m-0 navbar-brand'>
          <a className='navbar-brand' href='#'>
            <span>{brandFirst}</span>
            <span>{brandLast}</span>
          </a>
        </div>
        <div className='navbar-nav ml-auto mt-2 mt-lg-0'>
          <Link href={'/'} {...attrs} className={'nav-item active'}>
            Home
          </Link>
          <Link className={'nav-item'} href='/about'>
            About
          </Link>{' '}
          <Link className={'nav-item'} href='/services'>
            Services
          </Link>{' '}
          <Link className={'nav-item'} href='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
