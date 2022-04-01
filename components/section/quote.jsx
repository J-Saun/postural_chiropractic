export default function Quote(props) {
  const { quote, quoteAuthor } = props;
  return (
    <>
      <div className='container mb-7'>
        <blockquote>
          <p>
            <strong>{quote}</strong>
          </p>
          <cite>{quoteAuthor}</cite>
        </blockquote>
      </div>
    </>
  );
}
