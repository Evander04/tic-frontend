import UserDropdown from './UserDropdown';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Tic-Tac-Toe
        </Link>
        <UserDropdown />
      </div>
    </nav>
  );
}
