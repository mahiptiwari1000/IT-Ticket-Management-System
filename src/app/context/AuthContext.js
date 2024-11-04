'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const loggedInUser = await Auth.currentAuthenticatedUser();
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
