export default function Quote(props) {
  // The preservation of health is easier than the cure of disease.

  return (
    <>
      <div className='container fade-in'>
        <blockquote>
          <h3 className='quotation'>
            <span>The</span>
            <span>preservation</span>
            <span>of</span>
            <span>health</span>
            <span>is</span>
            <span>easier</span>
            <span>than</span>
            <span>the</span>
            <span>cure</span>
            <span>of</span>
            <span>disease.</span>
          </h3>
          <footer>
            <cite>
              <h4>
                <span>- B.J.</span>
                <span>Palmer</span>
              </h4>
            </cite>
          </footer>
        </blockquote>
      </div>
    </>
  );
}
