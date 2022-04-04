import Logo from '../logo';
import Icon from '../icons';

export default function Footer() {
  const phone = '(904)330-4727';
  const fax = '(904)375-1170';
  const email = 'dcwelfare@gmail.com';
  const days = 'Monday - Friday';
  const hours = '9:00 AM - 6:00 PM';
  const hoursMsg = 'Extended hours upon request';
  const streetAddress = '1543 Kingsley Ave Bldg. 12';
  const cityStateZip = 'Orange Park, Fl 32073';

  // <Logo width={'100'} />

  return (
    <footer className='footer'>
      {/* Social Links Top Row*/}
      <div className='group mx-auto'>
        <div className='social-showcase'>
          <div>
            <Icon
              width={'50px'}
              height={'50px'}
              src={'images/icons/facebook-line.svg'}
              color={'filter-primary'}
            />
          </div>
          <div>
            <Icon
              width={'50px'}
              height={'50px'}
              src={'images/icons/instagram-line.svg'}
              color={'filter-primary'}
            />
          </div>
          <div>
            <Icon
              width={'50px'}
              height={'50px'}
              src={'images/icons/linkedin-line.svg'}
              color={'filter-primary'}
            />
          </div>
        </div>
      </div>
      {/* Footer Body Content */}
      <div className='content'>
        {/* Contact Info */}
        <div className='group'>
          <div className='footer-title'>
            <span className=''>Contact Info</span>
          </div>
          <a>
            <div className='icon-wrapper'>
              <Icon
                width={'40px'}
                height={'40px'}
                src={'images/icons/phone-fill.svg'}
                color={'filter-white'}
              />
            </div>
            <span className='highlight my-auto'>{phone}</span>
          </a>
          <a>
            <div className='icon-wrapper'>
              <Icon
                width={'40px'}
                height={'40px'}
                src={'images/icons/printer-fill.svg'}
                color={'filter-white'}
              />
            </div>
            <span className='my-auto'>{fax}</span>
          </a>
          <div className=''>
            <a>
              <div className='icon-wrapper'>
                <Icon
                  width={'40px'}
                  height={'40px'}
                  src={'images/icons/mail-line.svg'}
                  color={'filter-white'}
                />
              </div>
              <span className='my-auto'>{email}</span>
            </a>
          </div>
        </div>
        <div>
          {/* Schedule Hours */}
          <div className='group'>
            <div className='footer-title'>
              <span className=''>Schedule</span>
            </div>
            <h4>{days}</h4>
            <span>{hours}</span>
            <p>{hoursMsg}</p>
          </div>
        </div>
        {/* Location Info */}
        <div className='group'>
          <div className=''>
            <div className='footer-title'>
              <span className=''>Location</span>
            </div>
            <a>
              <div className='mr-3 my-auto'>
                <Icon
                  width={'40px'}
                  height={'40px'}
                  src={'images/icons/map-pin-fill.svg'}
                  color={'filter-white'}
                />
              </div>
              <div className=''>
                <span className='highlight d-block'>{streetAddress}</span>
                <span className=''>{cityStateZip}</span>
              </div>
            </a>
          </div>
        </div>
        {/* Site Nav Links */}
        <div className='group'>
          <div className='footer-title'>
            <span className=''>Site Navigation</span>
          </div>
          <div>
            <a href='#'>FAQ</a>
            <a href='#'>Pricing</a>
            <a href='#'>Referral program</a>
            <a href='#'>Affiliates</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// <Icon
//   width={'40px'}
//   height={'40px'}
//   src={'images/icons/copyright-fill.svg'}
//   color={'filter-white'}
// />
