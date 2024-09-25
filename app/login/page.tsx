'use client'

import LoginComponent from "@/components/loginComponent";
import SignupComponent from "@/components/signupComponent";
import { useState } from "react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <button
            className={`mr-4 px-4 py-2 text-lg font-semibold ${isLogin ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold ${!isLogin ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? <LoginComponent /> : <SignupComponent />}
      </div>
    </div>
  );
}
