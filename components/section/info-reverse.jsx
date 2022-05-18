import Image from 'next/image';

export default function InfoReverse(props) {
  const { content, img } = props;
  return (
    <div className='info-wrapper-reverse'>
      {/* <div className='info-img shadow-sharp' /> */}

      <div className='body'>
        <p>{content}</p>
      </div>
      <div className='info-img' />
    </div>
  );
}
