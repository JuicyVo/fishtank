import Link from 'next/link';

const NavigationBar = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
      <li><Link href="/">Home</Link></li>
        <li><Link href="/test">Fish</Link></li>
        <li><Link href="/plants-decor">Plants & Decor</Link></li>
        <li><Link href="/aquascapes">Aquascapes</Link></li>
        <li><Link href="/planner">Planner</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;