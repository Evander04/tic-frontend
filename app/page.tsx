import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Welcome to Tic-Tac-Toe Game</h1>
      <div className="space-x-4">
        <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Login
        </Link>
        <Link href="/signup" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
