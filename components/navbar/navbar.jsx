import Link from 'next/dist/client/link';
import Image from 'next/image';

// import styles from './navbar.module.scss';

// current logo image path
import logo from '/public/logo/logo_thin_band_darkened.svg';

export default function Navbar() {
  const logoWidth = 70;
  const logoHeight = 70;

  return (
    <div id='container'>
      <nav className='navbar'>
        <div className='logo'>
          <a href='/'>
            <Image
              src={logo}
              alt='Company Logo'
              width={logoWidth}
              height={logoHeight}
            />
          </a>
          <div>
            <div className='topName'>Postural</div>
            <div className='bottomName'>Chiropractic</div>
          </div>
        </div>
        <div className='nav-links'>
          <Link href='/about'>
            <a className='link'>About</a>
          </Link>{' '}
          <Link href='/services'>
            <a className='link'>Services</a>
          </Link>{' '}
          <Link href='/contact'>
            <a className='link'>Contact</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
