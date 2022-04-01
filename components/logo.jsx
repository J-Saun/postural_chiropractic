import Image from 'next/image';

// current logo image path
import logo from '/public/logo/logo_thin_band_white_bg.svg';

export default function Logo(props) {
  const { width, height } = props;
  return (
    <>
      <a href='/'>
        <Image src={logo} alt='Company Logo' width={width} height={height} />
      </a>
    </>
  );
}
