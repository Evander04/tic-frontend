'use client';

import { useState } from 'react';
import Link from 'next/link';
import useAuthToken from '@/hooks/useAuthToken';

export default function UserDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const {signOut} = useAuthToken();

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="focus:outline-none">
        <img          
          alt="User Icon"
          className="w-10 h-10 rounded-full border border-white"
        />
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
          <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Settings
          </Link>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
