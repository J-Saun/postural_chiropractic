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

export function FillButton() {
  return (
    <div className={styles.fillBtn}>
      <button className={styles.fill}>Schedule Now!</button>
    </div>
  );
}
export function PulseButton() {
  return (
    <div className={styles.pulseBtn}>
      <button className={styles.pulse}>Schedule Now!</button>
    </div>
  );
}
export function CloseButton() {
  return (
    <div className={styles.btnThree}>
      <button className={styles.raise}>Schedule Now!</button>
    </div>
  );
}
