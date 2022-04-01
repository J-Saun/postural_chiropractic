import { FillButton, PulseButton, CloseButton } from '../buttons/button';

export function CardOne(props) {
  const { title, description, price, priceUnit, href } = props;

  return (
    <div className='style-classic'>
      <div className='card card--highlight '>
        <div className=''>
          <p>{title}</p>
        </div>
        <div className=''>
          <div className=''>
            <span className=''>{price}</span>
            <span className=''>{priceUnit}</span>
          </div>
          <p>{description}</p>
        </div>

        <div className=''>
          <FillButton href={href} />
        </div>
      </div>
    </div>
  );
}

export function CardTwo(props) {
  const { title, description, price, priceUnit, href } = props;

  return (
    <div className='card cardTwo'>
      <div className='box'>
        <div className='glass'></div>
        <div className='content'>
          <h3>{title}</h3>
          <div className='priceContainer'>
            <span className='price'>{price}</span>
            <span className='priceUnit'>{priceUnit}</span>
          </div>
          <p>{description}</p>
          <PulseButton href={href} />
        </div>
      </div>
    </div>
  );
}

export function CardThree(props) {
  const { title, description, price, priceUnit, href } = props;

  return (
    <div className='card card-three shadow-sharp'>
      <div className='card-content'>
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
