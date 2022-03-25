import Link from 'next/dist/client/link';

export default function Home() {
  const header = 'Auto Accident Specialist, Spinal Rehab and Wellness Care';
  const subHeader = 'Nature needs no help, just no interference.';

  return (
    <div className="page">
      <div className="container">
        <h1>{header}</h1>
        <h2>{subHeader}</h2>
      </div>
    </div>
  );
}
