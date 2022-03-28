import Link from 'next/dist/client/link';
// import from './button.module.scss';
// import from '';

/*         Button Types
<button className={fillBtn}>Fill In</button>
<button className={pulseBtn}>Pulse</button>
<button className={closeBtn}>Close</button>
<button className={raiseBtn}>Raise</button>
<button className={upBtn}>Fill Up</button>
<button className={slideBtn}>Slide</button>
<button className={offsetBtn}>Offset</button> 
*/

export function FillButton(props) {
  return (
    <div className='fillBtn'>
      <Link href='/contact'>
        <button className='fill'>Schedule Now!</button>
      </Link>
    </div>
  );
}
export function PulseButton(props) {
  return (
    <div className='pulseBtn'>
      <Link href='/contact'>
        <button className='pulse'>Schedule Now!</button>
      </Link>
    </div>
  );
}
export function CloseButton(props) {
  return (
    <div className='btnThree'>
      <Link href='/contact'>
        <button className='raise'>Schedule Now!</button>
      </Link>
    </div>
  );
}
