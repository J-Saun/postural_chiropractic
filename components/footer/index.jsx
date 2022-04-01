import Logo from '../logo';
import PhoneIcon from '../icons';
import Link from '../buttons/Link';

export default function Footer() {
  const phone = '(904)330-4727';
  const fax = '(904)330-4727';
  const email = 'dcwelfare@gmail.com';
  const days = 'Monday - Friday';
  const hours = '9:00 AM - 6:00 PM';
  const hoursMsg = 'Extended hours upon request';
  const streetAddress = '1543 Kingsley Ave Bldg. 12';
  const cityStateZip = 'Orange Park, Fl 32073';

  return (
    <footer className='site-footer mode-dark'>
      <div className='site-footer__nav py-3 py-md-4'>
        <div className='container '>
          <div className={'justify-md-center'}>
            <Link href={'/'}></Link>
          </div>
        </div>
      </div>

      <div className='container flex flex-wrap justify-around items-center text-center'>
        {/* <div className='flex flex-wrap justify-around items-center text-center'> */}
        <Logo width={'300'} />
        <div>
          <div>
            <ul className={'p-3'}>
              <li>
                <PhoneIcon />
                <a> {phone}</a>
              </li>
              <li>
                fax:<a> {fax}</a>
              </li>
              <li>
                email:<a> {email}</a>
              </li>
            </ul>
            <div className={'p-3'}>
              <h4>{days}</h4>
              <p>{hours}</p>
              <p>{hoursMsg}</p>
            </div>
          </div>
        </div>
        <div>
          <div className={'p-3'}>
            <p>{streetAddress}</p>
            <p>{cityStateZip}</p>
          </div>
          <div classNames={'site-footer__social p-3'}>
            <i>icon</i>
            <i>icon</i>
            <i>icon</i>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}
