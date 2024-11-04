"use client";

import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      setSuccess('Account created successfully! Please check your email for confirmation.');
    } catch (err) {
      setError(err.message || 'Failed to sign up'); // Show specific error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="w-full max-w-md bg-opacity-90 bg-gray-800 p-10 rounded-xl shadow-xl border border-gray-700 backdrop-blur-md">
        <div className="flex justify-center mb-6">
          <div className="text-5xl text-orange-500">⚡</div>
        </div>
        
        <h2 className="text-3xl font-semibold text-center text-orange-500 mb-8">Register</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <span
            className="text-orange-500 cursor-pointer"
            onClick={() => router.push('/login')}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
