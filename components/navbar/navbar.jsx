import Link from '../buttons/Link';
import Logo from '../logo';

export default function Navbar() {
  const logoWidth = 70;
  const logoHeight = 70;
  // Company Name
  const brandFirst = 'Postural ';
  const brandLast = 'Chiropractic';
  const attrs = '';

  return (
    <nav className='container--large navbar sticky-top navbar-expand-md navbar-light'>
      <div className='container'>
        <div className='navbar__logo mr-2'>
          <Logo width={logoWidth} height={logoHeight} />
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarToggler'
          aria-controls='navbarToggler'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse  text-center'
          id='navbarToggler'
        >
          <div className='navbar__title h4 m-0 navbar-brand'>
            {/* <a className='navbar-brand' href='#'> */}
            <span>{brandFirst}</span>
            <span>{brandLast}</span>
            {/* </a> */}
          </div>
          <div className='navbar-nav  navbar__menu ml-auto mt-2 mt-lg-0'>
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
      </div>
    </nav>
  );
}
