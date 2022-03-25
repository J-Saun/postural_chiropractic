import Link from 'next/dist/client/link';
import Image from 'next/image';

import styles from './navbar.module.scss';

// current logo image path
import logo from '/public/logo/logo_thin_band_darkened.svg';

export default function Navbar() {
  const logoWidth = 70;
  const logoHeight = 70;

  return (
    <div id="container">
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <Image
              src={logo}
              alt="Company Logo"
              width={logoWidth}
              height={logoHeight}
            />
          </a>
          <div>
            <div className={styles.topName}>Postural</div>
            <div className={styles.bottomName}>Chiropractic</div>
          </div>
        </div>
        <ul>
          <li>
            <Link href="/about">
              <a className={styles.link}>About</a>
            </Link>{' '}
          </li>
          <li>
            <Link href="/services">
              <a className={styles.link}>Services</a>
            </Link>{' '}
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.link}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
