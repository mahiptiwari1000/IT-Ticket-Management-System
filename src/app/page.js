"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from './dashboard/page'; // Import the dashboard
import Login from './login/page'; // Import the login page
import { AuthProvider } from './context/AuthContext';
import { Amplify} from 'aws-amplify';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import amplifyconfig from '../amplifyconfiguration.json'; // Ensure amplifyconfiguration.json path is correct

Amplify.configure(amplifyconfig);

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuthStatus = async () => {
      try {
        // Retrieve the current user
        const user = await getCurrentUser();
        
        // Fetch session details
        const session = await fetchAuthSession();

        // Check if the session is valid
        if (user && session && session.isValid()) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        // If there's an error (e.g., user is not signed in), set authentication status to false
        console.error("Authentication check failed:", error);
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
