import Image from 'next/image';

// current logo image path
import logo from '/public/images/logo/logo_blue_white_bg.svg';

export default function Logo(props) {
  const { width, height } = props;
  return (
    <div className=''>
      <a href='/'>
        <Image src={logo} alt='Company Logo' width={width} height={height} />
      </a>
    </div>
  );
}
