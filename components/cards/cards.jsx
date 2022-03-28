import { FillButton, PulseButton, CloseButton } from '../buttons/button';

export function CardOne(props) {
  const { title, description, price, priceUnit, href } = props;

  return (
    <div className='card cardOne'>
      <div className='header'>
        <p>{title}</p>
      </div>
      <div className='body'>
        <div className='priceContainer'>
          <span className='price'>{price}</span>
          <span className='priceUnit'>{priceUnit}</span>
        </div>
        <p>{description}</p>
      </div>

      <div className='footer'>
        <FillButton href={href} />
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

        {/* <div className='.footer}>
        </div> */}
      </div>
    </div>
  );
}

export function CardThree(props) {
  const { title, description, price, priceUnit, href } = props;

  return (
    <div class='card card-three shadow-sharp'>
      <div class='card-content'>
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
