import { FillButton, PulseButton, CloseButton } from '../buttons/button';

export function CardOne(props) {
  const {
    title,
    description,
    includes1,
    includes2,
    includes3,
    priceUnit,
    price,
    note,
    href,
  } = props;

  // title: 'Wellness Plan',
  //     description: 'Subscribe to our  wellness plan for even better prices!',
  //     includes1: 'Chiropractic Therapy',
  //     includes2: 'Alignment',
  //     includes3: 'Vibratory Massage',
  //     price: '$100',
  //     priceUnit: ' per month',
  //     note: '2 Month Minimum',
  //     key: 3,

  return (
    // <div className='price-card'>
    //   <div className=''>
    //     <div className='header'>
    //       <h4>{title}</h4>
    //     </div>
    //     <div className='body'>
    //       <div className=''>
    //         <span className=''>{price}</span>
    //         <span className=''>{priceUnit}</span>
    //         <span>{note}</span>
    //       </div>
    //       <p>{description}</p>
    //       <div className='includes'>
    //         <ul>
    //           <li>{includes1}</li>
    //           <li>{includes2}</li>
    //           <li>{includes3}</li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* <div className='cta'>
    //       <FillButton href={href} />
    //     </div> */}
    //   </div>
    // </div>
    <div className='card-container'>
      <div class='card'>
        <a href={href}>
          <div class='card-header'>
            {/* <img
            src='https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg'
            alt='rover'
          /> */}
            <h3>{title}</h3>
            <div className=''>
              <span className='card-price'>{price}</span>
              <span className=''>{priceUnit}</span>
              <span>{note}</span>{' '}
            </div>
          </div>
          <div class='card-body'>
            {/* <span class='tag tag-teal'>Technology</span> */}
            <h4>{description}</h4>
            <ul>
              <li>{includes1}</li>
              <li>{includes2}</li>
              <li>{includes3}</li>
            </ul>
            {/* <div class='user'>
              <img
                src='https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo'
                alt='user'
              />
              <div class='user-info'>
                <h5>July Dec</h5>
                <small>2h ago</small>
              </div>
            </div> */}
          </div>
        </a>
      </div>
    </div>
  );
}

export function CardTwo(props) {
  const { title, description, price, priceUnit, href } = props;

  return (
    // <div className='card cardTwo'>
    //   <div className='box'>
    //     <div className='glass'></div>
    //     <div className='content'>
    <div>
      <div>
        <div>
          <h3>{title}</h3>
          <div className='priceContainer'>
            <span className='price'>{price}</span>
            <span className='priceUnit'>{priceUnit}</span>
          </div>
          <p>{description}</p>
          {/* <PulseButton href={href} /> */}
        </div>
      </div>
    </div>
  );
}

export function CardThree(props) {
  const { title, description, price, priceUnit, href } = props;

  return (
    // <div className='card card-three shadow-sharp'>
    //   <div className='card-content'>
    <div>
      <div>
        <div className='header'>
          <h2>{title}</h2>
          <hr />
        </div>

        <div className='body'>
          <div className='price-container'>
            <span className='price'>{price}</span>
            <span className='priceUnit'>{priceUnit}</span>
          </div>
          <p>{description}</p>
        </div>

        <div className='footer'>
          <PulseButton href={href} />
        </div>
      </div>
    </div>
  );
}
