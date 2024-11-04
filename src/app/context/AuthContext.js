'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { getCurrentUser } from 'aws-amplify/auth';
import amplifyconfig from "../../amplifyconfiguration.json";

Amplify.configure(amplifyconfig);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const loggedInUser = await getCurrentUser();
        setUser(loggedInUser);
      } catch (err) {
        setUser(null);
      }
    };
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
