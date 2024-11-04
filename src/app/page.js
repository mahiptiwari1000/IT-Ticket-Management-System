"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from './dashboard/page'; // Import the dashboard
import Login from './login/page'; // Import the login page
import { AuthProvider } from './context/AuthContext';
import { Amplify, Auth } from 'aws-amplify';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.add('dark'); // Force dark mode on the whole app

    // Check if the user is authenticated
    const checkAuthStatus = async () => {
      try {
        await Auth.currentAuthenticatedUser(); // Check if user is logged in
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading state while checking authentication
  }

  return (
    <AuthProvider>
      {isAuthenticated ? <Dashboard /> : <Login />}
    </AuthProvider>
  );
}
