export default function Icon(props) {
  const { width, height, src, color } = props;
  return (
    <div className=''>
      <img className={color} height={height} width={width} src={src} />
    </div>
  );
}
