import styles from './cards.module.scss';

export function CardOne(props) {
  const { title, description, price } = props;

  return (
    <div className={styles.cardGroupOne}>
      <div className={styles.head}>
        <h3>{title}</h3>
      </div>
      <div className={styles.body}>
        <p>{description}</p>
        <span>{price}</span>
      </div>
      <div className={styles.footer}>
        <button>Schedule Now!</button>
      </div>
    </div>
  );
}
export function CardTwo(props) {
  const { title, description, price } = props;
  // const { head, body, footer } = styles.props;

  return (
    <div className={styles.cardGroupTwo}>
      <div className={styles.head}>
        <h3>{title}</h3>
      </div>
      <div className={styles.body}>
        <p>{description}</p>
        <span>{price}</span>
      </div>
      <div className={styles.footer}>
        <button>Schedule Now!</button>
      </div>
    </div>
  );
}
export function CardThree(props) {
  const { title, description, price } = props;

  return (
    <div className={styles.cardGroupThree}>
      <div className={styles.head}>
        <h3>{title}</h3>
      </div>
      <div className={styles.body}>
        <p>{description}</p>
        <span>{price}</span>
      </div>
      <div className={styles.footer}>
        <button>Schedule Now!</button>
      </div>
    </div>
  );
}
