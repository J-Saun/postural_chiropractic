import React from 'react';
import Router from 'next/router';
// import _ from 'lodash';
import Logo from './logo';

import { Link, withPrefix, classNames, getPageUrl } from '../utils';
// import Action from './Action';
// import Icon from './Icon';

export default function Header(props) {
  const logoWidth = 70;
  const logoHeight = 70;
  const attrs = '';
  return (
    <header className='site-header py-2'>
      <div className='container'>
        <nav className='navbar flex items-center' aria-label='Main Navigation'>
          <div className='navbar__logo m-0 mr-2'>
            <Logo width={logoWidth} height={logoHeight} />
          </div>
          <div className='navbar__title h4 m-0'>
            <span>Postural</span>
            <span>Chiropractic</span>
          </div>
          <Link className='sr-only' href='#content'>
            Skip to main content
          </Link>
          <div className='navbar__branding mr-2'>
            {/* {logo ? ( */}
            {/* <Link className='navbar__logo m-0' href='/'>
              logo
              {/* <img src={withPrefix(logo)} alt={logoAlt} /> */}
            {/* </Link> */}
            {/* // ) : (
            //   <Link className='navbar__title h4 m-0' href={withPrefix('/')}>
            //     {title}
            //   </Link>
            // )} */}
          </div>
          {/* {((hasPrimaryNav && !_.isEmpty(primaryNavLinks)) ||
            (hasSecondaryNav && !_.isEmpty(secondaryNavLinks))) && ( */}
          <>
            <div className='navbar__container flex-md-auto'>
              <div className='btn-group justify-center items-center'>
                <Link href={'/'} {...attrs} className={'navbar-link'}>
                  Home
                </Link>
                <Link className={'navbar-link'} href='/about'>
                  About
                </Link>{' '}
                <Link className={'navbar-link'} href='/services'>
                  Services
                </Link>{' '}
                <Link className={'navbar-link'} href='/contact'>
                  Contact
                </Link>
              </div>
              <div className='navbar__scroller'>
                <div className='navbar__inner'>
                  <button
                    aria-label='Close'
                    className='btn btn--icon btn--clear navbar__close-btn'
                    //   onClick={this.handleMenuToggle.bind(this)}
                  >
                    {/* <Icon icon={'close'} /> */}
                    <span className='sr-only'>Close</span>
                  </button>
                  {/* <div className='navbar__menu flex-md'>
                      {hasPrimaryNav &&
                        !_.isEmpty(primaryNavLinks) &&
                        this.renderNavLinks(primaryNavLinks, pageUrl)}
                      {hasSecondaryNav &&
                        !_.isEmpty(secondaryNavLinks) &&
                        this.renderNavLinks(secondaryNavLinks, pageUrl)}
                    </div> */}
                </div>
              </div>
            </div>
            <button
              aria-label='Menu'
              className='btn btn--icon btn--clear navbar__menu-btn ml-auto'
              // ref={this.menuOpenRef}
              // onClick={this.handleMenuToggle.bind(this)}
            >
              {/* <Icon icon={'menu'} /> */}
              <span className='sr-only'>Menu</span>
            </button>
          </>
          {/* )} */}
        </nav>
      </div>
    </header>
  );
}
