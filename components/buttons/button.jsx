import Link from 'next/dist/client/link';

export function CTAButton(props) {
  const { linkTo, label } = props;
  const href = `/${linkTo}`;
  return (
    <>
      <Link href={href}>
        <button className='cta-btn'>{label}</button>
      </Link>
    </>
  );
}
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
