import { FillButton, PulseButton, CloseButton } from '../buttons/button';

import styles from './cards.module.scss';

export function CardOne(props) {
  const { title, description, price, priceUnit } = props;

  return (
    <div className={styles.cardOne}>
      {/* <div className={styles.box}> */}
      {/* <div className={styles.glass}></div> */}

      <div className={styles.header}>
        <p>{title}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}</span>
          <span className={styles.priceUnit}>{priceUnit}</span>
          <p>{description}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <FillButton />
      </div>
    </div>
    // </div>
  );
}

export function CardTwo(props) {
  const { title, description, price, priceUnit } = props;

  return (
    <div className={styles.cardTwo}>
      <div className={styles.box}>
        <div className={styles.glass}></div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <div className={styles.priceContainer}>
            <span className={styles.price}>{price}</span>
            <span className={styles.priceUnit}>{priceUnit}</span>
          </div>
          <p>{description}</p>
          <PulseButton />
        </div>

        {/* <div className={styles.footer}>
        </div> */}
      </div>
    </div>
  );
}

export function CardThree(props) {
  const { title, description, price, priceUnit } = props;
  // const { cardThree } = props.styles.cardThree;

  return (
    <div className={styles.cardThree}>
      <div className={styles.cardThree}>
        <div className={styles.head}>
          <h3>{title}</h3>
        </div>
        <div className={styles.body}>
          <p>{description}</p>
          <span>{price}</span>
          <span>{priceUnit}</span>
        </div>
        <div className={styles.footer}>
          {/* <ButtonThree /> */}
          <CloseButton />
        </div>
      </div>
    </div>
  );
}
