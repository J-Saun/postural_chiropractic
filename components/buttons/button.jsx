import Link from 'next/dist/client/link';
import styles from './button.module.scss';

/*         Button Types
<button className={styles.fillBtn}>Fill In</button>
<button className={styles.pulseBtn}>Pulse</button>
<button className={styles.closeBtn}>Close</button>
<button className={styles.raiseBtn}>Raise</button>
<button className={styles.upBtn}>Fill Up</button>
<button className={styles.slideBtn}>Slide</button>
<button className={styles.offsetBtn}>Offset</button> 
*/

export function FillButton(props) {
  return (
    <div className={styles.fillBtn}>
      <Link href='/contact'>
        <button className={styles.fill}>Schedule Now!</button>
      </Link>
    </div>
  );
}
export function PulseButton(props) {
  return (
    <div className={styles.pulseBtn}>
      <Link href='/contact'>
        <button className={styles.pulse}>Schedule Now!</button>
      </Link>
    </div>
  );
}
export function CloseButton(props) {
  return (
    <div className={styles.btnThree}>
      <Link href='/contact'>
        <button className={styles.raise}>Schedule Now!</button>
      </Link>
    </div>
  );
}
