import { CTAButton } from '../buttons/button';

export default function CTA(props) {
  const { content } = props;
  return (
    <>
      <div className='cta-wrapper p-5 mb-5'>
        <div className='cta-body text-center'>
          <span>{content}</span>
          <CTAButton href={'about'} label={'Check It Out!'} />
        </div>
      </div>
    </>
  );
}
