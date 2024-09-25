'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signupWS } from '@/api/login';
import useAuthToken from '@/hooks/useAuthToken';

export default function SignupComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const {logIn} = useAuthToken();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const body = {
        firstName,
        lastName,
        username,
        email,
        password
      }      
      const response:Response|undefined = await signupWS(body);                  

      if (response?.ok) {
        const data = await response.json();
        logIn(data);
      } else {
        setError('Failed to sign up');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
    {error && <p className="text-red-500 mb-4">{error}</p>}
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">First Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Last Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Username</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>    
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Confirm Password</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
        Sign Up
      </button>
    </form>
  </div>
  );
}
