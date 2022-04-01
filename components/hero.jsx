import Image from 'next/image';
// import golfer from '../asset/myimage.png';

export default function Hero(props) {
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  // section hero flex flex-wrap
  const classes = 'hero-wrapper bg-primary-gradient';

  const style = {
    // position: 'fixed',
    // top: 0,
    // left: 0,
    // 'min-width': '100%',
    // 'min-height': '100%',
    'background-color': 'black',
  };
  //   section hero has-border
  //   '': backgroundImage,
  //   'bg-none': backgroundColor === 'none',
  //   '': backgroundColor === 'primary',
  //   'bg-secondary': backgroundColor === 'secondary',
  //   'pt-4': paddingTop === 'small',
  //   'pt-6': paddingTop === 'medium' || paddingTop === 'large',
  //   'pt-md-7': paddingTop === 'large',
  //   'pb-4': paddingBottom === 'small',
  //   'pb-6': paddingBottom === 'medium' || paddingBottom === 'large',
  //   'pb-md-7': paddingBottom === 'large',
  // })
  const { img, title, subtitle, content, sectionId } = props;

  return (
    <section id={sectionId} className={classes}>
      <div className='container'>
        <div className='hero-img '>
          {/* <img src={img} alt={'imageAlt'} className={'image-fluid'} /> */}
          {/* <Image
          src={img}
          alt='Picture of the author'
          width='750px'
          height='500px'
          layout='fixed' // layout="fill", layout="intrinsic"
        /> */}
        </div>
        <div className='hero-content'>
          <h1 className='hero__title'>{title}</h1>
          <p className='hero__subtitle'>{subtitle}</p>
          <button className='btn btn-outline-warning btn-warning'>
            Call to Action
          </button>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className={'container'}>
<div className='hero__content '>
  <div
  // className={'hero__media my-2 cell-12'}
  >
    <img src={img} alt={'imageAlt'} className={'mx-auto'} />
  </div>

  <div className={'hero__body my-2 cell-12'}>
    <h1 className='hero__title'>{title}</h1>
    <p className='hero__subtitle'>{subtitle}</p>
    <div className='hero__copy'>{content}</div>

    <div className={'hero__actions btn-group'}>
      {/* <SectionActions actions={actions} /> */
}
//     </div>
//   </div>
// </div>
// </div> */}

// ReactDOM.render(<App />, document.getElementById('app'));
