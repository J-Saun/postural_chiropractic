import Image from 'next/image';

export default function InfoReverse(props) {
  const { content, img } = props;
  return (
    <>
      <>
        <div className='info-wrapper-reverse container flex mb-5'>
          <div className='body text-center'>
            <p>{content}</p>
          </div>
          <div className='info-img' />
        </div>
      </>
    </>
  );
}
