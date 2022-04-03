import { CTAButton } from '../buttons/button';

export default function CTA(props) {
  const { content } = props;
  return (
    <>
      <div className='cta-wrapper flex justify-around p-5'>
        <div className='container'>{content}</div>
        <CTAButton href={'about'} label={'Check It Out!'} />
      </div>
    </>
  );
}
