import Image from 'next/image';

export default function Info(props) {
  const { content, img } = props;

  return (
    <>
      <div className='info-wrapper flex'>
        <div className='info-img' />

        <div className='body'>
          <p>{content}</p>
        </div>
      </div>

      {/* <script src='/javascripts/animations'></script> */}
    </>
  );
}

//   /* <CTAButton href={'about'} label={'Check It Out!'} /> */
