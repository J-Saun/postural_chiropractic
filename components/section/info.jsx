import Image from 'next/image';

export default function Info(props) {
  const { content, img } = props;

  return (
    <div className='info-wrapper'>
      {/* <div className='info-wrapper flex mb-5'> */}
      <div className='info-img' />
      {/* <div className='info-img shadow-sharp' /> */}

      <div className='body'>
        <p>{content}</p>
      </div>
    </div>
  );
}

//   /* <CTAButton href={'about'} label={'Check It Out!'} /> */
