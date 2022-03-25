import styles from './cards.module.scss';

export function CardOne(props) {
  const { title, description, price } = props;

  return (
    <div className={styles.cardOne}>
      <h3>{title}</h3>
      <p>{description}</p>
      <h5>{price}</h5>
    </div>
  );
}
export function CardTwo(props) {
  const { title, description, price } = props;

  return (
    <div className={styles.cardOne}>
      <h3>{title}</h3>
      <p>{description}</p>
      <h5>{price}</h5>
    </div>
  );
}
export function CardThree(props) {
  const { title, description, price } = props;

  return (
    <div className={styles.cardOne}>
      <h3>{title}</h3>
      <p>{description}</p>
      <h5>{price}</h5>
    </div>
  );
}
